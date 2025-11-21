'use client';
import { Input } from '@/shared/ui/input/Input';
import { signUpForm } from '../lib/signUpForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { signUpSchema, SignUpSchemaData } from '@/shared/schemes/signUpSchema';
import { Button } from '@/shared/ui/button/Button';
import { signUpWithEmail } from '@/shared/actions/signUpWithEmail';
import s from './SignUpForm.module.scss';
import { useEffect } from 'react';
import { getLoggedInUser } from '@/shared/module/appwrite';

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignUpSchemaData>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: SignUpSchemaData) => {
    if (!data) return;
    try {
      await signUpWithEmail(data);
      getLoggedInUser().then((data) => {
        console.log(data);
      });
    } catch (err) {
      console.error('Signup error:', err);
    }
  };

  useEffect(() => {}, []);

  const isDisabled = !isValid;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {signUpForm.map((field, i) => (
        <div key={i} className={s.box}>
          <Input
            {...field}
            {...register(field.register as keyof SignUpSchemaData)}
            error={errors[field.register as keyof SignUpSchemaData]?.message}
          />
        </div>
      ))}
      <Button variant="primary" className={s.button} fullWidth disabled={isDisabled}>
        Sign Up
      </Button>
    </form>
  );
};
