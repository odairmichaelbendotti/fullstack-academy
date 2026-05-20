import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PrimaryButton } from "@/components/ui/Button";

const techStack = [
  { src: "/tech-icons/frontend/nextjs.svg", label: "Next.js" },
  { src: "/tech-icons/frontend/react.svg", label: "React" },
  { src: "/tech-icons/backend/typescript.svg", label: "TypeScript" },
  { src: "/tech-icons/backend/javascript.svg", label: "JavaScript" },
  { src: "/tech-icons/backend/nodejs.svg", label: "Node.js" },
  { src: "/tech-icons/backend/prisma.svg", label: "Prisma" },
  { src: "/tech-icons/database/postgresql.svg", label: "PostgreSQL" },
  { src: "/tech-icons/database/mongodb.svg", label: "MongoDB" },
  { src: "/tech-icons/infrastructure/docker.svg", label: "Docker" },
  { src: "/tech-icons/tools/git.svg", label: "Git" },
];

const stats = [
  { value: "12+", label: "Cursos" },
  { value: "200+", label: "Aulas" },
  { value: "1.5k+", label: "Alunos" },
];

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-10 py-10 md:py-14 overflow-hidden">
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Badge topo */}
      <div className="relative z-10 mb-6 flex items-center gap-2 border border-primary/30 bg-primary/10 text-primary text-[11px] md:text-xs font-semibold px-3 md:px-4 py-1.5 rounded-full text-center">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0" />
        Formação Fullstack completa — do zero ao deploy
      </div>

      {/* Headline */}
      <h1 className="relative z-10 max-w-4xl text-center text-3xl md:text-6xl font-bold text-textPrimary leading-tight tracking-tight">
        Domine o{" "}
        <span className="text-primary">desenvolvimento web</span>{" "}
        de ponta a ponta
      </h1>

      {/* Subtítulo */}
      <p className="relative z-10 mt-5 max-w-sm md:max-w-xl text-center text-sm md:text-base text-textSecondary leading-relaxed">
        Aprenda JavaScript, TypeScript, React, Next.js, Node.js, Docker,
        PostgreSQL e muito mais com projetos reais e mentorias focadas no mercado.
      </p>

      {/* CTAs */}
      <div className="relative z-10 mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto">
        <Link href="/formation" className="w-full sm:w-auto flex justify-center">
          <PrimaryButton text="Ver formações" />
        </Link>
        <Link
          href="/courses"
          className="flex items-center gap-2 text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors duration-300 group"
        >
          Explorar cursos
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        </Link>
      </div>

      {/* Stats */}
      <div className="relative z-10 mt-8 md:mt-10 flex items-center gap-6 md:gap-12">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-6 md:gap-12">
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-3xl font-bold text-textPrimary">
                {stat.value}
              </span>
              <span className="text-xs text-textSecondary mt-0.5">
                {stat.label}
              </span>
            </div>
            {i < stats.length - 1 && (
              <div className="w-px h-6 md:h-8 bg-outline" />
            )}
          </div>
        ))}
      </div>

      {/* Divisor */}
      <div className="relative z-10 mt-8 md:mt-10 w-full max-w-xs md:max-w-2xl flex items-center gap-4">
        <div className="flex-1 h-px bg-outline" />
        <span className="text-[10px] md:text-xs text-textSecondary whitespace-nowrap">
          tecnologias que você vai dominar
        </span>
        <div className="flex-1 h-px bg-outline" />
      </div>

      {/* Tech stack — carrossel infinito */}
      <div className="relative z-10 mt-6 w-full max-w-xs md:max-w-3xl">
        {/* sombras laterais */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--bg) 0%, transparent 100%)" }} />
        <div className="absolute inset-y-0 right-0 w-12 md:w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--bg) 0%, transparent 100%)" }} />

        <div className="overflow-hidden">
          <div
            className="flex items-center gap-7 md:gap-10"
            style={{ animation: "marquee 16s linear infinite", width: "max-content" }}
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 shrink-0">
                <div className="w-7 h-7 md:w-8 md:h-8 relative">
                  <Image
                    src={tech.src}
                    alt={tech.label}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[10px] text-textSecondary">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
