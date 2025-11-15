import { FOOTER_LINKS } from '../consts';
import s from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      {FOOTER_LINKS.map((section, i) => (
        <div key={i}>
          <p className={s.title}>{section.title}</p>
        </div>
      ))}
    </footer>
  );
};
