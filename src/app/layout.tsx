import MyThemeProvider from 'providers/MuiThemeProvider';
import { CssBaseline } from '@mui/material';

import customColors from 'colors';

import 'styles/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MyThemeProvider>
        <CssBaseline />

        <body>{children}</body>
      </MyThemeProvider>
    </html>
  );
}
