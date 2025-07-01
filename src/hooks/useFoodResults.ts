
import { useState, useEffect } from 'react';
import { getProductById } from '@/data/database';
import { useProductTranslation } from '@/hooks/useProductTranslation';
import { useFavoriteActions } from '@/hooks/useFavoriteActions';

interface UseFoodResultsProps {
  productId: string;
  onSimilarProductSelect?: (product: { id: string; name: string; image: string; rating: number; status: string }) => void;
}

export const useFoodResults = ({ productId, onSimilarProductSelect }: UseFoodResultsProps) => {
  const { translateProductName } = useProductTranslation();
  const { getFavoriteStatus, updateFavoriteStatus } = useFavoriteActions();
  const [expandedCard, setExpandedCard] = useState<string | null>('nutri');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Get product data from database
  const product = getProductById(productId);

  // Get user status from favorites system
  const userStatus = getFavoriteStatus(productId);

  const handleCardClick = (cardType: string) => {
    setExpandedCard(expandedCard === cardType ? null : cardType);
  };

  const handleHeartClick = async () => {
    const newStatus = userStatus === 'heart' ? null : 'heart';
    setIsLoading(true);
    
    try {
      await updateFavoriteStatus(productId, newStatus);
    } catch (error) {
      console.error('Error saving preference:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleThumbsDownClick = async () => {
    const newStatus = userStatus === 'thumb-down' ? null : 'thumb-down';
    setIsLoading(true);
    
    try {
      await updateFavoriteStatus(productId, newStatus);
    } catch (error) {
      console.error('Error saving preference:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSeeMore = () => {
    setIsModalOpen(true);
  };

  const handleSimilarProductSelect = (product: { id: string; name: string; image: string; rating: number; status: string }) => {
    if (onSimilarProductSelect) {
      onSimilarProductSelect(product);
    }
  };

  // Get translated product name
  const translatedName = product ? translateProductName(product) : '';

  return {
    product,
    translatedName,
    expandedCard,
    isModalOpen,
    userStatus,
    isLoading,
    handleCardClick,
    handleHeartClick,
    handleThumbsDownClick,
    handleSeeMore,
    handleSimilarProductSelect,
    setIsModalOpen
  };
};
