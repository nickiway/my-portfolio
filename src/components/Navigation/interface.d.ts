import { NavigationItemProps } from 'components/NavigationItem/interface';
import { HTMLAttributes } from 'react';

export interface NavigationProps extends HTMLAttributes<HTMLDivElement> {
  itemsList: NavigationItemProps[];
}
