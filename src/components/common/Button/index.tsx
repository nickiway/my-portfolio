'use client';

import type { ButtonProps as MuiButtonProps } from '@mui/material';

import { Button as MuiButton } from '@mui/material';

const Button = (buttonProps: MuiButtonProps) => {
  return <MuiButton variant="contained" {...buttonProps} />;
};

export default Button;
