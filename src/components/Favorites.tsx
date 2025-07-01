
import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useProductTranslation } from '@/hooks/useProductTranslation';
import SearchableList from '@/components/SearchableList';
import { getProductById } from '@/data/database';
import { useUserFavorites } from '@/hooks/useUserFavorites';
import { DataState } from '@/types/userData';

interface FavoriteItem {
  id: string;
  name: string;
  image: string;
  rating: number;
  status: string;
}

interface FavoritesProps {
  onItemSelect: (item: FavoriteItem) => void;
}

const Favorites: React.FC<FavoritesProps> = ({ onItemSelect }) => {
  const { t } = useTranslation();
  const { translateProductName } = useProductTranslation();
  const { favorites, state } = useUserFavorites();
  const [favoriteItems, setFavoriteItems] = useState<FavoriteItem[]>([]);

  // Convert favorites data to FavoriteItem array - ONLY items with 'heart' status
  const convertToFavoriteItems = useCallback((favoritesData: Record<string, { status: 'heart' | 'thumb-down' }>) => {
    const items: FavoriteItem[] = [];
    
    Object.entries(favoritesData).forEach(([productId, favoriteData]) => {
      // Only include items with 'heart' status in the favorites list
      if (favoriteData.status === 'heart') {
        const product = getProductById(productId);
        if (product) {
          items.push({
            id: product.id,
            name: translateProductName(product),
            image: product.image,
            rating: product.rating,
            status: favoriteData.status
          });
        }
      }
    });
    
    return items;
  }, [translateProductName]);

  // Update favorite items when favorites data changes
  useEffect(() => {
    if (favorites) {
      const items = convertToFavoriteItems(favorites);
      setFavoriteItems(items);
      console.log('📱 Favorites: Updated favorite items from profile data (hearts only)', items);
    } else {
      setFavoriteItems([]);
    }
  }, [favorites, convertToFavoriteItems]);

  // Search function that filters only in user's favorites
  const handleSearch = useCallback((searchTerm: string, items: FavoriteItem[]) => {
    if (searchTerm.trim() === '') {
      return favoriteItems; // Return all favorites if search is empty
    } else {
      // Filter favorites by search term (search in name)
      return favoriteItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }, [favoriteItems]);

  const isLoading = state === DataState.LOADING;
  const hasLoaded = state !== DataState.LOADING && state !== DataState.IDLE;

  return (
    <div className="min-h-full bg-gray-50">
      <div className="h-full">
        <SearchableList
          items={favoriteItems}
          onItemSelect={onItemSelect}
          onSearch={handleSearch}
          searchPlaceholder={t('searchYourFavorites')}
          showLoading={isLoading}
          hasLoaded={hasLoaded}
        />
      </div>
    </div>
  );
};

export default Favorites;
