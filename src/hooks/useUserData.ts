
import { useUserProfile } from './useUserProfile';

// Hook unificado que mantiene compatibilidad con código existente
export const useUserData = () => {
  return useUserProfile();
};
