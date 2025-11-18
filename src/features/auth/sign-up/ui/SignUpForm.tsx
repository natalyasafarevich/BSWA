import { Input } from '@/shared/ui/input/Input';
import { signUpForm } from '../lib/signUpForm';
import s from './SignUpForm.module.scss';

export const SignUpForm = () => {
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
