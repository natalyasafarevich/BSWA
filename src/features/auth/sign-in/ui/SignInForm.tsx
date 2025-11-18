'use client';
import { SignInSchema, SignInSchemaData } from '@/shared/schemes/signInSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import s from './SignInForm.module.scss';
import { signInForm } from '../lib/signInForm';
import { Input } from '@/shared/ui/input/Input';
import { Button } from '@/shared/ui/button/Button';
import Link from 'next/link';
import { Checkbox } from '@/shared/ui/checkbox/Checkbox';

export const SignInForm = () => {
  const {
    register,
    formState: { errors, isValid },
  } = useForm<SignInSchemaData>({
    resolver: zodResolver(SignInSchema),
    mode: 'onTouched',
  });

  return (
    <form className={s.form}>
      {signInForm.map((field, i) => (
        <div key={i} className={s.box}>
          <Input
            {...field}
            {...register(field.register as keyof SignInSchemaData)}
            error={errors[field.register as keyof SignInSchemaData]?.message}
          />
        </div>
      ))}
      <div className={s.row}>
        <Checkbox label="Remember me" id="remember-me" />
        <Button type="button" asChild>
          <Link href={'/forgot-password'}>Forget Password?</Link>
        </Button>
      </div>
      <Button type="submit" variant="primary" className={s.button} fullWidth>
        Login
      </Button>
    </form>
  );
};
