import { createTheme } from '@mui/material';
import { Poppins } from 'next/font/google';
import customColors, { CustomColors } from 'colors';

declare module '@mui/material/styles' {
  interface Palette {
    customColors: CustomColors;
  }
  interface PaletteOptions {
    customColors?: CustomColors;
  }
}

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'latin-ext'],
});

const theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: 'white',
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: customColors.ROYAL_HEATH,
          height: '2px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backgroundColor: customColors.WOODSMOKE,
        },
      },
    },
  },

  palette: {
    customColors,

    background: {
      default: customColors.WOODSMOKE,
      paper: customColors.WOODSMOKE,
    },

    text: {
      primary: customColors.softPeach,
      disabled: customColors.steelGray,
      secondary: customColors.TAPESTRY,
    },

    primary: {
      main: customColors.ROYAL_HEATH,
    },

    secondary: {
      main: customColors.TAPESTRY,
    },
  },
});

export default theme;
