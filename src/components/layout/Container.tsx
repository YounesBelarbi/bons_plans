type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-auto px-8 sm:px-10 lg-px-4 max-w-7xl ">{children}</div>
  );
};

export default Container;
