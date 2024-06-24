import Image from 'next/image';
import {
  Box,
  Container,
  Grid,
  Typography,
  styled,
  Button,
  ContainerProps,
  Theme,
} from '@mui/material';

import image from 'assets/images/transparent-cat-by-pngfre-59-1.png';
import { bgcolor, display, margin } from '@mui/system';

const Hero = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <HeroContent />
        </Grid>

        <Grid item lg={6} sx={{ display: { xs: 'none', lg: 'block' } }}>
          <HeroImage />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;

const HeroContent = () => {
  return (
    <Box sx={{ padding: '10px', margin: '10px' }}>
      <Box sx={{ marginBottom: 5 }}>
        <Typography variant="h5">Hello my name Nick</Typography>
        <Typography variant="h1">Frontend developer</Typography>
        <Typography variant="h3">I make websites</Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="contained" color="primary">
          View Projects
        </Button>
        <Button variant="contained" color="secondary">
          Contact me
        </Button>
      </Box>
    </Box>
  );
};

const HeroImage = () => {
  return (
    <Box
      sx={(theme: Theme) => ({
        backgroundColor: theme.palette.accent,
        borderRadius: 20,
        padding: '10px',
        margin: '10px',
      })}
    >
      <Image
        src={image.src}
        alt="Hero image"
        width={image.width}
        height={image.height}
      />
    </Box>
  );
};
