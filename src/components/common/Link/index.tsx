import NextLink, { LinkProps as NextLinkProps } from 'next/link';

const Link = ({
  href,
  children,
}: NextLinkProps & React.HTMLAttributes<HTMLLinkElement>) => {
  return (
    <NextLink className="text-white no-underline" href={href}>
      {children}
    </NextLink>
  );
};

export default Link;
