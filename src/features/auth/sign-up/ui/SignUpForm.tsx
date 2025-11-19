'use client';
import { Input } from '@/shared/ui/input/Input';
import { signUpForm } from '../lib/signUpForm';
import s from './SignUpForm.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { signUpSchema, SignUpSchemaData } from '@/shared/schemes/signUpSchema';
import { Button } from '@/shared/ui/button/Button';

export const SignUpForm = () => {
  const {
    register,
    formState: { errors, isValid },
  } = useForm<SignUpSchemaData>({
    resolver: zodResolver(signUpSchema),
    mode: 'onTouched',
  });
  return (
    <form action="">
      {signUpForm.map((field, i) => (
        <div key={i} className={s.box}>
          <Input
            {...field}
            {...register(field.register as keyof SignUpSchemaData)}
            error={errors[field.register as keyof SignUpSchemaData]?.message}
          />
        </div>
      ))}
      <Button type="submit" variant="primary" className={s.button} fullWidth disabled={!isValid}>
        Sign Up
      </Button>
    </form>
  );
};
