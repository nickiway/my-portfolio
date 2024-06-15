import type {
  NavigationItemProps,
  NavigationSocialsProps,
} from 'components/common/Navigation/Socials/interface';

import { HTMLAttributes } from 'react';

export interface NavigationProps extends HTMLAttributes<HTMLDivElement> {
  navigation: NavigationItemProps[];
  socials: NavigationSocialsProps[];
}
