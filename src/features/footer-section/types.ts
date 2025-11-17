export type FooterLinkType = 'email' | 'telegram';
export type FooterSectionProps = {
  title: string;
  links: {
    type?: FooterLinkType;
    label: string;
    href: string;
  }[];
};
