
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserProfile } from '@/types/userData';

interface DropboxProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userProfile: UserProfile | null;
  onProfileUpdate: (profile: UserProfile) => Promise<void>;
}

const DropboxProfileModal: React.FC<DropboxProfileModalProps> = ({
  isOpen,
  onClose,
  userProfile,
  onProfileUpdate
}) => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  // Sincronizar el input con el perfil actual cuando se abre el modal
  useEffect(() => {
    if (isOpen && userProfile?.nombre) {
      setName(userProfile.nombre);
    } else if (isOpen) {
      setName('');
    }
  }, [isOpen, userProfile?.nombre]);

  const handleSave = async () => {
    if (!name.trim() || !userProfile) return;
    
    setIsSaving(true);
    
    try {
      await onProfileUpdate({ 
        ...userProfile,
        nombre: name.trim() 
      });
      
      // Esperar un momento antes de cerrar para que se vea la confirmación
      setTimeout(() => {
        setIsSaving(false);
        onClose();
      }, 300);
    } catch (error) {
      console.error('Error saving profile:', error);
      setIsSaving(false);
    }
  };

  const handleClose = () => {
    if (!isSaving) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t('editProfile')}</DialogTitle>
          <DialogDescription>
            {t('updatePersonalInfo')}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t('name')}</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('enterYourName')}
              disabled={isSaving}
            />
          </div>

          <div className="flex justify-end space-x-2">
            <Button 
              variant="outline" 
              onClick={handleClose}
              disabled={isSaving}
            >
              {t('cancel')}
            </Button>
            <Button 
              onClick={handleSave}
              disabled={!name.trim() || isSaving}
            >
              {isSaving ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {t('saving')}
                </div>
              ) : (
                t('save')
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DropboxProfileModal;
