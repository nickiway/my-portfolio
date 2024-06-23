'use client';

import { Button, Box, Typography } from '@mui/material';

const MainPage = () => {
  return (
    <>
      <Typography align="center">Contained</Typography>
      <Box sx={{ display: 'flex', gap: 2, margin: 5 }}>
        <Button variant="contained" color="error">
          Click me
        </Button>
        <Button variant="contained" color="info">
          Click me
        </Button>
        <Button variant="contained" color="primary">
          Click me
        </Button>

        <Button variant="contained" color="secondary">
          Click me
        </Button>
        <Button variant="contained" color="success">
          Click me
        </Button>
        <Button variant="contained" color="warning">
          Click me
        </Button>
      </Box>
      <Typography align="center">Outlined</Typography>
      <Box sx={{ display: 'flex', gap: 2, margin: 5 }}>
        <Button variant="outlined" color="error">
          Click me
        </Button>
        <Button variant="outlined" color="info">
          Click me
        </Button>
        <Button variant="outlined" color="primary">
          Click me
        </Button>
        <Button variant="outlined" color="secondary">
          Click me
        </Button>
        <Button variant="outlined" color="success">
          Click me
        </Button>
        <Button variant="outlined" color="warning">
          Click me
        </Button>
      </Box>

      <Typography align="center">Text button</Typography>
      <Box sx={{ display: 'flex', gap: 2, margin: 5 }}>
        <Button color="info">Info Button</Button>
        <Button color="primary">Primary Button</Button>
        <Button color="error">Error Button</Button>
        <Button color="success">Success Button</Button>
        <Button color="warning">Warning Button</Button>
        <Button color="secondary">Secondary Button</Button>
      </Box>

      <Typography align="center">Typographys</Typography>
      <Box sx={{ margin: 5 }}>
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6">Heading 6</Typography>
        <Typography variant="body1">Heading body1</Typography>
        <Typography variant="body2">Heading body2</Typography>
        <Typography variant="caption">Heading caption</Typography>
      </Box>
    </>
  );
};

export default MainPage;
