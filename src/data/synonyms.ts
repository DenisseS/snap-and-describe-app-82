/**
 * Base de datos de sinónimos con términos genéricos y variaciones regionales
 * Estructura optimizada para búsqueda O(1) manteniendo información regional
 */

export interface SynonymEntry {
  canonical: string;           // Término genérico/fallback
  productId: string;          // ID del producto en la base de datos
  confidence: number;         // 0.9 para sinónimos directos
  regionInfo?: {
    region: string;           // Código ISO: "MX", "ES", "AR", "CO", "EC"
    country: string;          // Nombre completo del país
    language?: string;        // "es", "en-US", "en-GB"
  };
}

export interface SynonymDatabase {
  // Índice optimizado para búsqueda O(1)
  searchIndex: { [searchTerm: string]: SynonymEntry };
  
  // Metadatos para gestión (no usado en búsqueda)
  metadata: {
    [productId: string]: {
      canonical: string;
      regions: { [term: string]: string[] };
    }
  };
}

// Base de datos inicial de sinónimos con información regional
const synonymsData = {
  // Maíz y derivados
  "palomitas de maíz": {
    canonical: "palomitas de maíz",
    synonyms: {
      "canguil": ["EC"],           // Ecuador
      "pochoclo": ["AR", "UY"],    // Argentina, Uruguay  
      "pororó": ["PY"],            // Paraguay
      "crispetas": ["CO"],         // Colombia
      "cotufas": ["VE"],           // Venezuela
      "rositas": ["MX"],           // México (algunas regiones)
      "popcorn": ["US", "GB"]      // Inglés
    }
  },
  
  // Aguacate
  "aguacate": {
    canonical: "aguacate", 
    synonyms: {
      "palta": ["AR", "CL", "PE", "UY"],  // Cono Sur
      "avocado": ["US", "GB"]             // Inglés
    }
  },
  
  // Papas
  "papa": {
    canonical: "papa",
    synonyms: {
      "patata": ["ES"],           // España
      "potato": ["US", "GB"]      // Inglés
    }
  },
  
  // Frijoles
  "frijol": {
    canonical: "frijol",
    synonyms: {
      "judía": ["ES"],            // España
      "alubia": ["ES"],           // España (Norte)
      "poroto": ["AR", "CL", "UY"], // Cono Sur
      "caraota": ["VE"],          // Venezuela
      "habichuela": ["CO", "DO"], // Colombia, República Dominicana
      "bean": ["US", "GB"]        // Inglés
    }
  },
  
  // Piña
  "piña": {
    canonical: "piña",
    synonyms: {
      "ananá": ["AR", "PY", "UY"], // Cono Sur
      "abacaxi": ["BR"],           // Brasil (portugués, pero común en frontera)
      "pineapple": ["US", "GB"]    // Inglés
    }
  },
  
  // Durazno
  "durazno": {
    canonical: "durazno",
    synonyms: {
      "melocotón": ["ES"],        // España
      "pérsico": ["AR"],          // Argentina (formal)
      "peach": ["US", "GB"]       // Inglés
    }
  },
  
  // Fresa
  "fresa": {
    canonical: "fresa",
    synonyms: {
      "frutilla": ["AR", "CL", "UY"], // Cono Sur
      "strawberry": ["US", "GB"]      // Inglés
    }
  },
  
  // Maíz tierno
  "maíz": {
    canonical: "maíz",
    synonyms: {
      "choclo": ["AR", "CL", "PE", "EC"], // Andes y Cono Sur
      "elote": ["MX", "GT", "SV"],        // México y Centroamérica
      "jojoto": ["VE"],                   // Venezuela
      "mazorca": ["CO"],                  // Colombia
      "corn": ["US", "GB"]                // Inglés
    }
  },
  
  // Guisantes
  "guisante": {
    canonical: "guisante",
    synonyms: {
      "chícharo": ["MX"],         // México
      "arveja": ["AR", "CO", "PE"], // Varios países
      "petit pois": ["ES"],       // España (galicismo)
      "pea": ["US", "GB"]         // Inglés
    }
  },
  
  // Judías verdes
  "judía verde": {
    canonical: "judía verde",
    synonyms: {
      "ejote": ["MX"],            // México
      "vainita": ["PE", "EC"],    // Perú, Ecuador
      "habichuela tierna": ["CO"], // Colombia
      "poroto verde": ["AR", "CL"], // Cono Sur
      "green bean": ["US"],       // Inglés US
      "french bean": ["GB"]       // Inglés UK
    }
  }
};

// Construir índice de búsqueda optimizado
function buildSearchIndex(): SynonymDatabase {
  const searchIndex: { [key: string]: SynonymEntry } = {};
  const metadata: SynonymDatabase['metadata'] = {};

  // Generar IDs únicos para productos
  let productCounter = 1;
  
  Object.entries(synonymsData).forEach(([canonical, data]) => {
    const productId = `product_${productCounter++}`;
    
    // Agregar término canónico al índice
    searchIndex[canonical.toLowerCase()] = {
      canonical,
      productId,
      confidence: 1.0 // Término principal
    };
    
    // Agregar sinónimos al índice
    Object.entries(data.synonyms).forEach(([synonym, regions]) => {
      searchIndex[synonym.toLowerCase()] = {
        canonical,
        productId,
        confidence: 0.9, // Sinónimo directo
        regionInfo: {
          region: regions[0], // Primera región como principal
          country: getCountryName(regions[0]),
          language: regions[0].length === 2 ? 'es' : 'en'
        }
      };
    });
    
    // Agregar metadata para gestión
    metadata[productId] = {
      canonical,
      regions: data.synonyms
    };
  });

  return { searchIndex, metadata };
}

// Helper para obtener nombre del país
function getCountryName(regionCode: string): string {
  const countries: { [key: string]: string } = {
    'AR': 'Argentina', 'MX': 'México', 'ES': 'España', 'CO': 'Colombia',
    'EC': 'Ecuador', 'PE': 'Perú', 'CL': 'Chile', 'VE': 'Venezuela',
    'UY': 'Uruguay', 'PY': 'Paraguay', 'DO': 'República Dominicana',
    'GT': 'Guatemala', 'SV': 'El Salvador', 'BR': 'Brasil',
    'US': 'Estados Unidos', 'GB': 'Reino Unido'
  };
  return countries[regionCode] || regionCode;
}

// Exportar la base de datos construida
export const SYNONYM_DATABASE = buildSearchIndex();

// Exportar función para testing
export { buildSearchIndex };