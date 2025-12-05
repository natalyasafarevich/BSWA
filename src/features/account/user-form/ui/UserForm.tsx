'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import s from './UserForm.module.scss';
import { Input } from '@/shared/ui/input/Input';
import { Button } from '@/shared/ui/button/Button';
import { userForm } from '../lib/userForm';
import { userSettingSchemes, UserSettingsSchemaData } from '@/shared/schemes/userSettingSchemes';
import { Genres } from '@/entities/genres';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { selectInitialData } from '@/shared/slices/user/user-slice';
import { useEffect, useMemo } from 'react';
import { generateUniqNick } from '@/shared/lib/generate-nick/generate-nick';
import { updateUser } from '@/app/actions/update-user';
import { toast, ToastContainer } from 'react-toastify';

export const UserForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<UserSettingsSchemaData>({
    resolver: zodResolver(userSettingSchemes),
    mode: 'onTouched',
  });

  const user = useAppSelector(selectInitialData);

  const nick = useMemo(() => {
    return generateUniqNick();
  }, []);

  useEffect(() => {
    if (user) {
      reset({ ...user, nick });
    }
  }, [user]);

  const onSubmit = async (data: UserSettingsSchemaData) => {
    if (!data) return;
    const password: null | string = null;

    // if(data.phone){

    // }
    const result = await updateUser({ ...data, userId: user.$id });
    result.map((item) => item.reason && toast.error(item.reason.message));
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.fields}>
        {userForm.map((field, i) => (
          <div key={i} className={s.box}>
            <Input
              readOnly={field.register == 'email'}
              {...field}
              {...register(field.register as keyof UserSettingsSchemaData)}
              error={errors[field.register as keyof UserSettingsSchemaData]?.message}
            />
          </div>
        ))}
      </div>
      <Genres control={control} error={errors.genres?.message} />
      <Button type="submit" variant="primary" className={s.button} fullWidth>
        Save
      </Button>
      <ToastContainer />
    </form>
  );
};
