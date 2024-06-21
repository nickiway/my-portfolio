import { createTheme } from '@mui/material';
import { palette } from '@mui/system';

import customColors, { CustomColors } from 'colors';
import { poppins, roboto } from 'fonts';

declare module '@mui/material/styles' {
  interface Palette {
    customColors: CustomColors;
    customGradients: { main: string };
  }
  interface PaletteOptions {
    customColors?: CustomColors;
    customGradients?: { main: string };
  }
}

// custom colors
const { ROYAL_HEATH, TAPESTRY, WOODSMOKE, softPeach, steelGray } = customColors;

const theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '64px',
        },
        h2: {
          fontSize: '48px',
        },
        h3: {
          fontSize: '32px',
        },
        h4: {
          fontSize: '24px',
        },
        h5: {
          fontSize: '18px',
        },
        h6: {
          fontSize: '16px',
        },
        caption: {
          fontSize: '20px',
          textTransform: 'uppercase',
          fontFamily: roboto.style.fontFamily,
          letterSpacing: '2px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          color: softPeach,
          minWidth: '150px',
          background:
            'linear-gradient(0deg, rgba(163,77,127,1) 0%, rgba(166,47,98,1) 100%);',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: ROYAL_HEATH,
          height: '2px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },

  palette: {
    customColors,

    text: {
      primary: softPeach,
      disabled: steelGray,
      secondary: TAPESTRY,
    },

    primary: {
      main: ROYAL_HEATH,
    },

    secondary: {
      main: TAPESTRY,
    },

    background: {
      default: WOODSMOKE,
      paper: steelGray,
    },

    customGradients: {
      main: 'linear-gradient(150deg, rgba(25,26,34,1) 0%, rgba(41,43,55,1) 34%, rgba(166,47,98,1) 100%);',
    },
  },
});

export default theme;
