import type { TypographyOptions } from '@mui/material/styles/createTypography';
import type { PaletteOptions } from '@mui/material/styles/createPalette';
import { Components, ThemeOptions } from '@mui/material';

import { createTheme } from '@mui/material';

import colors, { Colors } from 'colors';
import { poppins, roboto } from 'fonts';
import { Theme } from 'config';

declare module '@mui/material/styles' {
  interface Palette {
    colors: Colors;
    shades: string;
    accent: string;
  }
  interface PaletteOptions {
    colors?: Colors;
    shades?: string;
    accent?: string;
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

export const getDesignTokens = (mode: 'light' | 'dark'): ThemeOptions => {
  const isLightMode = mode === 'light';

  const palette: PaletteOptions = {
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
    background: {
      default: isLightMode ? lightShades : darkShades,
      paper: isLightMode ? lightAccent : darkAccent,
    },
    accent: isLightMode ? lightAccent : darkAccent,
    shades: isLightMode ? lightShades : darkShades,
  };

  const typography: TypographyOptions = {
    ...(mode === 'dark' && {
      allVariants: {
        color: 'white',
      },
    }),
  };

  return {
    palette,
    typography,
  };
};
const theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
});

export default theme;
