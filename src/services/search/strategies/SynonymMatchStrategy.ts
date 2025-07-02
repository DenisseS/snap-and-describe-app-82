/**
 * Estrategia de matching usando sinónimos regionales
 * Prioridad 85: Entre starts_with (90) y fuzzy (80)
 */

import { Searchable } from '@/types/search';
import { SearchResult } from '../types';
import { MatchStrategy } from './MatchStrategy';
import { SynonymService } from '../SynonymService';
import { TextNormalizationService } from '../TextNormalizationService';

export class SynonymMatchStrategy<T extends Searchable> implements MatchStrategy<T> {
  private synonymService: SynonymService;

  constructor() {
    this.synonymService = SynonymService.getInstance();
  }

  findMatches(items: T[], query: string, normalizedQuery: string): SearchResult<T>[] {
    const results: SearchResult<T>[] = [];

    // Buscar sinónimos del término
    const synonymMatches = this.synonymService.findSynonyms(query);
    
    if (synonymMatches.length === 0) {
      return results;
    }

    // Para cada sinónimo encontrado, buscar productos que coincidan
    for (const synonymMatch of synonymMatches) {
      const canonicalNormalized = TextNormalizationService.normalize(
        synonymMatch.canonicalTerm, 
        {}, 
        'standard'
      );

      // Buscar items que coincidan con el término canónico
      for (const item of items) {
        const normalizedName = TextNormalizationService.normalize(item.name, {}, 'standard');
        const normalizedCategory = TextNormalizationService.normalize(
          (item as any).category || '', 
          {}, 
          'standard'
        );

        let matchScore = 0;
        const matchedTerms: string[] = [];

        // Match exacto con término canónico en nombre
        if (normalizedName === canonicalNormalized) {
          matchScore = synonymMatch.confidence * 0.95; // Alto score para sinónimo exacto
          matchedTerms.push(item.name);
        }
        // Match que empieza con término canónico en nombre
        else if (normalizedName.startsWith(canonicalNormalized)) {
          const lengthRatio = canonicalNormalized.length / normalizedName.length;
          matchScore = synonymMatch.confidence * (0.85 + lengthRatio * 0.1);
          matchedTerms.push(item.name);
        }
        // Match parcial en nombre (solo si el término canónico es suficientemente largo)
        else if (canonicalNormalized.length >= 4 && normalizedName.includes(canonicalNormalized)) {
          const position = normalizedName.indexOf(canonicalNormalized);
          const lengthRatio = canonicalNormalized.length / normalizedName.length;
          const positionPenalty = position / normalizedName.length;
          
          matchScore = synonymMatch.confidence * (0.7 + lengthRatio * 0.15) * (1 - positionPenalty * 0.3);
          matchedTerms.push(item.name);
        }
        // Match en categoría
        else if (normalizedCategory === canonicalNormalized) {
          matchScore = synonymMatch.confidence * 0.8;
          matchedTerms.push((item as any).category || '');
        }

        // Solo agregar si encontramos un match válido
        if (matchScore > 0) {
          // Evitar duplicados del mismo item
          const existingResult = results.find(r => r.item.id === item.id);
          if (!existingResult) {
            results.push({
              item,
              score: matchScore,
              matchType: 'partial', // Los sinónimos son matches parciales conceptualmente
              matchedTerms: [
                ...matchedTerms,
                `${synonymMatch.originalTerm} → ${synonymMatch.canonicalTerm}`
              ],
              originalQuery: query
            });
          } else if (existingResult.score < matchScore) {
            // Actualizar con mejor score si encontramos uno mejor
            existingResult.score = matchScore;
            existingResult.matchedTerms.push(`${synonymMatch.originalTerm} → ${synonymMatch.canonicalTerm}`);
          }
        }
      }
    }

    // Ordenar por score descendente
    results.sort((a, b) => b.score - a.score);

    return results;
  }

  getType(): string {
    return 'synonym';
  }

  getPriority(): number {
    return 85; // Entre starts_with (90) y fuzzy (80)
  }

  /**
   * Información adicional para debugging
   */
  getDebugInfo(query: string): any {
    const synonymMatches = this.synonymService.findSynonyms(query);
    return {
      query,
      synonymsFound: synonymMatches.length,
      synonyms: synonymMatches.map(match => ({
        original: match.originalTerm,
        canonical: match.canonicalTerm,
        confidence: match.confidence,
        region: match.regionInfo?.country || 'Generic'
      }))
    };
  }
}