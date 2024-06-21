'use client';

import { Box, useTheme } from '@mui/material';

export default function Layout({ children }: { children: React.ReactNode }) {
  const theme = useTheme();

  return <body>{children}</body>;
}
