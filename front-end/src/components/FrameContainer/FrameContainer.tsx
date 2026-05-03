import Navigation from "../Navigation";

type FrameContainer = {
  children: React.ReactNode;
};

const FrameContainer = ({ children }: FrameContainer) => {
  return (
    <div className="grid grid-cols-[20px_1fr_20px] grid-rows-[0_1fr_20px] h-full min-h-0">
      <div />
      <div className="border-l border-r border-outline"></div>
      <div />
      <div className="border-t border-b border-outline"></div>
      <div className="border border-outline relative min-h-0 bg-surface">
        <Navigation />
        <div className="px-4 md:px-10">{children}</div>
      </div>
      <div className="border-t border-b border-outline"></div>
      <div></div>
      <div className="border-r border-l border-outline" />
      <div></div>
    </div>
  );
};

export default FrameContainer;
