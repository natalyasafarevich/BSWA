import { SignInForm } from '@/features/auth/sign-in';
import { Google } from '@/features/auth/google';

export const SignInPage = () => {
  return (
    <>
      <p className="auth-title">
        Welcome <span>back</span>
      </p>
      <SignInForm />
    </>
  );
};
