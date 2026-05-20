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
      </Container>
    </section>
  );
};

export default Tracks;
