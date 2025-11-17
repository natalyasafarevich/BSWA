import { FooterSectionProps } from '@/features/footer-section';

export const FOOTER_LINKS: FooterSectionProps[] = [
  {
    title: 'Home',
    links: [
      {
        label: 'Categories',
        href: '/#categories',
      },
      {
        label: 'Top Books',
        href: '/#top-books',
      },
      {
        label: 'Pricing',
        href: '/#prices',
      },
    ],
  },
  {
    title: 'Books',
    links: [
      {
        label: 'Categories',
        href: '/categories',
      },

      {
        label: 'Novelty',
        href: '/novelty',
      },
      {
        label: 'Collection',
        href: '/collection',
      },
      {
        label: 'Search',
        href: '/search',
      },
    ],
  },
  {
    title: 'Support',
    links: [
      {
        label: 'Contact Us',
        href: '/contact-us',
      },
    ],
  },
  {
    title: 'Subscription',
    links: [
      {
        label: 'Plans',
        href: '/subscriptions',
      },
    ],
  },
  {
    title: 'Connect With Us',
    links: [
      {
        type: 'telegram',
        label: '',
        href: 't.me',
      },
      {
        label: '',
        type: 'email',
        href: 'gmail.com',
      },
    ],
  },
];
