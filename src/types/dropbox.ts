
export interface DropboxConfig {
  clientId: string;
  redirectUri: string;
}

export interface DropboxUserInfo {
  nombre: string;
}

export interface DropboxAuthState {
  isAuthenticated: boolean;
  userInfo: DropboxUserInfo | null;
  isLoading: boolean;
  error: string | null;
}
