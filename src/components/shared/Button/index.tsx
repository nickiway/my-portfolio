'use client';

import { Button as MUIButton, useButton } from '@mui/base';
import type { ButtonProps } from './interface';
import { styled } from '@mui/system';

const Button = ({ children, ...props }: ButtonProps) => {
  const { getRootProps } = useButton({ ...props });
  return (
    <MUIButton {...getRootProps()} {...props}>
      {children}
    </MUIButton>
  );
};

export default styled(Button)(({ variant = 'primary' }) => {
  console.log(variant);
  return {
    /* styles go here... */
  };
});
