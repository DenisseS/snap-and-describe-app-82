
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

// Simplified navigation state using enum
enum NavigationState {
  IDLE = 'idle',
  BOTTOM_NAV = 'bottom-nav',
  FROM_HOME = 'from-home',
  REGULAR = 'regular'
}

interface NavigationContextType {
  navigationStack: string[];
  navigationState: NavigationState;
  pushToStack: (route: string) => void;
  goBack: () => string | null;
  setBaseRoute: (route: string) => void;
  clearStack: () => void;
  getStackInfo: () => { stack: string[], canGoBack: boolean };
  setNavigationState: (state: NavigationState) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigationContext must be used within a NavigationProvider');
  }
  return context;
};

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const [navigationStack, setNavigationStack] = useState<string[]>([]);
  const [navigationState, setNavigationState] = useState<NavigationState>(NavigationState.IDLE);

  const pushToStack = useCallback((route: string) => {
    setNavigationStack(prev => {
      // Don't push if it's the same as the current top route
      if (prev.length > 0 && prev[prev.length - 1] === route) {
        console.log('🔄 NavigationStack: Not pushing duplicate route:', route);
        return prev;
      }

      const newStack = [...prev, route];
      console.log('📍 NavigationStack: PUSH', route);
      console.log('📚 NavigationStack: Stack now:', newStack);
      return newStack;
    });
  }, []);

  const goBack = useCallback(() => {
    console.log('🔙 NavigationStack: goBack() called');
    console.log('📚 NavigationStack: Current stack before goBack:', navigationStack);

    // Calculate the back route BEFORE modifying the stack
    if (navigationStack.length <= 1) {
      console.log('🚫 NavigationStack: Cannot go back, stack too small:', navigationStack);
      return null;
    }

    // Get the route we should go back to (second to last item)
    const backRoute = navigationStack[navigationStack.length - 2];
    console.log('⬅️ NavigationStack: Calculated back route:', backRoute);

    // Now update the stack by removing the current route (last item)
    setNavigationStack(prev => {
      const newStack = prev.slice(0, -1);
      console.log('📚 NavigationStack: Stack after goBack:', newStack);
      return newStack;
    });

    console.log('✅ NavigationStack: Returning back route:', backRoute);
    return backRoute;
  }, [navigationStack]);

  const setBaseRoute = useCallback((route: string) => {
    console.log('🏠 NavigationStack: SET BASE ROUTE:', route);
    setNavigationStack([route]);
    console.log('📚 NavigationStack: Stack now:', [route]);
  }, []);

  const clearStack = useCallback(() => {
    console.log('🗑️ NavigationStack: CLEAR STACK');
    setNavigationStack([]);
    console.log('📚 NavigationStack: Stack now: []');
  }, []);

  const getStackInfo = useCallback(() => {
    return {
      stack: navigationStack,
      canGoBack: navigationStack.length > 1
    };
  }, [navigationStack]);

  return (
    <NavigationContext.Provider value={{
      navigationStack,
      navigationState,
      pushToStack,
      goBack,
      setBaseRoute,
      clearStack,
      getStackInfo,
      setNavigationState
    }}>
      {children}
    </NavigationContext.Provider>
  );
};

// Export the enum for use in other components
export { NavigationState };
