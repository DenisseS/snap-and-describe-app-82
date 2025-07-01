
import { useTranslation } from 'react-i18next';
import { Product } from '@/data/types';

type Language = 'en' | 'es';

export const useProductTranslation = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = (i18n.language || 'es') as Language;

  // Translate product name with fallback
  const translateProductName = (product: Product): string => {
    if (product.nameKey) {
      return t(`database:products.${product.id}.name`, { defaultValue: product.name });
    }
    return product.name;
  };

  // Translate product description with fallback
  const translateProductDescription = (product: Product): string => {
    if (product.descriptionKey) {
      return t(`database:products.${product.id}.description`, { defaultValue: product.description || '' });
    }
    return product.description || '';
  };

  // Translate category with fallback
  const translateCategory = (category: string): string => {
    return t(`database:categories.${category}`, { defaultValue: category });
  };

  // Translate vitamin names
  const translateVitamins = (vitamins: string[]): string[] => {
    return vitamins.map(vitamin => 
      t(`database:vitamins.${vitamin}`, { defaultValue: vitamin })
    );
  };

  // Translate mineral names
  const translateMinerals = (minerals: string[]): string[] => {
    return minerals.map(mineral => 
      t(`database:minerals.${mineral}`, { defaultValue: mineral })
    );
  };

  // Translate processing level category
  const translateProcessingCategory = (category: string): string => {
    return t(`database:processing.${category}`, { defaultValue: category });
  };

  // Translate processing level description
  const translateProcessingDescription = (descriptionKey?: string, fallbackDescription?: string): string => {
    if (descriptionKey) {
      return t(`database:processing.${descriptionKey}`, { defaultValue: fallbackDescription || '' });
    }
    return fallbackDescription || '';
  };

  // Translate processing level indicators
  const translateProcessingIndicators = (indicatorsKeys?: string[], fallbackIndicators?: string[]): string[] => {
    if (indicatorsKeys) {
      return indicatorsKeys.map(key => 
        t(`database:processing.${key}`, { defaultValue: key })
      );
    }
    return fallbackIndicators || [];
  };

  return {
    translateProductName,
    translateProductDescription,
    translateCategory,
    translateVitamins,
    translateMinerals,
    translateProcessingCategory,
    translateProcessingDescription,
    translateProcessingIndicators,
    currentLanguage
  };
};
