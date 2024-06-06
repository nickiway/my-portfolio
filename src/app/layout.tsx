import MyThemeProvider from 'providers/MuiThemeProvider';

import 'styles/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MyThemeProvider>
        <body>{children}</body>
      </MyThemeProvider>
    </html>
  );
}
