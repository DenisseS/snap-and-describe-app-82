
import { DropboxConfig, TokenData } from '../../types/dropbox-auth';

export class DropboxAPI {
  constructor(private config: DropboxConfig) {}

  async refreshAccessToken(refreshToken: string): Promise<TokenData | null> {
    try {
      console.log('🔐 Refreshing access token...');
      
      const response = await fetch('https://api.dropboxapi.com/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
          client_id: this.config.clientId,
        }),
      });

      if (!response.ok) {
        console.error('🔐 Token refresh failed:', response.status);
        return null;
      }

      const data = await response.json();
      
      return {
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        expires_at: Date.now() + (data.expires_in * 1000)
      };
      
    } catch (error) {
      console.error('🔐 Error refreshing token:', error);
      return null;
    }
  }

  async exchangeCodeForToken(code: string, codeVerifier: string): Promise<TokenData | null> {
    try {
      const response = await fetch('https://api.dropboxapi.com/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          code,
          grant_type: 'authorization_code',
          client_id: this.config.clientId,
          redirect_uri: this.config.redirectUri,
          code_verifier: codeVerifier,
        }),
      });

      if (!response.ok) {
        throw new Error('Token exchange failed');
      }

      const data = await response.json();
      
      return {
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        expires_at: Date.now() + (data.expires_in * 1000)
      };
    } catch (error) {
      console.error('Token exchange error:', error);
      return null;
    }
  }

  async downloadFile(accessToken: string, path: string): Promise<Response> {
    return fetch('https://content.dropboxapi.com/2/files/download', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Dropbox-API-Arg': JSON.stringify({ path }),
      },
    });
  }

  async uploadFile(accessToken: string, path: string, content: string, mode: 'add' | 'overwrite' = 'add'): Promise<Response> {
    return fetch('https://content.dropboxapi.com/2/files/upload', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Dropbox-API-Arg': JSON.stringify({
          path,
          mode,
          autorename: false
        }),
        'Content-Type': 'application/octet-stream',
      },
      body: content,
    });
  }
}
