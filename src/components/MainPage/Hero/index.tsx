import { styled } from '@mui/system';
import type { HeroSectionProps } from './interface';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import clsx from 'clsx';
import { Paper, Theme } from '@mui/material';

const Hero = ({ backgroundImage, className }: HeroSectionProps) => {
  return (
    // <Box
    //   className={clsx('relative', className)}
    //   style={{ backgroundImage: `url(${backgroundImage})` }}
    // >
    //   <Box className="absolute h-full bg-black/30 w-full text-white flex items-center  px-10">
    //     <Box className="max-w-screen-sm ">
    //       <Typography variant="h3" className="py-2">
    //         Crafting Seamless Digital Experiences{' '}
    //       </Typography>
    //       <Typography variant="h6" className="pb-10 ">
    //         Bridging Design and Functionality with Expertise, Delivering
    //         End-to-End Solutions for a Connected World
    //       </Typography>

    //       <Box className="flex gap-x-5">
    //         <Button href="/" variant="contained" color="primary">
    //           About the author
    //         </Button>
    //         <Button href="/" variant="contained" color="secondary">
    //           My Projects
    //         </Button>
    //       </Box>
    //     </Box>
    //   </Box>
    // </Box>
    <div>test</div>
  );
};

export default styled(Hero)({
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  height: '100vh',
});
