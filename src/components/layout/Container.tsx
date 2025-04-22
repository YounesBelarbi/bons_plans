type ContainerProps = {
  children: React.ReactNode;
};
//    sm:px-10
const Container = ({ children }: ContainerProps) => {
  return <div className="mx-auto max-w-7xl px-4 lg-px-4 ">{children}</div>;
};

export default Container;
