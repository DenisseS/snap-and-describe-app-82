
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { getProductSlug } from '@/utils/productUtils';
import { getProductById } from '@/data/database';
import { useProductTranslation } from '@/hooks/useProductTranslation';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  status?: string;
  onClick?: () => void;
  referrer?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id,
  name, 
  image,
  rating,
  status,
  onClick,
  referrer
}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { currentLanguage } = useProductTranslation();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Get the full product data to generate proper slug
      const product = getProductById(id);
      if (product) {
        const slug = getProductSlug(product, currentLanguage);
        
        // Get referrer from props or current URL params
        const currentReferrer = referrer || searchParams.get('view') || 'home';
        navigate(`/product/${slug}?referrer=${currentReferrer}`);
      }
    }
  };

  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-32 xs:h-40 object-cover"
        />
      </div>
      
      <CardContent className="p-2 xs:p-3">
        <h3 className="font-semibold text-sm xs:text-base text-gray-800 mb-2 line-clamp-2">
          {name}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-blue-500 font-bold text-base">{rating}/10</span>
            <div className="flex-1 bg-gray-200 rounded-full h-1 w-16">
              <div 
                className="bg-blue-500 h-1 rounded-full" 
                style={{ width: `${(rating / 10) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
