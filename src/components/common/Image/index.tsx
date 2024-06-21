import type { ImageProps } from './interface';

import Image from 'next/image';

const MyImage = ({ alt, src, width, height }: ImageProps) => {
  return <Image src={src} alt={alt} width={width} height={height}></Image>;
};

export default MyImage;
