import { Logo } from '@/shared/ui/logo/Logo';
import s from './Header.module.scss';
import { NavMenu } from '@/app/features/nav-menu';

export const Header = () => {
  return (
    <header>
      <div className={s.row}>
        <Logo />
        <NavMenu />
      </div>
    </header>
  );
};
