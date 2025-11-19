import { Input } from '@/shared/ui/input/Input';
import { signUpForm } from '../lib/signUpForm';
import s from './SignUpForm.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const SignUpForm = () => {
  const {
    register,
    formState: { errors, isValid },
  } = useForm<SignInSchemaData>({
    resolver: zodResolver(SignInSchema),
    mode: 'onTouched',
  });
  return (
    <form action="">
      {signUpForm.map((field, i) => (
        <div key={i} className={s.box}>
          <Input {...field} />
        </div>
      ))}
    </form>
  );
};
