import Link from 'next/link';

import type { NavigationProps } from 'components/common/Navigation/interface';
import type {
  NavigationItemProps,
  NavigationSocialsProps,
} from 'components/common/Navigation/Socials/interface';

import Socials from 'components/common/Navigation/Socials';
import { Grid } from '@mui/material';
import { red, yellow } from '@mui/material/colors';

const Navigation = ({ navigation, socials }: NavigationProps) => {
  return (
    <Grid container>
      <Grid item xs={8} bgcolor={yellow[200]}>
        {navigation.map((navigation: NavigationItemProps) => (
          <Link key={navigation.uid} href={navigation.href}>
            {navigation.title}
          </Link>
        ))}
      </Grid>
      <Grid item xs={4} bgcolor={red[200]}>
        {socials.map((social: NavigationSocialsProps) => (
          <Socials key={social.uid} {...social} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Navigation;
