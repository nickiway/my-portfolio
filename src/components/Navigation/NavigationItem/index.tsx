import Link from 'next/link';

import { NavigationItemProps } from './interface';

export const NavigationItem = ({ link, title }: NavigationItemProps) => {
  return <Link href={link}>{title}</Link>;
};
