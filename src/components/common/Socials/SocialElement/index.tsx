import type { NavigationSocialsProps } from 'components/common/Socials/interface';

import Link from 'components/common/Link';

const SocialElement = ({ href, icon: Icon }: NavigationSocialsProps) => {
  return (
    <Link href={href}>
      <Icon />
    </Link>
  );
};

export default SocialElement;
