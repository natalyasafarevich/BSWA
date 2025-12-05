import { userSettingSchemes, UserSettingsSchemaData } from '@/shared/schemes/userSettingSchemes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { updateUserData } from './updateUser';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { selectInitialData } from '@/shared/slices/user/user-slice';
import { generateUniqNick } from '@/shared/lib/generate-nick/generate-nick';

export const useUserForm = () => {
  const user = useAppSelector(selectInitialData);

  const [password, setPassword] = useState('');
  const [open, setIsOpen] = useState(false);

  const form = useForm<UserSettingsSchemaData>({
    resolver: zodResolver(userSettingSchemes),
    mode: 'onTouched',
  });
  const nick = useMemo(() => {
    return generateUniqNick();
  }, []);

  useEffect(() => {
    if (user) {
      form.reset({ ...user, nick });
    }
  }, [user]);

  const onSubmit = (data: UserSettingsSchemaData & { password?: string }) => {
    data = { ...data, password };
    if (data.phone !== user.phone && !data.password) {
      setIsOpen(true);
      return;
    }
    setIsOpen(false);
    updateUserData(data, user.$id);
  };

  return { form, onSubmit, setPassword, open, setIsOpen };
};
