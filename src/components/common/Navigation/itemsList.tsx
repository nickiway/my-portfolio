import {
  NavigationItemProps,
  NavigationSocialsProps,
} from './Socials/interface';

import { LinkedIn, Telegram } from '@mui/icons-material';

export const navigation: NavigationItemProps[] = [
  {
    uid: '1',
    title: 'Home',
    href: '/',
  },

  {
    uid: '2',
    title: 'About',
    href: '/',
  },
  {
    uid: '3',
    title: 'Projects',
    href: '/',
  },
  {
    uid: '4',
    title: 'Studying',
    href: '/',
  },
];

export const socials: NavigationSocialsProps[] = [
  {
    uid: '1',
    icon: LinkedIn,
    href: '/',
  },
  {
    uid: '2',
    icon: Telegram,
    href: '/',
  },
];
