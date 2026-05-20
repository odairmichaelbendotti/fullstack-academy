"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine, RiBookOpenLine, RiVideoLine, RiCodeSSlashLine, RiGroupLine, RiArrowDownSLine } from "react-icons/ri";
import Container from "@/components/ui/Container";

type AccordionItem = {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  techs?: { label: string; color: string }[] | null;
  cta?: { text: string; href: string } | null;
  image: { src: string; alt: string } | null;
};

const items: AccordionItem[] = [
  {
    id: "formacao",
    icon: <RiBookOpenLine size={18} />,
    title: "Formação",
    description:
      "Domine a stack mais poderosa do mercado — do iniciante ao avançado. Back-end, Front-end e DevOps em uma trilha estruturada e com projetos reais.",
    techs: [
      { label: "JS",    color: "bg-yellow-400 text-black" },
      { label: "TS",    color: "bg-blue-500 text-white" },
      { label: "React", color: "bg-cyan-500 text-black" },
      { label: "Node",  color: "bg-green-500 text-black" },
    ],
    cta: { text: "Ver formação", href: "/formation" },
    image: { src: "/previews/formacao.png", alt: "Preview da formação fullstack" },
  },
  {
    id: "cursos",
    icon: <RiVideoLine size={18} />,
    title: "Cursos individuais",
    description:
      "Prefere aprender no seu ritmo? Escolha os cursos que fazem sentido para onde você está agora e avance no que importa.",
    techs: null,
    cta: { text: "Ver cursos", href: "/courses" },
    image: { src: "/previews/cursos.png", alt: "Preview dos cursos" },
  },
  {
    id: "projetos",
    icon: <RiCodeSSlashLine size={18} />,
    title: "Projetos práticos",
    description:
      "Portfólio real que você pode mostrar em entrevistas. Cada projeto é construído do zero com as mesmas ferramentas que o mercado usa.",
    techs: null,
    cta: null,
    image: { src: "/previews/projetos.png", alt: "Preview dos projetos" },
  },
  {
    id: "comunidade",
    icon: <RiGroupLine size={18} />,
    title: "Comunidade",
    description:
      "Não aprenda sozinho. Tire dúvidas, compartilhe progresso e faça networking com outros devs na mesma jornada que você.",
    techs: null,
    cta: null,
    image: { src: "/previews/comunidade.png", alt: "Preview da comunidade" },
  },
];

function AccordionRow({ item, isActive, onToggle }: {
  item: AccordionItem;
  isActive: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isActive ? contentRef.current.scrollHeight : 0);
    }
  }, [isActive]);

  return (
    <div className={`border-b border-outline transition-colors duration-300 ${isActive ? "bg-surface/40" : ""}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-6 md:px-10 py-5 text-left group cursor-pointer"
      >
        {/* linha âmbar esquerda — ativa */}
        <span className={`absolute left-0 top-0 h-full w-0.5 transition-all duration-300 ${isActive ? "bg-primary" : "bg-transparent"}`} />

        {/* ícone */}
        <span className={`shrink-0 transition-colors duration-200 ${isActive ? "text-primary" : "text-textSecondary group-hover:text-textPrimary"}`}>
          {item.icon}
        </span>

        {/* título */}
        <span className={`flex-1 text-base font-semibold transition-colors duration-200 ${isActive ? "text-textPrimary" : "text-textSecondary group-hover:text-textPrimary"}`}>
          {item.title}
        </span>

        {/* chevron */}
        <RiArrowDownSLine
          size={16}
          className={`shrink-0 text-textSecondary transition-transform duration-300 ${isActive ? "rotate-180 text-primary" : "group-hover:text-textPrimary"}`}
        />
      </button>

      {/* conteúdo animado com height transition */}
      <div
        style={{ height, overflow: "hidden", transition: "height 0.35s cubic-bezier(0.4,0,0.2,1)" }}
      >
        <div ref={contentRef} className="px-6 md:px-10 pb-6">
          <p className="text-sm text-textSecondary leading-relaxed">
            {item.description}
          </p>

          {item.techs && (
            <div className="flex items-center gap-2 mt-4 flex-wrap">
              {item.techs.map((tech) => (
                <span key={tech.label} className={`text-[11px] font-bold px-2.5 py-1 rounded ${tech.color}`}>
                  {tech.label}
                </span>
              ))}
            </div>
          )}

          {item.cta && (
            <Link
              href={item.cta.href}
              className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary hover:text-secondary transition-colors duration-200 group/cta"
            >
              {item.cta.text}
              <RiArrowRightLine size={14} className="group-hover/cta:translate-x-1 transition-transform duration-200" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

const AboutPlatform = () => {
  const [active, setActive] = useState("formacao");
  const current = items.find((i) => i.id === active)!;

  return (
    <section className="relative w-full border-t border-outline">
      <Container className="flex flex-col md:flex-row px-0!">

        {/* ── COLUNA ESQUERDA — acordeão ── */}
        <div className="flex-1 flex flex-col">
          {/* cabeçalho */}
          <div className="px-6 md:px-10 pt-10 pb-8 border-b border-outline">
            <span className="inline-flex items-center px-3 py-1 mb-4 rounded-full border border-primary text-primary text-[11px] font-bold tracking-widest uppercase" style={{ background: "rgba(245,158,11,0.12)" }}>
              O que é a Fullstack Academy?
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary leading-snug">
              A plataforma mais completa<br className="hidden md:block" /> de ensino para devs.
            </h2>
          </div>

          {/* acordeão */}
          <div className="relative flex flex-col">
            {items.map((item) => (
              <AccordionRow
                key={item.id}
                item={item}
                isActive={active === item.id}
                onToggle={() => setActive(item.id)}
              />
            ))}
          </div>
        </div>

        {/* ── COLUNA DIREITA — preview ── */}
        {/*
          DIMENSÕES PARA AS IMAGENS:
          Desktop: 560 × 100% da altura da seção (proporção livre, recomendado 16:10)
          Tamanho ideal: 640 × 480px — salve em /public/previews/
          Arquivos:
            /public/previews/formacao.png
            /public/previews/cursos.png
            /public/previews/projetos.png
            /public/previews/comunidade.png
        */}
        <div className="hidden md:flex md:w-96 lg:w-130 shrink-0 border-l border-outline bg-surface/20 items-center justify-center p-8 lg:p-12">
          <div
            key={active}
            className="w-full relative rounded-lg overflow-hidden border border-outline animate-in fade-in zoom-in-95 duration-300 shadow-2xl shadow-black/40"
            style={{ aspectRatio: "4/3" }}
          >
            {current.image ? (
              <Image src={current.image.src} alt={current.image.alt} fill className="object-cover" />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface">
                <span className="text-textSecondary/20">{current.icon}</span>
                <p className="text-xs text-textSecondary/30 font-mono">640 × 480px</p>
              </div>
            )}
          </div>
        </div>

      </Container>
    </section>
  );
};

export default AboutPlatform;
