
/**
 * Servicio para normalización de texto en búsquedas
 * Maneja acentos, mayúsculas y caracteres especiales
 */

export interface NormalizationOptions {
  removeAccents: boolean;
  toLowerCase: boolean;
  removeSpecialChars: boolean;
  trimWhitespace: boolean;
}

export class TextNormalizationService {
  private static readonly DEFAULT_OPTIONS: NormalizationOptions = {
    removeAccents: true,
    toLowerCase: true,
    removeSpecialChars: true,
    trimWhitespace: true
  };

  /**
   * Normaliza un texto para búsqueda
   */
  static normalize(text: string, options: Partial<NormalizationOptions> = {}): string {
    if (!text) return '';
    
    const config = { ...this.DEFAULT_OPTIONS, ...options };
    let normalized = text;

    // Trimear espacios
    if (config.trimWhitespace) {
      normalized = normalized.trim();
    }

    // Convertir a minúsculas
    if (config.toLowerCase) {
      normalized = normalized.toLowerCase();
    }

    // Remover acentos usando normalización Unicode
    if (config.removeAccents) {
      normalized = normalized
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    }

    // Remover caracteres especiales pero mantener espacios
    if (config.removeSpecialChars) {
      normalized = normalized.replace(/[^\w\s]/g, '');
    }

    // Normalizar espacios múltiples
    normalized = normalized.replace(/\s+/g, ' ');

    return normalized;
  }

  /**
   * Normaliza múltiples términos
   */
  static normalizeTerms(terms: string[], options?: Partial<NormalizationOptions>): string[] {
    return terms
      .map(term => this.normalize(term, options))
      .filter(term => term.length > 0);
  }

  /**
   * Crea variaciones de un término para búsqueda
   */
  static createSearchVariations(term: string): string[] {
    const variations = new Set<string>();
    
    // Original
    variations.add(term);
    
    // Normalizado
    const normalized = this.normalize(term);
    variations.add(normalized);
    
    // Sin acentos pero con mayúsculas
    const withoutAccents = this.normalize(term, { removeAccents: true, toLowerCase: false });
    variations.add(withoutAccents);
    
    // Solo minúsculas
    const lowerCase = this.normalize(term, { removeAccents: false, toLowerCase: true });
    variations.add(lowerCase);

    return Array.from(variations).filter(v => v.length > 0);
  }
}
