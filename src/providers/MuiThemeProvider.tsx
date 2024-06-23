'use client';

import { Theme, ThemeProvider } from '@mui/material';

const MyThemeProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: Theme;
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MyThemeProvider;
