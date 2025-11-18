import { SignInForm } from '@/features/auth/sign-in';
import s from './SignInPage.module.scss';
import { Google } from '@/features/auth/google';

export const SignInPage = () => {
  return (
    <div className={s.content}>
      <p className={s.title}>
        Welcome <span>back</span>
      </p>
      <SignInForm />
    </div>
  );
};
