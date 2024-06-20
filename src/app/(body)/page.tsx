'use client';

import { useTheme } from '@mui/material';
import AppBar from 'components/common/AppBar';

export default function MainPage() {
  const theme = useTheme();

  return (
    <>
      <AppBar />

      <main></main>
      <footer></footer>
    </>
  );
}
