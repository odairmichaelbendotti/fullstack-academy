type Height = "xs" | "sm" | "md" | "lg" | "xl";
type Pattern = "diagonal" | "diagonal-reverse" | "horizontal" | "vertical" | "grid" | "dots" | "line";
type Intensity = "ghost" | "subtle" | "soft" | "medium" | "strong";
type Color = "default" | "primary" | "secondary" | "muted";

type SectionDividerProps = {
  height?: Height;
  pattern?: Pattern;
  intensity?: Intensity;
  color?: Color;
};

const heights: Record<Height, string> = {
  xs: "h-8",
  sm: "h-14",
  md: "h-20",
  lg: "h-32",
  xl: "h-48",
};

const intensities: Record<Intensity, number> = {
  ghost:  0.02,
  subtle: 0.04,
  soft:   0.07,
  medium: 0.12,
  strong: 0.2,
};

const colors: Record<Color, string> = {
  default:   "var(--textPrimary)",
  primary:   "var(--primary)",
  secondary: "var(--secondary)",
  muted:     "var(--outline)",
};

function getPattern(pattern: Pattern, color: string): string {
  switch (pattern) {
    case "diagonal":
      return `repeating-linear-gradient(45deg, ${color} 0px, ${color} 1px, transparent 1px, transparent 14px)`;
    case "diagonal-reverse":
      return `repeating-linear-gradient(-45deg, ${color} 0px, ${color} 1px, transparent 1px, transparent 14px)`;
    case "horizontal":
      return `repeating-linear-gradient(0deg, ${color} 0px, ${color} 1px, transparent 1px, transparent 14px)`;
    case "vertical":
      return `repeating-linear-gradient(90deg, ${color} 0px, ${color} 1px, transparent 1px, transparent 14px)`;
    case "grid":
      return `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`;
    case "dots":
      return `radial-gradient(circle, ${color} 1px, transparent 1px)`;
    default:
      return "";
  }
}

function getPatternSize(pattern: Pattern): string {
  switch (pattern) {
    case "grid":   return "20px 20px";
    case "dots":   return "16px 16px";
    default:       return "auto";
  }
}

/* variante linha com corners */
function LineDivider({ color }: { color: string }) {
  const cornerSize = 6;
  return (
    <div className="relative w-full flex items-center py-6">
      {/* corner esquerdo */}
      <div
        className="shrink-0"
        style={{
          width: cornerSize,
          height: cornerSize,
          borderTop: `1.5px solid ${color}`,
          borderLeft: `1.5px solid ${color}`,
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
        }}
      />

      {/* linha */}
      <div className="flex-1 h-px" style={{ backgroundColor: color, opacity: 0.3 }} />

      {/* corner direito */}
      <div
        className="shrink-0"
        style={{
          width: cornerSize,
          height: cornerSize,
          borderTop: `1.5px solid ${color}`,
          borderRight: `1.5px solid ${color}`,
          clipPath: "polygon(0 0, 100% 0, 100% 100%)",
        }}
      />
    </div>
  );
}

const SectionDivider = ({
  height = "sm",
  pattern = "diagonal",
  intensity = "subtle",
  color = "default",
}: SectionDividerProps) => {
  const resolvedColor = colors[color];

  if (pattern === "line") {
    return <LineDivider color={resolvedColor} />;
  }

  return (
    <div className={`relative w-full overflow-hidden border-t border-outline ${heights[height]}`}>
      {/* padrão */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: getPattern(pattern, resolvedColor),
          backgroundSize: getPatternSize(pattern),
          opacity: intensities[intensity],
        }}
      />
      {/* fade vertical */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, var(--bg) 0%, transparent 35%, transparent 65%, var(--bg) 100%)",
        }}
      />
    </div>
  );
};

export default SectionDivider;
