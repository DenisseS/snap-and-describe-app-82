
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { productsDB, getProductById } from '@/data/database';
import { useProductTranslation } from '@/hooks/useProductTranslation';
import { getProductSlug } from '@/utils/productUtils';
import DataView from './DataView';

interface ExploreItem {
  id: string;
  name: string;
  image: string;
  rating: number;
  status: string;
  // Add all Product fields to make it compatible with Searchable
  category: string;
  allergens: any;
  nutrition: any;
  [key: string]: any;
}

interface ExploreProps {
  onItemSelect?: (item: ExploreItem) => void;
}

const Explore: React.FC<ExploreProps> = ({ onItemSelect }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { translateProductName, currentLanguage } = useProductTranslation();

  // Convert all products to ExploreItem format with translated names
  const allItems: ExploreItem[] = productsDB.map(product => ({
    ...product, // Include all product fields for filtering
    name: translateProductName(product),
    status: 'explore'
  }));

  const handleItemSelect = (item: ExploreItem) => {
    if (onItemSelect) {
      onItemSelect(item);
    } else {
      // Get the full product data to generate proper slug
      const product = getProductById(item.id);
      if (product) {
        const slug = getProductSlug(product, currentLanguage);
        navigate(`/product/${slug}?referrer=explore`);
      }
    }
  };

  const renderItem = useCallback((item: ExploreItem) => (
    <div
      key={item.id}
      className="bg-white rounded-xl p-4 cursor-pointer hover:bg-gray-50 transition-colors shadow-sm border border-gray-100"
      onClick={() => handleItemSelect(item)}
    >
      <div className="flex items-center space-x-3">
        <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h4 className="text-base font-semibold text-gray-900 mb-2">
            {item.name}
          </h4>
          <div className="flex items-center space-x-2">
            <span className="text-blue-500 font-bold text-sm">{item.rating}/10</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${(item.rating / 10) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ), [handleItemSelect]);

  return (
    <DataView
      items={allItems}
      renderItem={renderItem}
      searchPlaceholder={t('searchFoodProducts')}
      showFilters={true}
    />
  );
};

export default Explore;
