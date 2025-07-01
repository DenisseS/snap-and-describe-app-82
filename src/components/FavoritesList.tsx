
import React from 'react';
import { useTranslation } from 'react-i18next';

interface FavoriteItem {
  id: string;
  name: string;
  image: string;
  rating: number;
  status: string;
}

interface FavoritesListProps {
  onItemSelect: (item: FavoriteItem) => void;
  items?: FavoriteItem[];
  showLoading?: boolean;
  hasLoaded?: boolean;
}

const FavoritesList: React.FC<FavoritesListProps> = ({ 
  onItemSelect, 
  items = [],
  showLoading = false,
  hasLoaded = true
}) => {
  const { t } = useTranslation();

  const handleItemClick = (item: FavoriteItem) => {
    onItemSelect(item);
  };

  // Show loading state when explicitly requested
  if (showLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-gray-500">{t('loading')}</div>
      </div>
    );
  }

  // Only show empty state if we have loaded and there are no favorites
  if (hasLoaded && items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <div className="text-gray-500 text-center">
          <p className="text-sm mb-2">{t('noFavoritesYet')}</p>
          <p className="text-xs">{t('startScanningToAddFavorites')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl p-4 cursor-pointer hover:bg-gray-50 transition-colors shadow-sm border border-gray-100"
            onClick={() => handleItemClick(item)}
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
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
