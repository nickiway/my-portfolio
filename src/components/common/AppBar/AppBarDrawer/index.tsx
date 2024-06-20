import {
  Typography,
  IconButton,
  SwipeableDrawer,
  Divider,
  Box,
} from '@mui/material';

import { ExitToApp } from '@mui/icons-material';

import Socials from 'components/common/Socials';
import Navigation from 'components/common/Navigation';

const AppBarDrawer = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <SwipeableDrawer
      sx={{ display: { xs: 'flex', sm: 'none' } }}
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      ModalProps={{
        keepMounted: false,
      }}
    >
      <Box>
        <Typography variant="h5">Menu</Typography>

        <IconButton onClick={onClose}>
          <ExitToApp color="primary" />
        </IconButton>
      </Box>

      <Divider />

      <Navigation
        boxProps={{
          onClick: onClose,
          onKeyDown: onClose,
        }}
      />

      <Divider />
      <Box>
        <Socials
          boxProps={{
            onClick: onClose,
            onKeyDown: onClose,
          }}
        />
      </Box>
    </SwipeableDrawer>
  );
};

export default AppBarDrawer;
