import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import { PrimaryButton } from "@/components/ui/Button";

const nodes = [
  { label: "Claude API",    x: "18%", y: "22%" },
  { label: "MCP Server",   x: "80%", y: "20%" },
  { label: "LLM Tools",    x: "15%", y: "72%" },
  { label: "RAG Pipeline", x: "82%", y: "70%" },
  { label: "Agents",       x: "50%", y: "15%" },
  { label: "Vector DB",    x: "65%", y: "55%" },
];

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden flex flex-col md:flex-row">

      {/* glows âmbar */}
      <div className="absolute top-1/4 -left-24 w-72 h-72 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-60 h-48 md:w-80 md:h-60 bg-primary/6 rounded-full blur-3xl pointer-events-none" />

      {/* hachura diagonal */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(-45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px)",
        }}
      />

      {/* ── TEXTO ── */}
      <div className="relative z-10 flex flex-col justify-center p-6 pt-10 md:p-12 md:w-[55%]">

        {/* badges */}
        <div className="flex items-center gap-2 mb-6 md:mb-8 flex-wrap">
          <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-primary bg-primary/15 text-primary shadow-lg shadow-primary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Formação Fullstack
          </span>
          <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary/60">
            Do zero ao mercado
          </span>
        </div>

        {/* headline */}
        <div className="mb-5 md:mb-6">
          <p className="text-[10px] font-mono text-primary/50 tracking-widest uppercase mb-2">
            Back-end · Front-end · DevOps · IA
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-2">
            <span className="text-primary">Fullstack</span>{" "}
            <span className="text-textPrimary">do jeito certo.</span>
          </h1>
          <h2 className="text-lg md:text-2xl font-bold text-textSecondary leading-snug tracking-tight">
            Com <span className="text-primary">IA</span> e <span className="text-primary">MCP</span> no centro.
          </h2>
        </div>

        <p className="text-sm md:text-base text-textSecondary leading-relaxed mb-6 md:mb-8 max-w-xl">
          Aprenda JavaScript, TypeScript, React, Next.js, Node.js, Docker e PostgreSQL com projetos reais — incluindo a formação em{" "}
          <strong className="text-textPrimary font-semibold">IA e Model Context Protocol</strong>.
        </p>

        {/* pills */}
        <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
          {[
            { label: "TypeScript",   hot: true  },
            { label: "React",        hot: true  },
            { label: "Node.js",      hot: true  },
            { label: "MCP Protocol", hot: true  },
            { label: "PostgreSQL",   hot: false },
            { label: "Docker",       hot: false },
            { label: "Next.js",      hot: false },
          ].map((tag) => (
            <span
              key={tag.label}
              className={`text-[11px] font-mono px-2.5 py-1 rounded border
                ${tag.hot
                  ? "text-primary border-primary/40 bg-primary/10"
                  : "text-textSecondary/60 border-outline bg-transparent"
                }`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <Link href="/formation" className="w-full sm:w-auto">
            <PrimaryButton text="Ver formações" />
          </Link>
          <Link
            href="/courses"
            className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors duration-300 group/cta py-2"
          >
            Explorar cursos
            <RiArrowRightLine size={15} className="group-hover/cta:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* ── GRAFO — aparece embaixo no mobile, à direita no desktop ── */}
      <div className="relative w-full h-52 md:w-[45%] md:h-auto border-t md:border-t-0 md:border-l border-outline/30 overflow-hidden">

        {/* grade âmbar */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* fade borda esquerda */}
        <div className="absolute inset-y-0 left-0 w-12 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--bg), transparent)" }} />

        {/* SVG linhas */}
        <svg className="absolute inset-0 w-full h-full">
          {nodes.map((node) => (
            <line
              key={node.label}
              x1="50%" y1="50%"
              x2={node.x} y2={node.y}
              stroke="var(--primary)"
              strokeWidth="0.8"
              strokeOpacity="0.2"
              strokeDasharray="4 5"
            />
          ))}
        </svg>

        {/* nós satélites */}
        {nodes.map((node) => (
          <div
            key={node.label}
            className="absolute flex flex-col items-center gap-1 -translate-x-1/2 -translate-y-1/2"
            style={{ left: node.x, top: node.y }}
          >
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-primary/70 ring-2 ring-primary/20 shadow-lg shadow-primary/40" />
            <span className="text-[7px] md:text-[8px] font-mono text-primary/60 whitespace-nowrap">{node.label}</span>
          </div>
        ))}

        {/* nó central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 z-10">
          <div className="absolute w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/30"
            style={{ animation: "pulse-ring 2.5s ease-out infinite" }} />
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center shadow-xl shadow-primary/30 z-10">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-primary shadow-lg shadow-primary/60" />
          </div>
          <span className="text-[9px] md:text-[10px] font-mono font-bold text-primary whitespace-nowrap z-10">MCP Hub</span>
        </div>

        {/* glow central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 bg-primary/8 rounded-full blur-2xl pointer-events-none" />
      </div>

    </section>
  );
};

export default Hero;
