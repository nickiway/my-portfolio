import type { NavigationSocialsProps } from './interface';

import Link from 'components/common/Link';

const Socials = ({ href, icon: Icon }: NavigationSocialsProps) => {
  return (
    <Link href={href}>
      <Icon />
    </Link>
  );
};

export default Socials;
