import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PrimaryButton } from "@/components/ui/Button";

const techStack = [
  { src: "/tech-icons/frontend/nextjs.svg",     label: "Next.js" },
  { src: "/tech-icons/frontend/react.svg",       label: "React" },
  { src: "/tech-icons/backend/typescript.svg",   label: "TypeScript" },
  { src: "/tech-icons/backend/javascript.svg",   label: "JavaScript" },
  { src: "/tech-icons/backend/nodejs.svg",       label: "Node.js" },
  { src: "/tech-icons/backend/prisma.svg",       label: "Prisma" },
  { src: "/tech-icons/database/postgresql.svg",  label: "PostgreSQL" },
  { src: "/tech-icons/database/mongodb.svg",     label: "MongoDB" },
  { src: "/tech-icons/infrastructure/docker.svg",label: "Docker" },
  { src: "/tech-icons/tools/git.svg",            label: "Git" },
];

const stats = [
  { value: "847+",  label: "Alunos" },
  { value: "200+",  label: "Aulas" },
  { value: "4.9★",  label: "Avaliação" },
];

const Hero = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center px-5 md:px-10 pt-16 pb-12 md:pt-24 md:pb-20 overflow-hidden">
      {/* Grid decorativo de fundo */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--textPrimary) 1px, transparent 1px), linear-gradient(90deg, var(--textPrimary) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow âmbar central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-150 h-48 md:h-75 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Badge */}
      <div className="relative z-10 mb-5 flex items-center gap-2 border border-primary/30 bg-primary/10 text-primary text-[11px] font-semibold px-3 py-1.5 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0" />
        Formação Fullstack — do zero ao deploy
      </div>

      {/* Headline */}
      <h1 className="relative z-10 max-w-3xl text-center text-[2rem] leading-[1.15] md:text-6xl font-bold text-textPrimary tracking-tight">
        Domine o{" "}
        <span className="text-primary">desenvolvimento web</span>{" "}
        de ponta a ponta
      </h1>

      {/* Subtítulo */}
      <p className="relative z-10 mt-4 max-w-sm md:max-w-xl text-center text-sm md:text-base text-textSecondary leading-relaxed">
        JavaScript, TypeScript, React, Next.js, Node.js, Docker e PostgreSQL
        — com projetos reais e mentoria focada no mercado.
      </p>

      {/* CTAs */}
      <div className="relative z-10 mt-8 flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs sm:max-w-none sm:w-auto">
        <Link href="/formation" className="w-full sm:w-auto flex justify-center">
          <PrimaryButton text="Ver formações" />
        </Link>
        <Link
          href="/courses"
          className="flex items-center gap-1.5 text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors duration-300 group"
        >
          Explorar cursos
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Stats */}
      <div className="relative z-10 mt-10 flex items-center gap-6 md:gap-12">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-6 md:gap-12">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-textPrimary">{stat.value}</span>
              <span className="text-[11px] text-textSecondary mt-0.5">{stat.label}</span>
            </div>
            {i < stats.length - 1 && <div className="w-px h-6 bg-outline" />}
          </div>
        ))}
      </div>

      {/* Divisor */}
      <div className="relative z-10 mt-10 w-full max-w-70 md:max-w-2xl flex items-center gap-3">
        <div className="flex-1 h-px bg-outline" />
        <span className="text-[10px] text-textSecondary whitespace-nowrap">tecnologias que você vai dominar</span>
        <div className="flex-1 h-px bg-outline" />
      </div>

      {/* Carrossel */}
      <div className="relative z-10 mt-5 w-full max-w-70 md:max-w-2xl">
        <div className="absolute inset-y-0 left-0 w-10 md:w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--bg), transparent)" }} />
        <div className="absolute inset-y-0 right-0 w-10 md:w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--bg), transparent)" }} />
        <div className="overflow-hidden">
          <div
            className="flex items-center gap-6 md:gap-10"
            style={{ animation: "marquee 16s linear infinite", width: "max-content" }}
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="flex flex-col items-center gap-1 shrink-0">
                <div className="w-6 h-6 md:w-8 md:h-8 relative">
                  <Image src={tech.src} alt={tech.label} fill className="object-contain" />
                </div>
                <span className="text-[9px] md:text-[10px] text-textSecondary">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
