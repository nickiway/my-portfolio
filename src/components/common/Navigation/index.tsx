import type { NavigationItemProps } from 'components/common/Navigation/interface';
import type { BoxProps } from '@mui/material';

import { Box } from '@mui/material';

import Link from 'components/common/Link';

import { navigation } from 'components/common/Navigation/list';

const NavigationGroup = ({ boxProps }: { boxProps?: BoxProps }) => {
  return navigation.map((navigation: NavigationItemProps) => (
    <Box {...boxProps} key={navigation.uid}>
      <Link href={navigation.href}>{navigation.title}</Link>
    </Box>
  ));
};

export default NavigationGroup;
