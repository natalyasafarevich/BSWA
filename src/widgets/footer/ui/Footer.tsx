import { FooterSection } from '@/features/footer-section';
import { FOOTER_LINKS } from '../consts';
import s from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.row}>
        {FOOTER_LINKS.map((section, i) => (
          <div className={s.box} key={i}>
            <FooterSection section={section} />
          </div>
        ))}
      </div>
    </footer>
  );
};
