
import { Product } from '@/data/database';
import i18n from '@/i18n';

type Language = 'en' | 'es';

export const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
};

export const generateSlugForLanguage = (product: Product, language: Language): string => {
  // Get translated name if available, otherwise use original name
  const translatedName = i18n.t(`database:products.${product.id}.name`, { 
    defaultValue: product.name,
    lng: language 
  });
  return generateSlug(translatedName);
};

export const getProductBySlug = (products: Product[], slug: string): Product | undefined => {
  // Try to find product by slug in any language
  return products.find(product => {
    // Check original name slug
    const originalSlug = generateSlug(product.name);
    if (originalSlug === slug) return true;
    
    // Check English translation slug
    const englishName = i18n.t(`database:products.${product.id}.name`, { 
      defaultValue: product.name,
      lng: 'en' 
    });
    if (generateSlug(englishName) === slug) return true;
    
    // Check Spanish translation slug
    const spanishName = i18n.t(`database:products.${product.id}.name`, { 
      defaultValue: product.name,
      lng: 'es' 
    });
    if (generateSlug(spanishName) === slug) return true;
    
    return false;
  });
};

export const getProductSlug = (product: Product, language: Language = 'es'): string => {
  return generateSlugForLanguage(product, language);
};
