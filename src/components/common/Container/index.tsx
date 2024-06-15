import clsx from 'clsx';

export interface MyContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const MyContainer = ({ children, className }: MyContainerProps) => {
  return <div className={clsx('container', className)}>{children}</div>;
};

export default MyContainer;
