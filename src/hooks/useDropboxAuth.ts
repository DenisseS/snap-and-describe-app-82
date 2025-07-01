
import { useDropboxAuth as useDropboxAuthContext } from '../contexts/DropboxAuthContext';

export const useDropboxAuth = () => {
  return useDropboxAuthContext();
};
