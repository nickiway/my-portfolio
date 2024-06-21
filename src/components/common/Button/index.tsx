'use client';

import type { ButtonProps as MuiButtonProps } from '@mui/material';

import { Button as MuiButton } from '@mui/material';
import { motion } from 'framer-motion';

const Button = (buttonProps: MuiButtonProps) => {
  return (
    <MuiButton
      component={motion.button}
      variant="contained"
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.7 }}
      transition={{ duration: 0.5 }}
      {...buttonProps}
    />
  );
};

export default Button;
