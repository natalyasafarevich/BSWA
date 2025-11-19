'use client';
import { Input } from '@/shared/ui/input/Input';
import { signUpForm } from '../lib/signUpForm';
import s from './SignUpForm.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { signUpSchema, SignUpSchemaData } from '@/shared/schemes/signUpSchema';
import { Button } from '@/shared/ui/button/Button';
import { useAuth } from '@/shared/hooks/useAuth';

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignUpSchemaData>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  });
  const { signUp } = useAuth();

  const onSubmit = async (data: SignUpSchemaData) => {
    if (data) {
      const user = await signUp(data.email, data.password, data.name);
      console.log(user);
    }
  };
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
      <Button variant="primary" className={s.button} fullWidth>
        Sign Up
      </Button>
    </form>
  );
};
