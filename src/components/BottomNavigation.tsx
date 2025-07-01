
import React, { useState, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Home, Camera, Heart, MoreHorizontal, ChefHat, Search, Download } from "lucide-react";
import { useBottomNavigation } from '@/hooks/useBottomNavigation';
import { BottomNavState } from '@/types/ui-states';
import { AuthState } from '@/types/auth';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { useDropboxAuth } from '@/hooks/useDropboxAuth';
import { useUserProfile } from '@/hooks/useUserProfile';
import { usePWA } from '@/hooks/usePWA';
import LazyDropboxProfileModal from './LazyDropboxProfileModal';

interface BottomNavigationProps {
  currentView?: string;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  currentView = 'home'
}) => {
  const { t } = useTranslation();
  const [uiState, setUiState] = useState<BottomNavState>(BottomNavState.IDLE);
  
  const { 
    authState,
    login, 
    logout 
  } = useDropboxAuth();
  
  const { profile, update } = useUserProfile();
  const { canInstall, canShowAppleInstructions, showInstallPrompt } = usePWA();
  
  const {
    handleHomeClick,
    handleExploreClick,
    handleRecipesClick,
    handleFavoritesClick,
    handleCameraClick
  } = useBottomNavigation();

  // Handlers para el drawer - solo estos dependen del estado de auth
  const handleMoreClick = useCallback(() => {
    setUiState(BottomNavState.MORE_DRAWER_OPEN);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setUiState(BottomNavState.IDLE);
  }, []);

  const handleLoginClick = useCallback(async () => {
    console.log('🔐 BottomNav: Login clicked - using centralized auth');
    handleDrawerClose();
    try {
      await login();
    } catch (error) {
      console.error('🔐 BottomNav: Login error:', error);
    }
  }, [login, handleDrawerClose]);

  const handleProfileClick = useCallback(() => {
    setUiState(BottomNavState.PROFILE_MODAL_OPEN);
  }, []);

  const handleLogoutClick = useCallback(async () => {
    console.log('🔐 BottomNav: Logout clicked - using centralized auth');
    handleDrawerClose();
    try {
      await logout();
    } catch (error) {
      console.error('🔐 BottomNav: Logout error:', error);
    }
  }, [logout, handleDrawerClose]);

  const handleScanClick = useCallback(() => {
    handleDrawerClose();
    setTimeout(() => {
      handleCameraClick();
    }, 150);
  }, [handleDrawerClose, handleCameraClick]);

  const handleInstallAppClick = useCallback(() => {
    console.log('📱 BottomNav: Install app clicked - using PWA hook');
    handleDrawerClose();
    setTimeout(() => {
      showInstallPrompt();
    }, 150);
  }, [handleDrawerClose, showInstallPrompt]);

  const handleProfileUpdate = useCallback(async (updatedProfile: any) => {
    await update(updatedProfile);
  }, [update]);

  // Clases CSS memoizadas - independientes del estado de auth
  const navItemClasses = useMemo(() => ({
    home: `mb-1 ${currentView === 'home' ? 'text-blue-500' : 'text-gray-400'}`,
    explore: `mb-1 ${currentView === 'explore' ? 'text-blue-500' : 'text-gray-400'}`,
    recipes: `mb-1 ${currentView === 'recipes' ? 'text-blue-500' : 'text-gray-400'}`,
    favorites: `mb-1 ${currentView === 'favorites' ? 'text-blue-500 fill-blue-500' : 'text-gray-400'}`,
  }), [currentView]);

  const textClasses = useMemo(() => ({
    home: `text-xs ${currentView === 'home' ? 'text-blue-500 font-medium' : 'text-gray-500'}`,
    explore: `text-xs ${currentView === 'explore' ? 'text-blue-500 font-medium' : 'text-gray-500'}`,
    recipes: `text-xs ${currentView === 'recipes' ? 'text-blue-500 font-medium' : 'text-gray-500'}`,
    favorites: `text-xs ${currentView === 'favorites' ? 'text-blue-500 font-medium' : 'text-gray-500'}`,
  }), [currentView]);

  // Estados derivados - solo para el drawer, no para el nav principal
  const showDrawer = uiState === BottomNavState.MORE_DRAWER_OPEN;
  const showProfileModal = uiState === BottomNavState.PROFILE_MODAL_OPEN;
  const isAuthenticated = authState === AuthState.AUTHENTICATED;
  const isLoggingOut = authState === AuthState.LOGGING_OUT;
  const isLoggingIn = authState === AuthState.LOGGING_IN;

  return (
    <>
      {/* Bottom Navigation - Using CSS Grid positioning */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t z-50" style={{ height: 'var(--bottom-nav-height)' }}>
        <div className="flex justify-around items-center h-full px-4 py-2">
          <div 
            className="flex flex-col items-center py-2 cursor-pointer" 
            onClick={handleHomeClick}
            data-testid="home-nav"
          >
            <Home 
              size={24} 
              className={navItemClasses.home}
            />
            <span className={textClasses.home}>
              {t('home')}
            </span>
          </div>
          <div 
            className="flex flex-col items-center py-2 cursor-pointer" 
            onClick={handleExploreClick}
            data-testid="scan-nav"
          >
            <Search
              size={24} 
              className={navItemClasses.explore}
            />
            <span className={textClasses.explore}>
              {t('explore')}
            </span>
          </div>
          <div 
            className="flex flex-col items-center py-2 cursor-pointer" 
            onClick={handleRecipesClick}
            data-testid="recipes-nav"
          >
            <ChefHat 
              size={24} 
              className={navItemClasses.recipes}
            />
            <span className={textClasses.recipes}>
              {t('recipes')}
            </span>
          </div>
          <div 
            className="flex flex-col items-center py-2 cursor-pointer" 
            onClick={handleFavoritesClick}
            data-testid="favorites-nav"
          >
            <Heart 
              size={24} 
              className={navItemClasses.favorites}
            />
            <span className={textClasses.favorites}>
              {t('favorites')}
            </span>
          </div>
          <div 
            className="flex flex-col items-center py-2 cursor-pointer" 
            onClick={handleMoreClick}
          >
            <MoreHorizontal size={24} className="mb-1 text-gray-400" />
            <span className="text-xs text-gray-500">{t('more')}</span>
          </div>
        </div>
      </div>

      {/* More Options Drawer - Solo este depende del estado de auth */}
      <Drawer open={showDrawer} onOpenChange={handleDrawerClose}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{t('moreOptions')}</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 space-y-2">
            {isAuthenticated ? (
              <>
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">{t('loggedInAs')}</p>
                  <p className="font-medium">{profile?.nombre || 'Usuario'}</p>
                </div>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={handleProfileClick}
                  disabled={isLoggingOut}
                >
                  {t('editProfile')}
                </Button>
              </>
            ) : null}

            {/* Sección de Herramientas */}
            <div className="border-t pt-4 mt-4">
              <h3 className="text-sm font-medium text-gray-700 mb-3 px-2">
                {t('tools', 'Herramientas')}
              </h3>
              <Button
                variant="outline"
                className="w-full justify-start mb-2"
                onClick={handleScanClick}
                disabled={isLoggingOut}
              >
                <Camera className="w-4 h-4 mr-2" />
                {t('scan', 'Escanear')}
              </Button>
              {(canInstall || canShowAppleInstructions) && (
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={handleInstallAppClick}
                  disabled={isLoggingOut}
                >
                  <Download className="w-4 h-4 mr-2" />
                  {t('installApp', 'Instalar App')}
                </Button>
              )}
            </div>

            {isAuthenticated && (
              <div className="border-t pt-4 mt-4">
                <Button
                  variant="outline"
                  className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50"
                  onClick={handleLogoutClick}
                  disabled={isLoggingOut}
                >
                  {isLoggingOut ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600 mr-2"></div>
                      {t('loggingOut', 'Cerrando sesión...')}
                    </div>
                  ) : (
                    t('logout')
                  )}
                </Button>
              </div>
            )}

            {!isAuthenticated && (
              <div className="border-t pt-4 mt-4">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={handleLoginClick}
                  disabled={isLoggingIn}
                >
                  {isLoggingIn ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      {t('connecting')}
                    </div>
                  ) : (
                    t('connectDropbox')
                  )}
                </Button>
              </div>
            )}
          </div>
        </DrawerContent>
      </Drawer>

      {/* Lazy Profile Modal */}
      <LazyDropboxProfileModal
        isOpen={showProfileModal}
        onClose={handleDrawerClose}
        userProfile={profile}
        onProfileUpdate={handleProfileUpdate}
      />
    </>
  );
};

export default BottomNavigation;
