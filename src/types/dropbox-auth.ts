
export interface DropboxConfig {
  clientId: string;
  redirectUri: string;
}

export interface UserInfo {
  nombre: string;
}

// Estructura interna del JSON en Dropbox
export interface UserJsonData {
  profile: {
    name: string;
    edad: number;
  };
  allergies?: Record<string, { avoid: boolean }>;
  favorites?: Record<string, { status: 'heart' | 'thumb-down' }>;
}

// Interfaz para el almacenamiento de tokens
export interface TokenData {
  access_token: string;
  refresh_token?: string;
  expires_at: number;
}
