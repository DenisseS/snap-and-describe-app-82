
import React from 'react';
import { FilterCriteria } from '@/types/search';
import { useTranslation } from 'react-i18next';
import { productsDB } from '@/data/database';

interface CategoryFilterProps {
  filters: FilterCriteria[];
  onAddFilter: (filter: FilterCriteria) => void;
  onRemoveFilter: (filter: FilterCriteria) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  filters,
  onAddFilter,
  onRemoveFilter
}) => {
  const { t } = useTranslation();

  // Get unique categories from products
  const categories = Array.from(new Set(productsDB.map(p => p.category))).sort();

  const getActiveCategoryFilter = () => {
    return filters.find(f => f.type === 'category');
  };

  const isCategoryActive = (category: string) => {
    const activeFilter = getActiveCategoryFilter();
    return activeFilter?.value === category;
  };

  const selectCategory = (category: string) => {
    const existing = getActiveCategoryFilter();
    
    if (existing && existing.value === category) {
      onRemoveFilter(existing);
    } else {
      if (existing) {
        onRemoveFilter(existing);
      }
      onAddFilter({
        type: 'category',
        field: 'category',
        value: category,
        operator: 'equals'
      });
    }
  };

  return (
    <div className="space-y-2">
      <h4 className="text-sm font-medium text-gray-900">{t('category')}</h4>
      <div className="grid grid-cols-2 gap-2">
        {categories.map((category) => {
          const isActive = isCategoryActive(category);
          
          return (
            <button
              key={category}
              onClick={() => selectCategory(category)}
              className={`p-2 rounded-lg text-sm transition-colors text-left ${
                isActive
                  ? 'bg-blue-100 text-blue-800 border border-blue-300'
                  : 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              <span className="text-xs truncate">
                {t(`database:categories.${category}`, category)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
