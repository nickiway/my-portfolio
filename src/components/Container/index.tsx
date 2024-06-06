export interface MyContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const MyContainer = ({ children, ...props }: MyContainerProps) => {
  return <div {...props}>{children}</div>;
};

export default MyContainer;
