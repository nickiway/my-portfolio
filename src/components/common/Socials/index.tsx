import type { NavigationSocialsProps } from './interface';
import { Box } from '@mui/material';
import SocialElement from './SocialElement';
import { BoxProps } from '@mui/material';
import { socials } from './list';

const Socials = ({ boxProps }: { boxProps?: BoxProps }) => {
  return socials.map((social: NavigationSocialsProps) => (
    <Box {...boxProps} key={social.uid}>
      <SocialElement key={social.uid} {...social} />
    </Box>
  ));
};

export default Socials;
