import { HTMLAttributes } from 'react';
import type { ButtonOwnProps } from '@mui/material';

export interface HeroSectionProps extends HTMLAttributes<HTMLDivElement> {
  backgroundImage?: string;
}
