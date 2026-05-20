type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`max-w-5xl mx-auto px-5 md:px-10 w-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;
