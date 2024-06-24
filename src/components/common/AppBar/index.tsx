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
import ThemeSwitch from 'components/common/ThemeSwitch';

import { Menu } from '@mui/icons-material';
import { width } from '@mui/system';

const AppBar = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  return (
    <MuiAppBar position="sticky">
      <header>
        <Container maxWidth="lg" sx={appBarContainerStyles}>
          <Grid container>
            <Grid item xs={1}>
              <Typography sx={logoStyles} color={'white'}>
                Nick
              </Typography>
            </Grid>

            {/* SM+ screen */}
            <Grid item xs={6} sx={lgScreenNavStyles}>
              <Navigation />
            </Grid>

            <Grid item xs={4} sx={lgScreenNavStyles}>
              <Socials />
            </Grid>

            {/* SM- screen */}
            <Grid item xs={10} sx={smScreenNavStyles}>
              <IconButton sx={{ color: 'white' }} onClick={onOpen}>
                <Menu />
              </IconButton>
            </Grid>

            <Grid item xs={1} sx={themeSwitchStyles}>
              <ThemeSwitch />
            </Grid>
          </Grid>

          <AppBarDrawer setOpen={setOpen} open={open} />
        </Container>
      </header>
    </MuiAppBar>
  );
};

export default AppBar;

// classes
const lgScreenNavStyles = {
  display: { sm: 'flex', xs: 'none' },
  justifyContent: 'flex-end',
  alignItems: 'center',
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

const themeSwitchStyles = {
  display: 'flex',
  justifyContent: 'flex-end',
} as SxProps<Theme>;
