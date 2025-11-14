import { Logo } from '@/shared/ui/logo/Logo';
import s from './Header.module.scss';
import { NavMenu } from '@/app/features/nav-menu';
import { Button } from '@/shared/ui/button/Button';
import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <div className={s.row}>
        <Logo />
        <NavMenu />
        <Button asChild variant="primary">
          <Link className={s.link} href={'/auth'}>
            <span></span>
            Sign in/Sign up
          </Link>
        </Button>
      </div>
    </header>
  );
};
