import { styled } from '@mui/system';
import type { HeroSectionProps } from './interface';
import clsx from 'clsx';

const Hero = ({
  popoverOpacity = 20,
  backgroundImage,
  className,
  children,
  ...props
}: HeroSectionProps) => {
  const popoverBg = `bg-black/${popoverOpacity}`;

  return (
    <section
      {...props}
      className={clsx('relative', className)}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={clsx('absolute  w-full h-full', popoverBg)}>
        {children}
      </div>
    </section>
  );
};

export default styled(Hero)({
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
});
