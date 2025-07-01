
import { UserInfo, UserJsonData } from '../../types/dropbox-auth';
import { DropboxAPI } from './DropboxAPI';

export class DropboxUserService {
  private static readonly USER_FILE_PATH = '/user.json';

  constructor(private api: DropboxAPI) {}

  // Read user info from JSON
  async getUserInfo(accessToken: string): Promise<UserInfo | null> {
    try {
      const response = await this.api.downloadFile(accessToken, DropboxUserService.USER_FILE_PATH);

      if (response.status === 409) {
        // File doesn't exist, create it with default data
        await this.createDefaultUserInfo(accessToken);
        return { nombre: 'Usuario' };
      }

      if (!response.ok) {
        throw new Error('Failed to read user info');
      }

      const jsonContent = await response.text();
      const userData: UserJsonData = JSON.parse(jsonContent);
      
      // Extraer el nombre del JSON y devolverlo en el formato esperado
      return { nombre: userData.profile.name };
    } catch (error) {
      console.error('Error reading user info:', error);
      return null;
    }
  }

  // Create default JSON file
  private async createDefaultUserInfo(accessToken: string): Promise<void> {
    const defaultJson: UserJsonData = {
      profile: {
        name: "Usuario",
        edad: 30
      }
    };
    
    await this.api.uploadFile(
      accessToken, 
      DropboxUserService.USER_FILE_PATH, 
      JSON.stringify(defaultJson, null, 2)
    );
  }

  // Update user info - now supports updating any section of the JSON
  async updateUserInfo(accessToken: string, userInfo: UserInfo, allergies?: Record<string, { avoid: boolean }>, favorites?: Record<string, { status: 'heart' | 'thumb-down' }>): Promise<boolean> {
    try {
      // Primero intentar leer el JSON existente para preservar otros datos
      let existingData: UserJsonData;
      
      try {
        const response = await this.api.downloadFile(accessToken, DropboxUserService.USER_FILE_PATH);

        if (response.ok) {
          const jsonContent = await response.text();
          existingData = JSON.parse(jsonContent);
        } else {
          // Si no existe, usar estructura por defecto
          existingData = {
            profile: {
              name: "Usuario",
              edad: 30
            }
          };
        }
      } catch {
        // Si hay error leyendo, usar estructura por defecto
        existingData = {
          profile: {
            name: "Usuario",
            edad: 30
          }
        };
      }

      // Actualizar los datos preservando el resto
      const updatedData: UserJsonData = {
        ...existingData,
        profile: {
          ...existingData.profile,
          name: userInfo.nombre
        }
      };

      // Si se proporcionan alérgenos, actualizarlos
      if (allergies !== undefined) {
        updatedData.allergies = allergies;
      }

      // Si se proporcionan favoritos, actualizarlos
      if (favorites !== undefined) {
        updatedData.favorites = favorites;
      }
      
      const response = await this.api.uploadFile(
        accessToken,
        DropboxUserService.USER_FILE_PATH,
        JSON.stringify(updatedData, null, 2),
        'overwrite'
      );

      return response.ok;
    } catch (error) {
      console.error('Error updating user info:', error);
      return false;
    }
  }

  // Get user allergies from JSON
  async getUserAllergies(accessToken: string): Promise<Record<string, { avoid: boolean }> | null> {
    try {
      const response = await this.api.downloadFile(accessToken, DropboxUserService.USER_FILE_PATH);

      if (response.status === 409) {
        // File doesn't exist
        return {};
      }

      if (!response.ok) {
        throw new Error('Failed to read user allergies');
      }

      const jsonContent = await response.text();
      const userData: UserJsonData = JSON.parse(jsonContent);
      
      return userData.allergies || {};
    } catch (error) {
      console.error('Error reading user allergies:', error);
      return null;
    }
  }

  // Get user favorites from JSON
  async getUserFavorites(accessToken: string): Promise<Record<string, { status: 'heart' | 'thumb-down' }> | null> {
    try {
      const response = await this.api.downloadFile(accessToken, DropboxUserService.USER_FILE_PATH);

      if (response.status === 409) {
        // File doesn't exist
        return {};
      }

      if (!response.ok) {
        throw new Error('Failed to read user favorites');
      }

      const jsonContent = await response.text();
      const userData: UserJsonData = JSON.parse(jsonContent);
      
      return userData.favorites || {};
    } catch (error) {
      console.error('Error reading user favorites:', error);
      return null;
    }
  }
}
