'use client';
import { NavLink } from '@/shared/ui/nav-link/NavLink';
import { HEADER_LINKS } from '../consts';
import s from './NavMenu.module.scss';
import { usePathname } from 'next/navigation';

export const NavMenu = () => {
  const pathname = usePathname();

  return (
    <div className={s.menu}>
      <ul className={s.list}>
        {HEADER_LINKS.map((link, i) => (
          <li key={i} className={s.item}>
            <NavLink isActive={pathname === link.href} {...link} />
          </li>
        ))}
      </ul>
    </div>
  );
};
