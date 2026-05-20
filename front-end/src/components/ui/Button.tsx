type ButtonProps = {
  text: string;
  type?: "primary" | "ghost" | "outline" | "outlinePrimary" | "fill";
};

function selectButton(type: ButtonProps["type"], text: string) {
  switch (type) {
    case "primary":
      return <PrimaryButton text={text} />;
    case "ghost":
      return <GhostButton text={text} />;
    case "outline":
      return <OutlineButton text={text} />;
    case "outlinePrimary":
      return <OutlinePrimaryButton text={text} />;
    case "fill":
      return <FillButton text={text} />;
    default:
      return <PrimaryButton text={text} />;
  }
}

const Button = ({ text, type = "primary" }: ButtonProps) => {
  return selectButton(type, text);
};

export default Button;

// Botão primário com cantos animados
export function PrimaryButton({ text }: { text: string }) {
  return (
    <button className="relative px-6 py-2 text-sm font-bold text-bg bg-primary rounded-full cursor-pointer transition-all group overflow-visible">
      <span className="relative z-10">{text}</span>

      {/* Cantos triangulares - surgem de fora para dentro */}
      <span
        className="absolute w-2 h-2 border-l-2 border-t-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out -top-3 -left-3 group-hover:-top-1 group-hover:-left-1"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      ></span>
      <span
        className="absolute w-2 h-2 border-r-2 border-t-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out -top-3 -right-3 group-hover:-top-1 group-hover:-right-1"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
      ></span>
      <span
        className="absolute w-2 h-2 border-l-2 border-b-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out -bottom-3 -left-3 group-hover:-bottom-1 group-hover:-left-1"
        style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
      ></span>
      <span
        className="absolute w-2 h-2 border-r-2 border-b-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out -bottom-3 -right-3 group-hover:-bottom-1 group-hover:-right-1"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
      ></span>
    </button>
  );
}

// Botão transparente com vértices sutis
export function GhostButton({ text }: { text: string }) {
  return (
    <button className="relative px-6 py-2 text-sm font-bold text-textPrimary bg-transparent rounded-lg cursor-pointer transition-all duration-300 group">
      <span className="relative z-10">{text}</span>

      {/* Vértices - surgem de fora para dentro */}
      <span
        className="absolute w-2 h-2 border-l border-t border-primary opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out -top-2 -left-2 group-hover:top-0 group-hover:left-0"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      ></span>
      <span
        className="absolute w-2 h-2 border-r border-t border-primary opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out -top-2 -right-2 group-hover:top-0 group-hover:right-0"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
      ></span>
      <span
        className="absolute w-2 h-2 border-l border-b border-primary opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out -bottom-2 -left-2 group-hover:bottom-0 group-hover:left-0"
        style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
      ></span>
      <span
        className="absolute w-2 h-2 border-r border-b border-primary opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out -bottom-2 -right-2 group-hover:bottom-0 group-hover:right-0"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
      ></span>
    </button>
  );
}

// Botão com borda neutra e preenchimento
export function OutlineButton({ text }: { text: string }) {
  return (
    <button className="relative px-6 py-2 text-sm font-bold text-textPrimary border border-outline bg-transparent rounded-lg cursor-pointer transition-all duration-500 group overflow-hidden hover:border-primary">
      <span className="relative z-10 group-hover:text-bg transition-colors duration-500">
        {text}
      </span>

      <span className="absolute inset-0 bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out"></span>

      {/* Vértices no hover */}
      <span
        className="absolute -top-1 -left-1 w-2 h-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{
          background: "var(--primary)",
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
        }}
      ></span>
      <span
        className="absolute -top-1 -right-1 w-2 h-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{
          background: "var(--primary)",
          clipPath: "polygon(100% 0, 100% 100%, 0 0)",
        }}
      ></span>
      <span
        className="absolute -bottom-1 -left-1 w-2 h-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{
          background: "var(--primary)",
          clipPath: "polygon(0 0, 100% 100%, 0 100%)",
        }}
      ></span>
      <span
        className="absolute -bottom-1 -right-1 w-2 h-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{
          background: "var(--primary)",
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
        }}
      ></span>
    </button>
  );
}

// Botão com borda primária e preenchimento
export function OutlinePrimaryButton({ text }: { text: string }) {
  return (
    <button className="relative px-6 py-2 text-sm font-bold text-textPrimary border border-primary bg-transparent rounded-lg cursor-pointer transition-all duration-500 group overflow-hidden">
      <span className="relative z-10 group-hover:text-bg transition-colors duration-500">
        {text}
      </span>

      <span className="absolute inset-0 bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out"></span>

      {/* Vértices no hover */}
      <span
        className="absolute -top-1 -left-1 w-2 h-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{
          background: "var(--primary)",
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
        }}
      ></span>
      <span
        className="absolute -top-1 -right-1 w-2 h-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{
          background: "var(--primary)",
          clipPath: "polygon(100% 0, 100% 100%, 0 0)",
        }}
      ></span>
      <span
        className="absolute -bottom-1 -left-1 w-2 h-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{
          background: "var(--primary)",
          clipPath: "polygon(0 0, 100% 100%, 0 100%)",
        }}
      ></span>
      <span
        className="absolute -bottom-1 -right-1 w-2 h-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{
          background: "var(--primary)",
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
        }}
      ></span>
    </button>
  );
}

// Botão sem borda com preenchimento suave
export function FillButton({ text }: { text: string }) {
  return (
    <button className="relative px-6 py-2 text-sm font-bold text-textPrimary bg-transparent rounded-lg cursor-pointer transition-all duration-500 group overflow-hidden">
      <span className="relative z-10 group-hover:text-bg transition-colors duration-500">
        {text}
      </span>

      <span className="absolute inset-0 bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
    </button>
  );
}
