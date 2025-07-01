
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
   * Realiza búsqueda híbrida con múltiples estrategias
   */
  search(query: string, options: SearchOptions = { threshold: 0.4 }): SearchResult<T>[] {
    if (!query || query.trim().length === 0) {
      return [];
    }

    const normalizedQuery = TextNormalizationService.normalize(query);
    const results = new Map<string, SearchResult<T>>();

    // 1. Búsqueda exacta (score más alto)
    this.exactSearch(query, normalizedQuery, results);

    // 2. Búsqueda fuzzy con Fuse.js
    this.fuzzySearch(query, options, results);

    // 3. Búsqueda parcial normalizada
    this.partialSearch(normalizedQuery, results);

    // Convertir a array y ordenar por score
    const sortedResults = Array.from(results.values())
      .filter(result => !options.minScore || result.score >= options.minScore)
      .sort((a, b) => b.score - a.score);

    // Limitar resultados si se especifica
    return options.maxResults 
      ? sortedResults.slice(0, options.maxResults)
      : sortedResults;
  }

  /**
   * Búsqueda exacta - Mayor prioridad
   */
  private exactSearch(query: string, normalizedQuery: string, results: Map<string, SearchResult<T>>): void {
    for (const item of this.items) {
      const normalizedName = TextNormalizationService.normalize(item.name);
      const normalizedCategory = TextNormalizationService.normalize((item as any).category || '');

      // Match exacto en nombre
      if (normalizedName === normalizedQuery) {
        results.set(item.id, {
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
        results.set(item.id, {
          item,
          score: 0.95,
          matchType: 'exact',
          matchedTerms: [(item as any).category || ''],
          originalQuery: query
        });
      }
    }
  }

  /**
   * Búsqueda fuzzy con Fuse.js
   */
  private fuzzySearch(query: string, options: SearchOptions, results: Map<string, SearchResult<T>>): void {
    const fuseResults = this.fuse.search(query);

    for (const fuseResult of fuseResults) {
      const { item, score = 1 } = fuseResult;
      
      // Solo agregar si no existe o tiene mejor score que fuzzy
      const existingResult = results.get(item.id);
      const fuzzyScore = Math.max(0, (1 - score) * 0.8); // Convertir score de Fuse.js y limitarlo

      if (!existingResult || (existingResult.matchType === 'partial' && fuzzyScore > existingResult.score)) {
        const matchedTerms = fuseResult.matches
          ? fuseResult.matches.map(match => match.value || '')
          : [item.name];

        results.set(item.id, {
          item,
          score: fuzzyScore,
          matchType: 'fuzzy',
          matchedTerms,
          originalQuery: query
        });
      }
    }
  }

  /**
   * Búsqueda parcial normalizada
   */
  private partialSearch(normalizedQuery: string, results: Map<string, SearchResult<T>>): void {
    for (const item of this.items) {
      // Skip si ya existe con mejor score
      const existingResult = results.get(item.id);
      if (existingResult && existingResult.matchType !== 'partial') {
        continue;
      }

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
        results.set(item.id, {
          item,
          score: matchScore,
          matchType: 'partial',
          matchedTerms,
          originalQuery: normalizedQuery
        });
      }
    }
  }

  /**
   * Actualiza los elementos y recrea el índice de Fuse.js
   */
  updateItems(items: T[]): void {
    this.items = items;
    this.fuse = new Fuse(items, this.getFuseConfig());
  }
}
