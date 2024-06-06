import Link from 'next/link';

import { NavigationItemProps } from './interface';

export const NavigationItem = ({ link, title }: NavigationItemProps) => {
  return (
    <Link href={link} className="text-white uppercase no-underline ">
      {title}
    </Link>
  );
};
