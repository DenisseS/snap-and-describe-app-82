
// Re-exports for backward compatibility
export type { Product, UserFavorites } from './types';
export { productsDB } from './products';
export {
  getProductById,
  getProductsByIds,
  getSimilarProducts,
  getProductsByCategory,
  searchProducts
} from './queries';
