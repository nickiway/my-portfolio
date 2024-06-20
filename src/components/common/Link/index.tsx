'use client';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import { motion } from 'framer-motion';

const Link = ({
  href,
  children,
}: NextLinkProps & React.HTMLAttributes<HTMLLinkElement>) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, bounce: true }}
    >
      <NextLink className="text-white no-underline" href={href}>
        {children}
      </NextLink>
    </motion.div>
  );
};

export default Link;
