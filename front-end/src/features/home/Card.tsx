"use client";

import Image from "next/image";
import { CardData } from "@/types/card";
import { RiArrowRightLine, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import CornerElement from "@/components/layout/FrameContainer/CornerElement";
import NavControls from "@/components/ui/NavControls";

type CardProps = {
  card: CardData;
  total: number;
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onNavigate: (index: number) => void;
};

const Card = ({
  card,
  total,
  currentIndex,
  onPrev,
  onNext,
  onNavigate,
}: CardProps) => {
  return (
    <div className="relative w-full h-68.75 overflow-hidden rounded-2xl">
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <Image
          src={card.backgroundImage || "/logo.png"}
          alt={card.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 border border-outline pointer-events-none" />
      {/* Seta Esquerda */}
      <button
        onClick={onPrev}
        className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-black/50 backdrop-blur-md border border-outline text-white hover:bg-primary/30 hover:border-primary hover:scale-110 transition-all duration-300"
        aria-label="Anterior"
      >
        <RiArrowLeftSLine className="w-6 h-6" />
      </button>
      {/* Seta Direita */}
      <button
        onClick={onNext}
        className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-black/50 backdrop-blur-md border border-outline text-white hover:bg-primary/30 hover:border-primary hover:scale-110 transition-all duration-300"
        aria-label="Próximo"
      >
        <RiArrowRightSLine className="w-6 h-6" />
      </button>
      {/* NavControls - Centro horizontal, fundo do card */}
      <div className="absolute left-1/2 bottom-6 -translate-x-1/2 z-20">
        <NavControls
          total={total}
          current={currentIndex}
          onChange={onNavigate}
          variant="light"
        />
      </div>
      {/* Conteúdo */}
      <div className="relative z-10 h-full flex flex-col justify-between px-16 md:px-20 py-6 md:py-8">
        {/* Topo: Badge + Título + Descrição */}
        <div className="max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase bg-primary/20 text-primary border border-primary/30">
            {card.badge}
          </div>

          {/* Título */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
            {card.title}
          </h2>

          {/* Descrição */}
          <p className="text-sm md:text-base text-textSecondary line-clamp-2">
            {card.subtitle}
          </p>
        </div>

        {/* Base: Botão CTA */}
        <div className="flex items-end">
          <button className="group inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border border-outline text-textPrimary text-sm font-medium hover:bg-surface hover:border-primary transition-all duration-300">
            <span>{card.buttonText || "Saiba mais"}</span>
            <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
