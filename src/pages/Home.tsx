
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import HomeHeader from '@/components/HomeHeader';
import HomeContent from '@/components/HomeContent';
import { useLanguage } from '@/hooks/useLanguage';
import { useNavigate } from 'react-router-dom';
import { useUserProfile } from '@/hooks/useUserProfile';
import '../i18n';

const Home: React.FC = () => {
  const { handleLanguageToggle } = useLanguage();
  const navigate = useNavigate();
  const { profile, state, update } = useUserProfile();

  const handleRecipesClick = () => {
    navigate('/recipes');
  };

  const handleProfileUpdate = async (updatedProfile: any) => {
    await update(updatedProfile);
  };

  return (
    <Layout
      currentView="home"
      hideHeader={true}
    >
      <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col overflow-hidden">
        <HomeHeader onLanguageToggle={handleLanguageToggle} />
        <HomeContent 
          onRecipesClick={handleRecipesClick}
          userProfile={profile}
          userState={state}
          onProfileUpdate={handleProfileUpdate}
        />
      </div>
    </Layout>
  );
};

export default Home;
