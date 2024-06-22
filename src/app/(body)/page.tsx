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

import {
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material/';

import { motion } from 'framer-motion';
import {
  ArrowCircleDown,
  ExpandMoreSharp,
  PinDropSharp,
  ShareSharp,
} from '@mui/icons-material';
import Projects from 'components/common/Projects';

const Caption = ({ caption }: { caption: string }) => {
  return (
    <Box
      sx={{
        width: '200px',
        paddingBottom: '20px',
      }}
    >
      <Typography variant="caption">{caption}</Typography>
      <Divider />
    </Box>
  );
};
const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: 750,
        display: 'flex',
        alignItems: 'center',
        backgroundImage:
          'url(https://i3.wp.com/assets-global.website-files.com/62a77d20fd9ecb4a52626c7b/6606bca8e1c2b01e6b4eec6a_lofi_wallpaper_3_by_nethervision_dgn3tgw-fullview.jpg)',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
      }}
    >
      <Container sx={{ display: { lg: 'flex' }, padding: '0  0 30px 0' }}>
        <Box sx={{ padding: '20px 0' }}>
          <Typography variant="h1">Lorem, ipsum dolor.</Typography>
          <Typography variant="h2">Lorem ipsum dolor sit amet.</Typography>
          <Typography variant="h5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
            vitae?
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
    </Box>
  );
};

const About = () => {
  return (
    <Container sx={{ marginBottom: '50px', padding: '30px 0' }}>
      <Grid container>
        <Grid item xs={6}>
          <Caption caption="About me" />
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odio
            aliquid minima illum voluptatem velit aliquam corrupti molestiae
            obcaecati illo, eum, laudantium molestias nemo laborum dolorum?
            Error, voluptatem illum ducimus eius et numquam deserunt accusamus
            cumque veritatis consequatur nulla adipisci, molestiae aperiam!
            Necessitatibus ducimus, fuga nam sapiente at veniam omnis corrupti
            nihil consequuntur ipsum perspiciatis tempore in blanditiis maxime,
            molestias laborum quo deserunt voluptas temporibus. Voluptate
            molestias optio numquam officiis omnis, ex voluptatibus mollitia
            voluptates tempore ratione porro, exercitationem saepe et iure
            assumenda ullam necessitatibus quaerat aperiam beatae magni dolores
            sequi sapiente neque distinctio. Aspernatur perspiciatis sint fugit
            nihil praesentium.
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body1"></Typography>
        </Grid>
      </Grid>
    </Container>
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
    <Container
      sx={{
        marginBottom: '50px',
      }}
    >
      <Caption caption="My projects" />

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

const Experience = () => {
  return (
    <Container
      sx={{
        marginBottom: '50px',
      }}
    >
      <Caption caption="Experience" />
      <Accordion defaultExpanded>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          expandIcon={<ExpandMoreSharp color="primary" />}
        >
          <Grid container sx={{ fontWeight: 'bold' }}>
            <Grid item xs={6}>
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Grid>
            <Grid item xs={6}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendi
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <PinDropSharp />
          <ShareSharp />
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
          expandIcon={<ExpandMoreSharp color="primary" />}
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel3-content"
          id="panel3-header"
          expandIcon={<ExpandMoreSharp color="primary" />}
        >
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

const MainPage = () => {
  return (
    <>
      {/* header */}
      <AppBar />

      {/* main */}
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectsList />
        <Experience />
      </main>

      {/* foooter */}
      <footer></footer>
    </>
  );
};

export default MainPage;
