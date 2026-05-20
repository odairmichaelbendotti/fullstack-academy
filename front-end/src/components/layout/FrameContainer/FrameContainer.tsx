import Navigation from "@/components/layout/Navigation";

type FrameContainer = {
  children: React.ReactNode;
};

const FrameContainer = ({ children }: FrameContainer) => {
  return (
    <div className="max-w-412.5 mx-auto grid w-full grid-cols-[1px_1fr_1px]">
      {/* Trilho esquerdo */}
      <div className="border-l border-outline" />

      {/* Conteúdo principal */}
      <div className="relative">
        <Navigation />
        <div className="w-full">
          {children}
        </div>
      </div>

      {/* Trilho direito */}
      <div className="border-r border-outline" />
    </div>
  );
};

export default FrameContainer;
