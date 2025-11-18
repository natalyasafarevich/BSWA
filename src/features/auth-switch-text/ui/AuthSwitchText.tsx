'use client';
import { usePathname } from 'next/navigation';
import s from './AuthSwitchText.module.scss';
import Link from 'next/link';

export const AuthSwitchText = () => {
  const pathname = usePathname();
  const isSignInPage = pathname === '/auth/sign-in';

  return (
    <p className={s.title}>
      {isSignInPage ? "Don't have an account? " : 'Already have an account? '}
      <Link href={isSignInPage ? '/auth/sign-up' : '/auth/sign-in'} className={s.link}>
        {isSignInPage ? 'Sign up' : 'Sign in'}
      </Link>
    </p>
  );
};
