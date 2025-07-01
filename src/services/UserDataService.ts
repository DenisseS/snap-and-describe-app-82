
import { DataState, UserProfile, CacheMetadata } from '@/types/userData';
import DropboxService, { UserInfo as DropboxUserInfo } from './DropboxService';

// Tipos para el sistema de eventos
type UserDataEvent = 'profile-updated' | 'profile-sync-start' | 'profile-sync-end' | 'profile-error';
type EventListener = (data?: any) => void;

class UserDataService {
  private static instance: UserDataService;
  private dropboxService: DropboxService | null = null;
  
  // Sistema de eventos reactivo
  private eventListeners: Map<UserDataEvent, Set<EventListener>> = new Map();
  
  // Constantes para rutas de Dropbox
  private static readonly DROPBOX_PATHS = {
    USER_INFO: '/user.json',
  };

  // Constantes para sync status
  private static readonly SYNC_STATUS = {
    SYNCED: 'synced' as const,
    PENDING: 'pending' as const,
    ERROR: 'error' as const,
  };
  
  // Claves de cache usando prefijo USER_
  private static readonly CACHE_KEYS = {
    USER_PROFILE: 'USER_PROFILE',
    USER_PROFILE_META: 'USER_PROFILE_META'
  };

  private constructor() {
    // Inicializar event listeners
    this.eventListeners.set('profile-updated', new Set());
    this.eventListeners.set('profile-sync-start', new Set());
    this.eventListeners.set('profile-sync-end', new Set());
    this.eventListeners.set('profile-error', new Set());
  }

  public static getInstance(): UserDataService {
    if (!UserDataService.instance) {
      UserDataService.instance = new UserDataService();
    }
    return UserDataService.instance;
  }

  public setDropboxService(service: DropboxService): void {
    if (!this.dropboxService) {
      this.dropboxService = service;
      console.log('📊 UserDataService: DropboxService configured');
    }
  }

  // Sistema de eventos
  public addEventListener(event: UserDataEvent, listener: EventListener): void {
    this.eventListeners.get(event)?.add(listener);
  }

  public removeEventListener(event: UserDataEvent, listener: EventListener): void {
    this.eventListeners.get(event)?.delete(listener);
  }

  private emitEvent(event: UserDataEvent, data?: any): void {
    console.log(`📊 UserDataService: Emitting event ${event}`, data);
    this.eventListeners.get(event)?.forEach(listener => {
      try {
        listener(data);
      } catch (error) {
        console.error(`📊 UserDataService: Error in event listener for ${event}:`, error);
      }
    });
  }

  // Cache con metadata simplificado
  private getCachedProfile(): { profile: UserProfile | null; metadata: CacheMetadata | null } {
    try {
      const profileData = localStorage.getItem(UserDataService.CACHE_KEYS.USER_PROFILE);
      const metadataData = localStorage.getItem(UserDataService.CACHE_KEYS.USER_PROFILE_META);
      
      const profile = profileData ? JSON.parse(profileData) as UserProfile : null;
      const metadata = metadataData ? JSON.parse(metadataData) as CacheMetadata : null;
      
      return { profile, metadata };
    } catch (error) {
      console.error('Error reading cached profile:', error);
      return { profile: null, metadata: null };
    }
  }

  private setCachedProfile(profile: UserProfile, metadata: CacheMetadata): void {
    try {
      localStorage.setItem(UserDataService.CACHE_KEYS.USER_PROFILE, JSON.stringify(profile));
      localStorage.setItem(UserDataService.CACHE_KEYS.USER_PROFILE_META, JSON.stringify(metadata));
    } catch (error) {
      console.error('Error caching profile:', error);
    }
  }

  // Obtener metadata del archivo remoto
  private async getFileMetadata(): Promise<{ client_modified: string } | null> {
    if (!this.dropboxService?.isAuthenticated()) return null;

    try {
      const response = await fetch('https://api.dropboxapi.com/2/files/get_metadata', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('dropbox_access_token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ path: UserDataService.DROPBOX_PATHS.USER_INFO }),
      });

      if (response.ok) {
        return await response.json();
      }
      return null;
    } catch (error) {
      console.error('Error getting file metadata:', error);
      return null;
    }
  }

  // Verificar si necesita sync basado en metadata de Dropbox
  private async checkNeedsSync(currentMetadata: CacheMetadata | null): Promise<boolean> {
    if (!this.dropboxService?.isAuthenticated() || !currentMetadata) {
      return true;
    }

    try {
      const remoteMetadata = await this.getFileMetadata();
      if (!remoteMetadata) return false;
      return remoteMetadata.client_modified !== currentMetadata.client_modified;
    } catch (error) {
      console.error('Error checking sync metadata:', error);
      return false;
    }
  }

  // Método principal: Cache-first con sync en background
  public async getUserProfile(): Promise<{
    data: UserProfile | null;
    state: DataState;
  }> {
    console.log('📊 UserDataService: Getting user profile...');
    
    // 1. Obtener del cache inmediatamente
    const { profile: cachedProfile, metadata } = this.getCachedProfile();
    
    if (cachedProfile) {
      console.log('📊 UserDataService: Profile found in cache');
      
      // Verificar sync en background si está autenticado
      if (this.dropboxService?.isAuthenticated()) {
        this.syncInBackground(metadata);
      }
      
      return {
        data: cachedProfile,
        state: DataState.READY
      };
    }

    // 2. Si no hay cache, cargar de remoto
    if (!this.dropboxService?.isAuthenticated()) {
      console.log('📊 UserDataService: Not authenticated, returning null');
      return {
        data: null,
        state: DataState.IDLE
      };
    }

    try {
      console.log('📊 UserDataService: Loading profile from Dropbox...');
      const remoteData = await this.dropboxService.getUserInfo();
      const remoteAllergies = await this.dropboxService.getUserAllergies();
      const remoteFavorites = await this.dropboxService.getUserFavorites();
      
      if (remoteData) {
        const profile: UserProfile = { 
          nombre: remoteData.nombre,
          allergies: remoteAllergies || {},
          favorites: remoteFavorites || {}
        };
        
        const fileMetadata = await this.getFileMetadata();
        const newMetadata: CacheMetadata = {
          client_modified: fileMetadata?.client_modified || new Date().toISOString(),
          last_sync: new Date().toISOString(),
          sync_status: UserDataService.SYNC_STATUS.SYNCED
        };
        
        this.setCachedProfile(profile, newMetadata);
        console.log('📊 UserDataService: Profile loaded and cached');
        
        return {
          data: profile,
          state: DataState.READY
        };
      }
    } catch (error) {
      console.error('📊 UserDataService: Error fetching user profile:', error);
    }

    return {
      data: null,
      state: DataState.ERROR
    };
  }

  // Sync en background sin bloquear UI
  private async syncInBackground(currentMetadata: CacheMetadata | null): Promise<void> {
    try {
      const needsSync = await this.checkNeedsSync(currentMetadata);
      
      if (needsSync) {
        console.log('📊 UserDataService: Background sync needed, updating...');
        this.emitEvent('profile-sync-start');
        
        const remoteData = await this.dropboxService!.getUserInfo();
        const remoteAllergies = await this.dropboxService!.getUserAllergies();
        const remoteFavorites = await this.dropboxService!.getUserFavorites();
        
        if (remoteData) {
          const profile: UserProfile = { 
            nombre: remoteData.nombre,
            allergies: remoteAllergies || {},
            favorites: remoteFavorites || {}
          };
          
          const fileMetadata = await this.getFileMetadata();
          const newMetadata: CacheMetadata = {
            client_modified: fileMetadata?.client_modified || new Date().toISOString(),
            last_sync: new Date().toISOString(),
            sync_status: UserDataService.SYNC_STATUS.SYNCED
          };
          
          this.setCachedProfile(profile, newMetadata);
          this.emitEvent('profile-updated', profile);
          this.emitEvent('profile-sync-end');
          console.log('📊 UserDataService: Background sync completed');
        }
      }
    } catch (error) {
      console.error('📊 UserDataService: Background sync error:', error);
      this.emitEvent('profile-error', error);
    }
  }

  // Update optimista para perfil completo
  public async updateUserProfile(profile: UserProfile, onUpdate?: (profile: UserProfile) => void): Promise<{
    success: boolean;
    state: DataState;
  }> {
    console.log('📊 UserDataService: Updating profile...', profile);
    
    // 1. Update optimista del cache inmediatamente
    const optimisticMetadata: CacheMetadata = {
      client_modified: new Date().toISOString(),
      last_sync: new Date().toISOString(),
      sync_status: UserDataService.SYNC_STATUS.PENDING
    };
    
    this.setCachedProfile(profile, optimisticMetadata);
    this.emitEvent('profile-updated', profile);
    onUpdate?.(profile);
    
    // 2. Sync en background con Dropbox
    if (!this.dropboxService?.isAuthenticated()) {
      return { success: false, state: DataState.ERROR };
    }

    try {
      this.emitEvent('profile-sync-start');
      
      const dropboxUserInfo: DropboxUserInfo = { nombre: profile.nombre };
      const success = await this.dropboxService.updateUserInfo(dropboxUserInfo, profile.allergies, profile.favorites);
      
      if (success) {
        const syncedMetadata: CacheMetadata = {
          ...optimisticMetadata,
          sync_status: UserDataService.SYNC_STATUS.SYNCED
        };
        this.setCachedProfile(profile, syncedMetadata);
        this.emitEvent('profile-sync-end');
        console.log('📊 UserDataService: Profile updated successfully');
        
        return { success: true, state: DataState.READY };
      } else {
        await this.handleSyncError(profile, onUpdate);
        return { success: false, state: DataState.ERROR };
      }
    } catch (error) {
      console.error('📊 UserDataService: Error updating user profile:', error);
      await this.handleSyncError(profile, onUpdate);
      return { success: false, state: DataState.ERROR };
    }
  }

  // Método específico para actualizar favoritos (wrapper)
  public async updateUserFavorites(favorites: Record<string, { status: 'heart' | 'thumb-down' }>, onUpdate?: (profile: UserProfile) => void): Promise<{
    success: boolean;
    state: DataState;
  }> {
    console.log('📊 UserDataService: Updating favorites...', favorites);
    
    const { profile: currentProfile } = this.getCachedProfile();
    if (!currentProfile) {
      console.error('📊 UserDataService: No current profile to update favorites');
      return { success: false, state: DataState.ERROR };
    }

    const updatedProfile: UserProfile = {
      ...currentProfile,
      favorites
    };

    return this.updateUserProfile(updatedProfile, onUpdate);
  }

  // Manejo de errores con rollback
  private async handleSyncError(failedProfile: UserProfile, onUpdate?: (profile: UserProfile) => void): Promise<void> {
    console.log('📊 UserDataService: Sync failed, pulling real data from Dropbox...');
    
    try {
      const realData = await this.dropboxService!.getUserInfo();
      const realAllergies = await this.dropboxService!.getUserAllergies();
      const realFavorites = await this.dropboxService!.getUserFavorites();
      
      if (realData) {
        const realProfile: UserProfile = { 
          nombre: realData.nombre,
          allergies: realAllergies || {},
          favorites: realFavorites || {}
        };
        
        const fileMetadata = await this.getFileMetadata();
        const errorMetadata: CacheMetadata = {
          client_modified: fileMetadata?.client_modified || new Date().toISOString(),
          last_sync: new Date().toISOString(),
          sync_status: UserDataService.SYNC_STATUS.ERROR
        };
        
        this.setCachedProfile(realProfile, errorMetadata);
        this.emitEvent('profile-updated', realProfile);
        this.emitEvent('profile-error', 'Sync failed, rolled back to server data');
        onUpdate?.(realProfile);
        console.log('📊 UserDataService: Rollback completed');
      }
    } catch (pullError) {
      console.error('📊 UserDataService: Error during rollback:', pullError);
      this.emitEvent('profile-error', pullError);
    }
  }

  // Limpiar cache - solo las claves con prefijo USER_
  public clearUserCache(): void {
    console.log('📊 UserDataService: Clearing user data cache...');
    
    const keys = Object.keys(localStorage);
    const userKeys = keys.filter(key => key.startsWith('USER_'));
    
    userKeys.forEach(key => {
      localStorage.removeItem(key);
    });
    
    console.log(`📊 UserDataService: Cache cleared: ${userKeys.length} keys removed`);
  }
}

export default UserDataService;
