import { useState } from 'react';

import type {
  NavigationItemProps,
  NavigationSocialsProps,
} from 'components/common/Navigation/Socials/interface';
import type { Theme } from '@mui/material';
import type { BoxProps } from '@mui/material';

import { Grid, SxProps } from '@mui/material';
import {
  Container,
  AppBar as MuiAppBar,
  Typography,
  IconButton,
  SwipeableDrawer,
  Divider,
  Box,
} from '@mui/material';

import Socials from 'components/common/Navigation/Socials';
import Link from 'components/common/Link';

import { navigation, socials } from 'components/common/Navigation/itemsList';
import { Menu, ExitToApp } from '@mui/icons-material';

const NavigationGroup = ({ boxProps }: { boxProps?: BoxProps }) => {
  return navigation.map((navigation: NavigationItemProps) => (
    <Box {...boxProps} key={navigation.uid}>
      <Link href={navigation.href}>{navigation.title}</Link>
    </Box>
  ));
};

const SocialsGroup = ({ boxProps }: { boxProps?: BoxProps }) => {
  return socials.map((social: NavigationSocialsProps) => (
    <Box {...boxProps} key={social.uid}>
      <Socials key={social.uid} {...social} />
    </Box>
  ));
};

const NavigaitonDrawer = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const boxProps = {
    sx: { padding: '5px' },
    onClick: () => setOpen(false),
    onKeyDown: () => setOpen(false),
  } as BoxProps;

  return (
    <SwipeableDrawer
      sx={{ display: { xs: 'flex', sm: 'none' } }}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      ModalProps={{
        keepMounted: false,
      }}
      PaperProps={{
        sx: { padding: '20px', minWidth: '200px' },
      }}
    >
      <Box sx={{ display: 'flex', gap: '10px;' }}>
        <Typography variant="h5">Menu</Typography>

        <IconButton onClick={() => setOpen(false)}>
          <ExitToApp color="primary" />
        </IconButton>
      </Box>

      <Divider />
      <NavigationGroup boxProps={boxProps} />

      <Divider />
      <Box sx={{ display: 'flex' }}>
        <SocialsGroup boxProps={boxProps} />
      </Box>
    </SwipeableDrawer>
  );
};

const AppBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <MuiAppBar position="sticky">
      <Container maxWidth="lg" sx={appBarContainerStyles}>
        <Grid container>
          <Grid item xs={1}>
            <Typography sx={logoStyles}>Nick</Typography>
          </Grid>

          {/* SM+ screen */}
          <Grid item xs={7} sx={lgScreenNavStyles}>
            <NavigationGroup />
          </Grid>

          <Grid item xs={4} sx={lgScreenNavStyles}>
            <SocialsGroup />
          </Grid>

          {/* SM- screen */}
          <Grid item xs={11} sx={smScreenNavStyles}>
            <IconButton onClick={() => setOpen(true)}>
              <Menu color="primary" />
            </IconButton>
          </Grid>
        </Grid>

        {/* Drawer for SM- screen navigation */}
        <NavigaitonDrawer open={open} setOpen={setOpen} />
      </Container>
    </MuiAppBar>
  );
};

// classes
const lgScreenNavStyles = {
  display: { sm: 'flex', xs: 'none' },
  justifyContent: 'flex-end',
  gap: '20px',
} as SxProps<Theme>;

const smScreenNavStyles = {
  justifyContent: 'flex-end',
  gap: '20px',
  display: { xs: 'flex', sm: 'none' },
} as SxProps<Theme>;

const logoStyles = {
  textTransform: 'uppercase',
  letterSpacing: 5,
} as SxProps<Theme>;

const appBarContainerStyles = {
  display: 'flex',
  padding: '15px',
  alignItems: 'center',
};

export default AppBar;
