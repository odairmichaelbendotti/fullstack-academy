import Navigation from "../Navigation";

type FrameContainer = {
  children: React.ReactNode;
};

const FrameContainer = ({ children }: FrameContainer) => {
  return (
    <div className="max-w-412.5 mx-auto grid w-full grid-cols-[20px_1fr_20px] grid-rows-[20px_auto_20px]">
      <div />
      <div className="border-l border-r border-outline"></div>
      <div />
      <div className="border-t border-b border-outline"></div>
      <div className="border border-outline relative bg-surface">
        <Navigation />
        <div className="px-4 md:px-10 max-w-412.5 mx-auto w-full">
          {children}
        </div>
      </div>
      <div className="border-t border-b border-outline"></div>
      <div></div>
      <div className="border-r border-l border-outline" />
      <div></div>
    </div>
  );
};

export default FrameContainer;
