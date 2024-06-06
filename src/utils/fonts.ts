import { Varela_Round } from 'next/font/google';
import { Poppins } from 'next/font/google';

export const varelaRound = Varela_Round({
  subsets: ['latin'],
  weight: ['400'],
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '600', '800', '900'],
  style: ['italic', 'normal'],
});
