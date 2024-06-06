import { createTheme, PaletteOptions, Palette } from '@mui/material';
import { red } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Palette {
    status: {
      danger: string;
    };
  }
  interface PaletteOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    status: {
      danger: red[200],
    },
    primary: {
      main: red[100],
    },
  },
});

export default theme;
