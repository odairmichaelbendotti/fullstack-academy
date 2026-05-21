import Navigation from "@/components/layout/Navigation";

type FrameContainer = {
  children: React.ReactNode;
};

const FrameContainer = ({ children }: FrameContainer) => {
  return (
    <div className="w-full flex justify-center">
      {/* Trilho esquerdo */}
      <div className="w-px shrink-0 border-l border-outline" />

      {/* Conteúdo principal — largura máxima real */}
      <div className="relative w-full max-w-400 min-w-0">
        <Navigation />
        <div className="w-full">
          {children}
        </div>
      </div>

      {/* Trilho direito */}
      <div className="w-px shrink-0 border-r border-outline" />
    </div>
  );
};

export default FrameContainer;
