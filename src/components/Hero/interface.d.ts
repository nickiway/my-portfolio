import { HTMLAttributes } from 'react';

export interface HeroSectionProps extends HTMLAttributes<HTMLDivElement> {
  popoverOpacity?: number;
  backgroundImage?: string;
}
