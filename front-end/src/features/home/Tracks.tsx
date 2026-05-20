import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      { src: "/tech-icons/tools/github.svg",           label: "GitHub" },
      { src: "/tech-icons/infrastructure/aws.svg",     label: "AWS" },
      { src: "/tech-icons/database/postgresql.svg",    label: "PostgreSQL" },
      { src: "/tech-icons/infrastructure/kubernetes.svg", label: "Kubernetes" },
    ],
    badgeClass: "text-orange-400 border-orange-400/30 bg-orange-400/10",
  },
];

/* grid quadriculado — canto inferior esquerdo, fade via mask-image (independe da cor de fundo) */
function SquareGrid() {
  return (
    <div
      className="absolute bottom-0 left-0 w-56 h-44 pointer-events-none opacity-[0.09]"
      style={{
        backgroundImage:
          "linear-gradient(var(--textPrimary) 1px, transparent 1px), linear-gradient(90deg, var(--textPrimary) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        WebkitMaskImage: "linear-gradient(to right, black 0%, transparent 85%), linear-gradient(to top, black 0%, transparent 80%)",
        maskImage: "linear-gradient(to right, black 0%, transparent 85%), linear-gradient(to top, black 0%, transparent 80%)",
        WebkitMaskComposite: "destination-in",
        maskComposite: "intersect",
      }}
    />
  );
}

const Tracks = () => {
  return (
    <section className="relative w-full border-t border-outline px-4 md:px-10 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-outline">
        {tracks.map((track) => (
          <div
            key={track.number}
            className="group relative bg-bg p-8 md:p-10 flex flex-col overflow-hidden"
          >
            {/* grid quadriculado — canto superior direito */}
            <SquareGrid />


            {/* número tipográfico */}
            <span className="absolute bottom-6 right-6 text-[96px] font-black text-outline/40 select-none leading-none pointer-events-none group-hover:text-outline/20 transition-colors duration-500">
              {track.number}
            </span>

            {/* ícone principal — absoluto, canto superior direito, abaixo da grade */}
            <div className="absolute top-6 right-6 z-1 w-28 h-28 opacity-15 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none">
              <Image
                src={track.mainIcon.src}
                alt={track.mainIcon.label}
                fill
                className="object-contain"
              />
            </div>

            {/* badge */}
            <span className={`relative z-10 w-fit text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border mb-4 ${track.badgeClass}`}>
              {track.label}
            </span>

            {/* título */}
            <h3 className="relative z-10 text-xl md:text-2xl font-bold text-textPrimary leading-snug mb-3">
              {track.title}
            </h3>

            {/* descrição */}
            <p className="relative z-10 text-sm text-textSecondary leading-relaxed mb-8">
              {track.description}
            </p>

            {/* ícones de tecnologia — com tooltip */}
            <div className="relative z-10 flex items-center gap-5 mb-10">
              {track.techs.map((tech) => (
                <div key={tech.label} className="group/tech relative flex flex-col items-center">
                  <div className="w-7 h-7 relative opacity-40 group-hover:opacity-70 group-hover/tech:opacity-100 transition-opacity duration-300">
                    <Image
                      src={tech.src}
                      alt={tech.label}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* tooltip */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-surface border border-outline rounded text-[10px] font-medium text-textPrimary whitespace-nowrap opacity-0 group-hover/tech:opacity-100 transition-opacity duration-200 pointer-events-none">
                    {tech.label}
                    <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-outline" />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={track.href}
              className="relative z-10 mt-auto inline-flex items-center gap-2 text-sm font-semibold text-textSecondary group-hover:text-primary transition-colors duration-300"
            >
              Ver formação
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>

            {/* linha âmbar — cresce da esquerda no hover */}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tracks;
