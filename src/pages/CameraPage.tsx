
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import CameraScanner from '@/components/CameraScanner';
import { useCamera } from '@/hooks/useCamera';
import { getProductSlug } from '@/utils/productUtils';
import { getProductById } from '@/data/database';
import { useTranslation } from 'react-i18next';

const CameraPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const navigateToProduct = (productId: string) => {
    console.log('📱 CameraPage: Navigate to product:', productId);
    const product = getProductById(productId);
    if (product) {
      const slug = getProductSlug(product);
      navigate(`/product/${slug}`);
    }
  };

  const { handlePhotoTaken, isAnalyzing } = useCamera(navigateToProduct);

  const headerProps = {
    title: t('scanFood'),
    showBackButton: true,
    showAvatar: true
  };

  return (
    <Layout
      currentView="camera"
      headerProps={headerProps}
    >
      <CameraScanner onPhotoTaken={handlePhotoTaken} isAnalyzing={isAnalyzing} />
    </Layout>
  );
};

export default CameraPage;
