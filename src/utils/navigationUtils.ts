
type ViewType = 'home' | 'camera' | 'results' | 'favorites' | 'explore' | 'recipes';

export const getHeaderProps = (currentView: ViewType, navigateTo: (view: ViewType) => void, navigateBack: () => void) => {
  switch (currentView) {
    case 'camera':
      return {
        title: 'Scan Food',
        onBack: () => navigateTo('home'),
        showBackButton: true,
        showAvatar: true
      };
    case 'results':
      return {
        title: 'Food Results',
        onBack: navigateBack,
        showBackButton: true,
        showAvatar: true
      };
    case 'favorites':
      return {
        title: 'Favorites',
        onBack: () => navigateTo('home'),
        showBackButton: true,
        showAvatar: true
      };
    case 'explore':
      return {
        title: 'Explore Products',
        onBack: () => navigateTo('home'),
        showBackButton: true,
        showAvatar: true
      };
    case 'recipes':
      return null; // Recipes view has its own header
    default:
      return null;
  }
};
