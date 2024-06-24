import type { TypographyOptions } from '@mui/material/styles/createTypography';
import type { PaletteOptions } from '@mui/material/styles/createPalette';
import { Components } from '@mui/material';

import { createTheme } from '@mui/material';

import colors, { Colors } from 'colors';
import { poppins, roboto } from 'fonts';
import { Theme } from 'config';
import { red } from '@mui/material/colors';

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

export const getThemedComponents = (mode: Theme) => ({
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
  } as Components,
});

export const getDesignTokens = (mode: Theme) => ({
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
  } as PaletteOptions,

  typography: {
    ...(mode === 'dark'
      ? {
          allVariants: {
            color: 'white',
          },
        }
      : {}),
  } as TypographyOptions,
});

const theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
});

export default theme;
