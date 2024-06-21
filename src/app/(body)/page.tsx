'use client';

import AppBar from 'components/common/AppBar';
import {
  Box,
  Typography,
  Container,
  Divider,
  IconButton,
  Grid,
  Theme,
} from '@mui/material';
import Image from 'components/common/Image';
import Button from 'components/common/Button';

import { motion } from 'framer-motion';
import feedImage from 'assets/images/transparent-cat-by-pngfre-59-1.png';
import { ArrowCircleDown } from '@mui/icons-material';
import Projects from 'components/common/Projects';

const Hero = () => {
  return (
    <Container sx={{ display: { lg: 'flex' }, padding: '0  0 30px 0' }}>
      <Box sx={{ padding: '20px 0' }}>
        <Typography variant="h1">Lorem, ipsum dolor.</Typography>
        <Typography variant="h2">Lorem ipsum dolor sit amet.</Typography>
        <Typography variant="h5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, vitae?
        </Typography>

        <Box sx={{ marginTop: '20px' }}>
          <Button variant="contained" sx={{ marginRight: '10px' }}>
            Lorem, ipsum.
          </Button>
          <Button variant="contained" sx={{ marginLeft: '10px' }}>
            Lorem, ipsum.
          </Button>
        </Box>
        <Box>
          <IconButton>
            <ArrowCircleDown color="primary" />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

const About = () => {
  return (
    <>
      <Container sx={{ marginBottom: '50px' }}>
        <Grid container>
          <Grid item xs={6}>
            <Box
              sx={{
                width: '200px',
                paddingBottom: '20px',
              }}
            >
              <Typography variant="caption">About me</Typography>
              <Divider />
            </Box>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              odio aliquid minima illum voluptatem velit aliquam corrupti
              molestiae obcaecati illo, eum, laudantium molestias nemo laborum
              dolorum? Error, voluptatem illum ducimus eius et numquam deserunt
              accusamus cumque veritatis consequatur nulla adipisci, molestiae
              aperiam! Necessitatibus ducimus, fuga nam sapiente at veniam omnis
              corrupti nihil consequuntur ipsum perspiciatis tempore in
              blanditiis maxime, molestias laborum quo deserunt voluptas
              temporibus. Voluptate molestias optio numquam officiis omnis, ex
              voluptatibus mollitia voluptates tempore ratione porro,
              exercitationem saepe et iure assumenda ullam necessitatibus
              quaerat aperiam beatae magni dolores sequi sapiente neque
              distinctio. Aspernatur perspiciatis sint fugit nihil praesentium.
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body1"></Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const Skills = () => {
  return (
    <Box
      sx={(theme: Theme) => ({
        background: theme.palette.customGradients.main,
        padding: '20px',
        marginBottom: '50px',
      })}
    >
      <Container>
        <Typography variant="caption">My hard skills</Typography>
        <Typography variant="body1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam iste
          vero illo quas corrupti nostrum, beatae soluta facilis fugit, id animi
          eaque ducimus similique quis nesciunt dignissimos. Molestias assumenda
          mollitia officiis pariatur voluptas itaque tempore est, reprehenderit
          dolor repellendus explicabo hic? Similique ipsa ab suscipit dolorum
          reprehenderit voluptate maiores sapiente, doloribus voluptatum sed
          hic, ratione, perspiciatis aperiam. Voluptate in alias ducimus
          delectus porro. Praesentium ullam et dolor enim ut! Excepturi,
          voluptas ipsam! Beatae asperiores non minima sit natus eaque,
          molestias deleniti error eos ad ullam doloremque officiis? Suscipit
          quisquam eum eveniet inventore veritatis, delectus ab repellendus, sit
          veniam doloremque sapiente!
        </Typography>
      </Container>
    </Box>
  );
};

const ProjectsList = () => {
  return (
    <Container>
      <Box
        sx={{
          width: '200px',
          paddingBottom: '20px',
        }}
      >
        <Typography variant="caption">My projects</Typography>
        <Divider />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '50px',
          justifyContent: 'center',
        }}
      >
        <Projects />
      </Box>
    </Container>
  );
};

const MainPage = () => {
  return (
    <>
      {/* header */}
      <AppBar />
      {/* main */}
      <Hero />
      <About />
      <Skills />
      <ProjectsList />
      {/* foooter */}
      <footer></footer>
    </>
  );
};

export default MainPage;
