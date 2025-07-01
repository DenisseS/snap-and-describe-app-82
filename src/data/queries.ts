
import { Product } from './types';
import { productsDB } from './products';

// Database query functions
export const getProductById = (id: string): Product | undefined => {
  return productsDB.find(product => product.id === id);
};

export const getProductsByIds = (ids: string[]): Product[] => {
  return ids.map(id => getProductById(id)).filter(Boolean) as Product[];
};

export const getSimilarProducts = (productId: string): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  return getProductsByIds(product.otherOptionsIds);
};

export const getProductsByCategory = (category: string): Product[] => {
  return productsDB.filter(product => product.category === category);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return productsDB.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};

// Note: Favorites functionality has been moved to UserProfile management
// using UserDataService and Dropbox integration for real data persistence
