'use client';

import { useTheme } from '@mui/material';
import Button from 'components/Button';
import Container from 'components/Container';

// import image from 'assets/images/mainPage/funny-portrait-british-shorthair-cat-isolated-transparent-background-png_1075135-346-removebg-preview.png';
export default function MainPage() {
  const theme = useTheme();

  return (
    <main>
      <Container
        className="flex gap-5"
        style={{ backgroundColor: theme.palette.status.danger }}
      >
        <Button variant="contained">Button</Button>
        <Button variant="outlined">Button</Button>
      </Container>
    </main>
  );
}
