'use client';

import { useMemo } from 'react';
import { useAppSelector } from 'lib/hooks';

import AppBar from 'components/common/AppBar';
import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';

import { createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';

import { getThemedComponents, getDesignTokens } from 'theme';

import { Theme } from 'config';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme: mode } = useAppSelector((state) => state.themeReducer);

  const theme = useMemo(
    () =>
      createTheme(deepmerge(getDesignTokens(mode), getThemedComponents(mode))),
    [mode],
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <body>
        <AppBar />
        <main>{children}</main>
      </body>
    </ThemeProvider>
  );
}
