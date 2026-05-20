import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import Container from "@/components/ui/Container";

type Track = {
  number: string;
  label: string;
  title: string;
  description: string;
  href: string;
  mainIcon: { src: string; label: string };
  techs: { src: string; label: string }[];
  badgeClass: string;
};

const tracks: Track[] = [
  {
    number: "01",
    label: "Back-end",
    title: "Construa APIs robustas do zero.",
    description:
      "Arquitetura limpa, autenticação, banco de dados e deploy. Tudo que um back-end profissional exige.",
    href: "/formation",
    mainIcon: { src: "/tech-icons/backend/nodejs.svg", label: "Node.js" },
    techs: [
      { src: "/tech-icons/backend/typescript.svg",  label: "TypeScript" },
      { src: "/tech-icons/backend/prisma.svg",       label: "Prisma" },
      { src: "/tech-icons/database/postgresql.svg",  label: "PostgreSQL" },
      { src: "/tech-icons/backend/express.svg",      label: "Express" },
    ],
    badgeClass: "text-green-400 border-green-400/30 bg-green-400/10",
  },
  {
    number: "02",
    label: "Front-end",
    title: "Interfaces modernas que convertem.",
    description:
      "React, Next.js e Tailwind com foco em performance, acessibilidade e experiência real.",
    href: "/formation",
    mainIcon: { src: "/tech-icons/frontend/react.svg", label: "React" },
    techs: [
      { src: "/tech-icons/frontend/nextjs.svg",      label: "Next.js" },
      { src: "/tech-icons/frontend/tailwindcss.svg", label: "Tailwind" },
      { src: "/tech-icons/backend/typescript.svg",   label: "TypeScript" },
      { src: "/tech-icons/frontend/zustand.svg",     label: "Zustand" },
    ],
    badgeClass: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
  },
  {
    number: "03",
    label: "DevOps",
    title: "Do código ao servidor sem travar.",
    description:
      "Containers, CI/CD e cloud. As habilidades que fazem o mercado pagar mais por qualquer dev.",
    href: "/formation",
    mainIcon: { src: "/tech-icons/infrastructure/docker.svg", label: "Docker" },
    techs: [
      { src: "/tech-icons/tools/github.svg",              label: "GitHub" },
      { src: "/tech-icons/infrastructure/aws.svg",        label: "AWS" },
      { src: "/tech-icons/database/postgresql.svg",       label: "PostgreSQL" },
      { src: "/tech-icons/infrastructure/kubernetes.svg", label: "Kubernetes" },
    ],
    badgeClass: "text-orange-400 border-orange-400/30 bg-orange-400/10",
  },
];

function SquareGrid() {
  return (
    <div
      className="absolute bottom-0 left-0 w-48 h-36 pointer-events-none opacity-[0.09]"
      style={{
        backgroundImage:
          "linear-gradient(var(--textPrimary) 1px, transparent 1px), linear-gradient(90deg, var(--textPrimary) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        WebkitMaskImage:
          "linear-gradient(to right, black 0%, transparent 85%), linear-gradient(to top, black 0%, transparent 80%)",
        maskImage:
          "linear-gradient(to right, black 0%, transparent 85%), linear-gradient(to top, black 0%, transparent 80%)",
        WebkitMaskComposite: "destination-in",
        maskComposite: "intersect",
      }}
    />
  );
}

const aiNodes = [
  { label: "Claude API",    x: "12%",  y: "20%" },
  { label: "MCP Server",   x: "48%",  y: "12%" },
  { label: "LLM Tools",    x: "78%",  y: "25%" },
  { label: "RAG Pipeline", x: "22%",  y: "62%" },
  { label: "Agents",       x: "58%",  y: "58%" },
  { label: "Vector DB",    x: "82%",  y: "68%" },
];

const aiEdges = [
  ["12%,20%", "48%,12%"],
  ["48%,12%", "78%,25%"],
  ["12%,20%", "22%,62%"],
  ["48%,12%", "58%,58%"],
  ["78%,25%", "82%,68%"],
  ["22%,62%", "58%,58%"],
  ["58%,58%", "82%,68%"],
];

function GraphNode({ label, x, y }: { label: string; x: string; y: string }) {
  return (
    <div
      className="absolute flex flex-col items-center gap-1 -translate-x-1/2 -translate-y-1/2"
      style={{ left: x, top: y }}
    >
      <div className="w-2.5 h-2.5 rounded-full bg-primary/60 ring-2 ring-primary/20 shadow-lg shadow-primary/30" />
      <span className="text-[9px] font-mono text-primary/60 whitespace-nowrap">{label}</span>
    </div>
  );
}

const Tracks = () => {
  return (
    <section className="relative w-full border-t border-outline">
      <Container className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline px-0!">
        {tracks.map((track) => (
          <div
            key={track.number}
            className="group relative bg-bg p-6 md:p-10 flex flex-col overflow-hidden min-h-0"
          >
            <SquareGrid />

            {/* número tipográfico — menor em mobile */}
            <span className="absolute bottom-4 right-4 text-[64px] md:text-[96px] font-black text-outline/40 select-none leading-none pointer-events-none group-hover:text-outline/20 transition-colors duration-500">
              {track.number}
            </span>

            {/* ícone principal */}
            <div className="absolute top-5 right-5 z-1 w-20 h-20 md:w-28 md:h-28 opacity-15 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none">
              <Image src={track.mainIcon.src} alt={track.mainIcon.label} fill className="object-contain" />
            </div>

            {/* badge */}
            <span className={`relative z-10 w-fit text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border mb-3 ${track.badgeClass}`}>
              {track.label}
            </span>

            {/* título */}
            <h3 className="relative z-10 text-lg md:text-2xl font-bold text-textPrimary leading-snug mb-2">
              {track.title}
            </h3>

            {/* descrição */}
            <p className="relative z-10 text-sm text-textSecondary leading-relaxed mb-6">
              {track.description}
            </p>

            {/* ícones de tecnologia — label sempre visível em mobile */}
            <div className="relative z-10 flex items-end gap-4 mb-6">
              {track.techs.map((tech) => (
                <div key={tech.label} className="group/tech relative flex flex-col items-center gap-1">
                  <div className="w-6 h-6 md:w-7 md:h-7 relative opacity-40 group-hover:opacity-70 group-hover/tech:opacity-100 transition-opacity duration-300">
                    <Image src={tech.src} alt={tech.label} fill className="object-contain" />
                  </div>
                  <span className="text-[9px] md:text-[10px] text-textSecondary/60 group-hover/tech:text-textSecondary transition-colors duration-200">
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={track.href}
              className="relative z-10 mt-auto inline-flex items-center gap-2 text-sm font-semibold text-textSecondary group-hover:text-primary transition-colors duration-300"
            >
              Ver formação
              <RiArrowRightLine size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            {/* linha âmbar */}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
          </div>
        ))}

        {/* ── FULLSTACK MCP + IA — card destaque largura total ── */}
        <div className="group relative col-span-1 md:col-span-3 bg-bg overflow-hidden flex flex-col md:flex-row">

          {/* glows âmbar */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          {/* hachura diagonal em âmbar */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "repeating-linear-gradient(-45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px)",
            }}
          />

          {/* ── TEXTO — esquerda ── */}
          <div className="relative z-10 flex flex-col p-6 md:p-12 md:w-[55%]">

            {/* topo: badges */}
            <div className="flex items-center gap-2 mb-8 flex-wrap">
              <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-primary bg-primary/15 text-primary shadow-lg shadow-primary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Em breve
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary/60">
                Formação
              </span>
            </div>

            {/* headline principal */}
            <div className="mb-6">
              <p className="text-xs font-mono text-primary/50 tracking-widest uppercase mb-3">
                04 — Fullstack MCP + IA
              </p>
              <h3 className="text-3xl md:text-5xl font-black text-textPrimary leading-[1.1] tracking-tight mb-2">
                Construa o futuro
              </h3>
              <h3 className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tight">
                com <span className="text-primary">MCP</span> e <span className="text-primary">IA.</span>
              </h3>
            </div>

            <p className="text-sm md:text-base text-textSecondary leading-relaxed mb-8 max-w-lg">
              A próxima fronteira do desenvolvimento. Aprenda a orquestrar LLMs com o <strong className="text-textPrimary font-semibold">Model Context Protocol</strong>, construir agentes autônomos, pipelines RAG e entregar produtos reais com Inteligência Artificial — do zero ao deploy.
            </p>

            {/* pills de tech */}
            <div className="flex flex-wrap gap-2 mb-10">
              {[
                { label: "MCP Protocol",  hot: true },
                { label: "Claude API",    hot: true },
                { label: "AI Agents",     hot: true },
                { label: "RAG Pipeline",  hot: false },
                { label: "Vector DB",     hot: false },
                { label: "LangChain",     hot: false },
                { label: "Embeddings",    hot: false },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded border transition-colors duration-200
                    ${tag.hot
                      ? "text-primary border-primary/40 bg-primary/10"
                      : "text-textSecondary/60 border-outline bg-transparent"
                    }`}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            <Link
              href="/formation"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors duration-300 group/cta w-fit"
            >
              Quero ser notificado quando lançar
              <RiArrowRightLine size={14} className="group-hover/cta:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* ── GRAFO — direita ── */}
          <div className="relative md:flex-1 h-56 md:h-auto border-t md:border-t-0 md:border-l border-outline/30 overflow-hidden">

            {/* grade de fundo sutil */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* SVG — arestas do grafo */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              {/* arestas principais */}
              <line x1="50%" y1="50%" x2="18%" y2="22%" stroke="var(--primary)" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="var(--primary)" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="15%" y2="72%" stroke="var(--primary)" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="82%" y2="70%" stroke="var(--primary)" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="var(--primary)" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 4" />
              {/* arestas secundárias */}
              <line x1="18%" y1="22%" x2="50%" y2="15%" stroke="var(--primary)" strokeWidth="0.5" strokeOpacity="0.12" />
              <line x1="80%" y1="20%" x2="50%" y2="15%" stroke="var(--primary)" strokeWidth="0.5" strokeOpacity="0.12" />
              <line x1="15%" y1="72%" x2="82%" y2="70%" stroke="var(--primary)" strokeWidth="0.5" strokeOpacity="0.12" />
            </svg>

            {/* nó central — MCP Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 z-10">
              <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center shadow-xl shadow-primary/30">
                <div className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
              </div>
              <span className="text-[10px] font-mono font-bold text-primary whitespace-nowrap">MCP Hub</span>
            </div>

            {/* nós satélites */}
            {aiNodes.map((node) => (
              <GraphNode key={node.label} {...node} />
            ))}

            {/* glow central */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/8 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* linha âmbar bottom */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-700 ease-out" />
        </div>

      </Container>
    </section>
  );
};

export default Tracks;
