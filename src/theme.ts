import { createTheme } from '@mui/material';

import colors, { Colors } from 'colors';
import { poppins, roboto } from 'fonts';
import { Mode } from 'config';

declare module '@mui/material/styles' {
  interface Palette {
    colors: Colors;
  }
  interface PaletteOptions {
    colors?: Colors;
  }
}

// colors
const {
  darkAccent,
  darkShades,
  lightAccent,
  lightShades,
  primary,
  danger,
  info,
  success,
  warning,
} = colors;

export const getThemedComponents = (mode: Mode) => ({
  components: {
    ...(mode === 'light'
      ? {
          MuiButton: {
            styleOverrides: {
              contained: {
                color: 'white',
                boxShadow: 'none',
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
        }
      : {
          MuiButton: {
            styleOverrides: {
              contained: {
                color: 'white',
                boxShadow: 'none',
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
        }),
  },
});

export const getDesignTokens = (mode: Mode) => ({
  palette: {
    colors,
    error: {
      main: danger,
    },

    info: {
      main: info,
    },
    success: {
      main: success,
    },

    secondary: {
      main: lightAccent,
    },

    warning: {
      main: warning,
    },

    primary: {
      main: primary,
    },
    ...(mode === 'light'
      ? {
          background: {
            default: lightShades,
            paper: lightAccent,
          },
        }
      : {
          background: {
            default: darkShades,
            paper: darkAccent,
          },
        }),
  },
});
const theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
});

export default theme;
