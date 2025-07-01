
import { DropboxConfig, UserInfo } from '../types/dropbox-auth';
import { TokenManager } from './dropbox/TokenManager';
import { DropboxAPI } from './dropbox/DropboxAPI';
import { DropboxAuthService } from './dropbox/DropboxAuthService';
import { DropboxUserService } from './dropbox/DropboxUserService';

class DropboxService {
  private tokenManager: TokenManager;
  private api: DropboxAPI;
  private authService: DropboxAuthService;
  private userService: DropboxUserService;

  constructor(private config: DropboxConfig) {
    this.tokenManager = new TokenManager();
    this.api = new DropboxAPI(config);
    this.authService = new DropboxAuthService(config);
    this.userService = new DropboxUserService(this.api);
  }

  // Interceptor: asegurar token válido antes de cada llamada
  private async ensureValidToken(): Promise<string | null> {
    // Si no hay token, no está autenticado
    if (!this.tokenManager.hasToken()) {
      return null;
    }

    const tokenData = this.tokenManager.getToken();
    if (!tokenData) return null;

    // Si el token no está próximo a caducar, usarlo
    if (!this.tokenManager.isTokenExpiringSoon()) {
      return tokenData.access_token;
    }

    // Intentar renovar el token
    console.log('🔐 Token expiring soon, attempting refresh...');
    
    if (!tokenData.refresh_token) {
      console.log('🔐 No refresh token available');
      console.error('🔐 FORCED LOGOUT - No refresh token available - User needs to re-authenticate');
      this.logout();
      return null;
    }

    const newTokenData = await this.api.refreshAccessToken(tokenData.refresh_token);
    
    if (newTokenData) {
      this.tokenManager.saveToken(newTokenData);
      console.log('🔐 Token refreshed successfully');
      return newTokenData.access_token;
    }

    // Si falló la renovación, hacer logout y registrar el evento
    console.error('🔐 FORCED LOGOUT - Token refresh failed - User needs to re-authenticate');
    this.logout();
    return null;
  }

  // Start OAuth flow
  async startAuth(): Promise<void> {
    return this.authService.startAuth();
  }

  // Handle OAuth callback
  async handleCallback(code: string): Promise<boolean> {
    const codeVerifier = localStorage.getItem('dropbox_code_verifier');
    
    if (!codeVerifier) {
      console.log('No code verifier found, review if token was already saved');
      return true;
    }

    const tokenData = await this.api.exchangeCodeForToken(code, codeVerifier);
    
    if (tokenData) {
      this.tokenManager.saveToken(tokenData);
      localStorage.removeItem('dropbox_code_verifier');
      return true;
    }
    
    return false;
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return this.tokenManager.hasToken();
  }

  // Logout
  logout(): void {
    this.tokenManager.clearToken();
  }

  // Read user info from JSON
  async getUserInfo(): Promise<UserInfo | null> {
    const accessToken = await this.ensureValidToken();
    if (!accessToken) {
      throw new Error('Not authenticated');
    }

    return this.userService.getUserInfo(accessToken);
  }

  // Update user info - now supports updating any section of the JSON
  async updateUserInfo(userInfo: UserInfo, allergies?: Record<string, { avoid: boolean }>, favorites?: Record<string, { status: 'heart' | 'thumb-down' }>): Promise<boolean> {
    const accessToken = await this.ensureValidToken();
    if (!accessToken) {
      throw new Error('Not authenticated');
    }

    return this.userService.updateUserInfo(accessToken, userInfo, allergies, favorites);
  }

  // Get user allergies from JSON
  async getUserAllergies(): Promise<Record<string, { avoid: boolean }> | null> {
    const accessToken = await this.ensureValidToken();
    if (!accessToken) {
      throw new Error('Not authenticated');
    }

    return this.userService.getUserAllergies(accessToken);
  }

  // Get user favorites from JSON
  async getUserFavorites(): Promise<Record<string, { status: 'heart' | 'thumb-down' }> | null> {
    const accessToken = await this.ensureValidToken();
    if (!accessToken) {
      throw new Error('Not authenticated');
    }

    return this.userService.getUserFavorites(accessToken);
  }
}

export default DropboxService;
export type { UserInfo };
