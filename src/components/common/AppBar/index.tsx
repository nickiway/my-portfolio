import { useState } from 'react';

import type { Theme } from '@mui/material';

import {
  Grid,
  SxProps,
  Container,
  AppBar as MuiAppBar,
  Typography,
  IconButton,
} from '@mui/material';

import Socials from 'components/common/Socials';

import AppBarDrawer from 'components/common/AppBar/AppBarDrawer';
import Navigation from 'components/common/Navigation';

import { Menu } from '@mui/icons-material';

const AppBar = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  return (
    <MuiAppBar position="sticky">
      <Container maxWidth="lg" sx={appBarContainerStyles}>
        <Grid container>
          <Grid item xs={1}>
            <Typography sx={logoStyles}>Nick</Typography>
          </Grid>

          {/* SM+ screen */}
          <Grid item xs={7} sx={lgScreenNavStyles}>
            <Navigation />
          </Grid>

          <Grid item xs={4} sx={lgScreenNavStyles}>
            <Socials />
          </Grid>

          {/* SM- screen */}
          <Grid item xs={11} sx={smScreenNavStyles}>
            <IconButton onClick={onOpen}>
              <Menu color="primary" />
            </IconButton>
          </Grid>
        </Grid>

        {/* Drawer for SM- screen navigation */}
        <AppBarDrawer setOpen={setOpen} open={open} />
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
  fontWeight: 'bold',
  letterSpacing: 5,
} as SxProps<Theme>;

const appBarContainerStyles = {
  display: 'flex',
  padding: '15px',
  alignItems: 'center',
};

export default AppBar;
