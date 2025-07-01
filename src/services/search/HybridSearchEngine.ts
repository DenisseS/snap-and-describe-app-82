
import Fuse from 'fuse.js';
import { Searchable } from '@/types/search';
import { TextNormalizationService } from './TextNormalizationService';
import { SearchResult, SearchOptions } from './types';

/**
 * Motor de búsqueda híbrido que combina:
 * - Búsqueda exacta (mayor score)
 * - Búsqueda fuzzy con Fuse.js
 * - Búsqueda parcial normalizada
 */
export class HybridSearchEngine<T extends Searchable> {
  private fuse: Fuse<T>;
  private items: T[];

  constructor(items: T[]) {
    this.items = items;
    this.fuse = new Fuse(items, this.getFuseConfig());
  }

  /**
   * Configuración optimizada de Fuse.js
   */
  private getFuseConfig() {
    return {
      threshold: 0.4,        // Tolerancia a errores tipográficos
      location: 0,           // Posición esperada del match
      distance: 100,         // Distancia máxima del location
      maxPatternLength: 32,  // Máximo patrón de búsqueda
      minMatchCharLength: 2, // Mínimo caracteres para match
      keys: [
        { name: 'name', weight: 0.8 },
        { name: 'category', weight: 0.3 }
      ],
      includeScore: true,
      includeMatches: true,
      shouldSort: true
    };
  }

  /**
   * Realiza búsqueda híbrida con prioridad jerárquica
   * 1. Primero busca matches exactos
   * 2. Si no encuentra exactos, busca fuzzy
   * 3. Si no encuentra fuzzy, busca parciales
   */
  search(query: string, options: SearchOptions = { threshold: 0.4 }): SearchResult<T>[] {
    if (!query || query.trim().length === 0) {
      return [];
    }

    const normalizedQuery = TextNormalizationService.normalize(query);

    // 1. Intentar búsqueda exacta primero
    const exactResults = this.getExactMatches(query, normalizedQuery);
    if (exactResults.length > 0) {
      return this.limitAndSort(exactResults, options);
    }

    // 2. Si no hay exactos, intentar fuzzy
    const fuzzyResults = this.getFuzzyMatches(query, options);
    if (fuzzyResults.length > 0) {
      return this.limitAndSort(fuzzyResults, options);
    }

    // 3. Si no hay fuzzy, intentar búsqueda parcial
    const partialResults = this.getPartialMatches(normalizedQuery);
    return this.limitAndSort(partialResults, options);
  }

  /**
   * Aplica filtros y límites a los resultados
   */
  private limitAndSort(results: SearchResult<T>[], options: SearchOptions): SearchResult<T>[] {
    const filteredResults = results
      .filter(result => !options.minScore || result.score >= options.minScore)
      .sort((a, b) => b.score - a.score);

    return options.maxResults 
      ? filteredResults.slice(0, options.maxResults)
      : filteredResults;
  }

  /**
   * Obtiene matches exactos únicamente
   */
  private getExactMatches(query: string, normalizedQuery: string): SearchResult<T>[] {
    const results: SearchResult<T>[] = [];

    for (const item of this.items) {
      const normalizedName = TextNormalizationService.normalize(item.name);
      const normalizedCategory = TextNormalizationService.normalize((item as any).category || '');

      // Match exacto en nombre
      if (normalizedName === normalizedQuery) {
        results.push({
          item,
          score: 1.0,
          matchType: 'exact',
          matchedTerms: [item.name],
          originalQuery: query
        });
        continue;
      }

      // Match exacto en categoría
      if (normalizedCategory === normalizedQuery) {
        results.push({
          item,
          score: 0.95,
          matchType: 'exact',
          matchedTerms: [(item as any).category || ''],
          originalQuery: query
        });
      }
    }

    return results;
  }

  /**
   * Obtiene matches fuzzy únicamente
   */
  private getFuzzyMatches(query: string, options: SearchOptions): SearchResult<T>[] {
    const fuseResults = this.fuse.search(query);
    const results: SearchResult<T>[] = [];

    for (const fuseResult of fuseResults) {
      const { item, score = 1 } = fuseResult;
      const fuzzyScore = Math.max(0, (1 - score) * 0.8); // Convertir score de Fuse.js y limitarlo

      const matchedTerms = fuseResult.matches
        ? fuseResult.matches.map(match => match.value || '')
        : [item.name];

      results.push({
        item,
        score: fuzzyScore,
        matchType: 'fuzzy',
        matchedTerms,
        originalQuery: query
      });
    }

    return results;
  }

  /**
   * Obtiene matches parciales únicamente
   */
  private getPartialMatches(normalizedQuery: string): SearchResult<T>[] {
    const results: SearchResult<T>[] = [];

    for (const item of this.items) {
      const normalizedName = TextNormalizationService.normalize(item.name);
      const normalizedCategory = TextNormalizationService.normalize((item as any).category || '');

      let matchScore = 0;
      const matchedTerms: string[] = [];

      // Match parcial en nombre
      if (normalizedName.includes(normalizedQuery)) {
        matchScore = Math.max(matchScore, 0.6);
        matchedTerms.push(item.name);
      }

      // Match parcial en categoría
      if (normalizedCategory.includes(normalizedQuery)) {
        matchScore = Math.max(matchScore, 0.5);
        matchedTerms.push((item as any).category || '');
      }

      if (matchScore > 0) {
        results.push({
          item,
          score: matchScore,
          matchType: 'partial',
          matchedTerms,
          originalQuery: normalizedQuery
        });
      }
    }

    return results;
  }

  /**
   * Actualiza los elementos y recrea el índice de Fuse.js
   */
  updateItems(items: T[]): void {
    this.items = items;
    this.fuse = new Fuse(items, this.getFuseConfig());
  }
}
