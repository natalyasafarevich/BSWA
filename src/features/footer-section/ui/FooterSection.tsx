import Link from 'next/link';
import s from './FooterSection.module.scss';

type Props = {
  section: {
    title: string;
    links: {
      label: string;
      href: string;
    }[];
  };
};
export const FooterSection = ({ section }: Props) => {
  return (
    <>
      <p className={s.title}>{section.title}</p>
      <div className={s.box}>
        {section.links.map((section, i) => (
          <Link href={section.href} key={i} className={s.link}>
            {section.label}
          </Link>
        ))}
      </div>
    </>
  );
};
