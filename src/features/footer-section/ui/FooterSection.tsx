import Link from 'next/link';
import s from './FooterSection.module.scss';
import { FooterLinkType, FooterSectionProps } from '../types';
import clsx from 'clsx';

type Props = {
  section: FooterSectionProps;
};
export const FooterSection = ({ section }: Props) => {
  const iconMap: Record<FooterLinkType, string> = {
    email: s.icon_email,
    telegram: s.icon_telegram,
  };
  return (
    <>
      <p className={s.title}>{section.title}</p>
      <div className={clsx(s.box)}>
        {section.links.map((section, i) => (
          <Link href={section.href} key={i} className={clsx(s.link, section.type && s.withIcon)}>
            {section.type && <span className={clsx(s.icon, iconMap[section.type])}></span>}
            {section?.label}
          </Link>
        ))}
      </div>
    </>
  );
};
