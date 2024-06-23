'use client';

import AppBar from 'components/common/AppBar';
import MyThemeProvider from 'providers/MuiThemeProvider';
import { CssBaseline } from '@mui/material';

import { useMemo, useState } from 'react';
import { createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';

import { getThemedComponents, getDesignTokens } from 'theme';

import { Mode } from 'config';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>('dark');

  const toggleMode = () => [
    setMode((mode) => (mode === 'light' ? 'dark' : 'light')),
  ];

  const theme = useMemo(
    () =>
      createTheme(deepmerge(getDesignTokens(mode), getThemedComponents(mode))),
    [mode],
  );
  return (
    <MyThemeProvider theme={theme}>
      <CssBaseline />
      <body>
        <AppBar />
        <main>{children}</main>
      </body>
    </MyThemeProvider>
  );
}
