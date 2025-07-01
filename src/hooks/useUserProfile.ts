
import { useState, useCallback, useRef, useEffect } from 'react';
import { DataState, UserProfile } from '@/types/userData';
import { useDropboxAuth } from '@/hooks/useDropboxAuth';
import { AuthState } from '@/types/auth';
import { useToast } from '@/hooks/use-toast';
import UserDataService from '@/services/UserDataService';

interface UseUserProfileReturn {
  profile: UserProfile | null;
  state: DataState;
  refetch: () => Promise<void>;
  update: (profile: UserProfile) => Promise<void>;
}

export const useUserProfile = (): UseUserProfileReturn => {
  const { toast } = useToast();
  const { authState, dropboxService } = useDropboxAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [state, setState] = useState<DataState>(DataState.IDLE);
  const serviceRef = useRef(UserDataService.getInstance());
  const isInitialized = useRef(false);

  // Configurar el servicio UNA SOLA VEZ cuando esté disponible
  useEffect(() => {
    if (dropboxService && !isInitialized.current) {
      serviceRef.current.setDropboxService(dropboxService);
      isInitialized.current = true;
    }
  }, [dropboxService]);

  // Suscribirse a eventos del servicio
  useEffect(() => {
    const service = serviceRef.current;
    
    const handleProfileUpdated = (updatedProfile: UserProfile) => {
      console.log('📊 useUserProfile: Profile updated via event', updatedProfile);
      setProfile(updatedProfile);
      setState(DataState.READY);
    };
    
    const handleSyncStart = () => {
      console.log('📊 useUserProfile: Sync started');
      setState(DataState.PROCESSING);
    };
    
    const handleSyncEnd = () => {
      console.log('📊 useUserProfile: Sync ended');
      setState(DataState.READY);
    };
    
    const handleError = (error: any) => {
      console.log('📊 useUserProfile: Error received', error);
      setState(DataState.ERROR);
    };

    // Suscribirse a eventos
    service.addEventListener('profile-updated', handleProfileUpdated);
    service.addEventListener('profile-sync-start', handleSyncStart);
    service.addEventListener('profile-sync-end', handleSyncEnd);
    service.addEventListener('profile-error', handleError);

    return () => {
      // Desuscribirse al desmontar
      service.removeEventListener('profile-updated', handleProfileUpdated);
      service.removeEventListener('profile-sync-start', handleSyncStart);
      service.removeEventListener('profile-sync-end', handleSyncEnd);
      service.removeEventListener('profile-error', handleError);
    };
  }, []);

  // Función para cargar perfil
  const loadProfile = useCallback(async () => {
    if (authState !== AuthState.AUTHENTICATED) {
      setState(DataState.IDLE);
      setProfile(null);
      return;
    }

    setState(DataState.LOADING);
    
    try {
      const result = await serviceRef.current.getUserProfile();
      setProfile(result.data);
      setState(result.state);
    } catch (error) {
      console.error('📊 useUserProfile: Error loading user profile:', error);
      setProfile(null);
      setState(DataState.ERROR);
    }
  }, [authState]);

  // Función para actualizar perfil (optimista)
  const updateProfile = useCallback(async (newProfile: UserProfile) => {
    if (authState !== AuthState.AUTHENTICATED) return;

    setState(DataState.PROCESSING);
    
    try {
      const result = await serviceRef.current.updateUserProfile(
        newProfile, 
        (updatedProfile) => {
          // Este callback se ejecuta inmediatamente para update optimista
          setProfile(updatedProfile);
          setState(DataState.READY);
        }
      );
      
      if (!result.success) {
        toast({
          title: "Error",
          description: "No se pudo guardar la información",
          variant: "destructive",
        });
      }
      
      setState(result.state);
    } catch (error) {
      console.error('📊 useUserProfile: Error updating user profile:', error);
      setState(DataState.ERROR);
    }
  }, [authState, toast]);

  // Efecto principal para manejo de autenticación
  useEffect(() => {
    if (authState === AuthState.IDLE) {
      setProfile(null);
      setState(DataState.IDLE);
      serviceRef.current.clearUserCache();
    } else if (authState === AuthState.AUTHENTICATED) {
      loadProfile();
    }
  }, [authState, loadProfile]);

  return {
    profile,
    state,
    refetch: loadProfile,
    update: updateProfile
  };
};
