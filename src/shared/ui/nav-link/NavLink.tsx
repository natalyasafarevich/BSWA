import clsx from 'clsx';
import Link from 'next/link';
import s from './NavLink.module.scss';

type Props = {
  href: string;
  isActive: boolean;
  label: string;
  className?: string;
};
export const NavLink = ({ href, isActive = false, label, className }: Props) => {
  const activeClass = isActive ? s.link_active : '';
  return (
    <Link href={href} className={clsx(s.link, activeClass, className)}>
      {label}
    </Link>
  );
};
