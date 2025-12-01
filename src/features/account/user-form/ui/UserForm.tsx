'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import s from './UserForm.module.scss';
import { Input } from '@/shared/ui/input/Input';
import { Button } from '@/shared/ui/button/Button';
import Link from 'next/link';

import { userForm } from '../lib/userForm';
import { userSettingSchemes, UserSettingsSchemaData } from '@/shared/schemes/userSettingSchemes';

export const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UserSettingsSchemaData>({
    resolver: zodResolver(userSettingSchemes),
    mode: 'onTouched',
  });
  const onSubmit = async (data: UserSettingsSchemaData) => {
    if (!data) return;
  };
  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      {userForm.map((field, i) => (
        <div key={i} className={s.box}>
          <Input
            {...field}
            {...register(field.register as keyof UserSettingsSchemaData)}
            error={errors[field.register as keyof UserSettingsSchemaData]?.message}
          />
        </div>
      ))}

      <Button type="submit" variant="primary" className={s.button} fullWidth>
        Save
      </Button>
    </form>
  );
};
