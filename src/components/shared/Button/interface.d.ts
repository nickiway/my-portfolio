import type { ButtonProps as MUIButtonProps } from '@mui/base';

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    MUIButtonProps {
  variant?: 'primary' | 'secondary' | 'link';
}
