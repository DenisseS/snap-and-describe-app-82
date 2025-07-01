
import React from 'react';
import Layout from '@/components/Layout';
import Explore from '@/components/Explore';
import { useTranslation } from 'react-i18next';

const ExplorePage: React.FC = () => {
  const { t } = useTranslation();

  const headerProps = {
    title: t('exploreProducts'),
    showBackButton: true,
    showAvatar: true
  };

  return (
    <Layout
      currentView="explore"
      headerProps={headerProps}
    >
      <Explore />
    </Layout>
  );
};

export default ExplorePage;
