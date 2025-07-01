
import React from 'react';
import HorizontalProductScroll from './HorizontalProductScroll';
import { getSimilarProducts } from '@/data/database';

interface SimilarProduct {
  id: string;
  name: string;
  image: string;
  rating: number;
  status: string;
}

interface SimilarProductsProps {
  currentProduct: string;
  onItemSelect: (item: SimilarProduct) => void;
}

const SimilarProducts: React.FC<SimilarProductsProps> = ({ 
  currentProduct, 
  onItemSelect 
}) => {
  // Get similar products from database
  const similarProductsFromDB = getSimilarProducts(currentProduct);
  
  // Convert to SimilarProduct format
  const similarProducts: SimilarProduct[] = similarProductsFromDB.map(product => ({
    id: product.id,
    name: product.name,
    image: product.image,
    rating: product.rating,
    status: 'similar'
  }));

  return (
    <HorizontalProductScroll 
      products={similarProducts}
      onProductSelect={onItemSelect}
    />
  );
};

export default SimilarProducts;
