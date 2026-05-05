import type { Metadata } from "next";
import { useState } from "react";
import Card from "@/components/Card";
import { courseCards } from "@/data/cards";

export const metadata: Metadata = {
  title: "Cursos de Programação",
  description:
    "Explore nossos cursos de desenvolvimento web: React, Node.js, TypeScript, Next.js e mais. Aprenda com projetos reais e mentoria especializada.",
  keywords: [
    "cursos de programação",
    "curso React",
    "curso Node.js",
    "curso TypeScript",
    "curso Next.js",
    "desenvolvimento web",
  ],
  openGraph: {
    title: "Cursos de Programação | Fullstack Academy",
    description:
      "Explore nossos cursos de desenvolvimento web com projetos reais e mentoria especializada.",
  },
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Nossos Cursos
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Domine as tecnologias mais demandadas do mercado com cursos práticos e orientados a projetos
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {courseCards.map((card) => (
            <Card
              key={card.id}
              card={card}
              isActive={true}
              onButtonClick={() => console.log(`Clicked: ${card.title}`)}
            />
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-500/20 text-cyan-400 mb-4">
              <span className="text-xl">📚</span>
            </div>
            <h3 className="text-white font-bold mb-2">Conteúdo Prático</h3>
            <p className="text-slate-400 text-sm">
              Aprenda fazendo com projetos reais que você pode adicionar ao seu portfólio
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/20 text-blue-400 mb-4">
              <span className="text-xl">👨‍🏫</span>
            </div>
            <h3 className="text-white font-bold mb-2">Mentoria Especializada</h3>
            <p className="text-slate-400 text-sm">
              Receba suporte de especialistas da indústria durante toda sua jornada
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-500/20 text-yellow-400 mb-4">
              <span className="text-xl">🎓</span>
            </div>
            <h3 className="text-white font-bold mb-2">Certificado Reconhecido</h3>
            <p className="text-slate-400 text-sm">
              Obtenha um certificado que comprove suas competências no mercado
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const page = () => {
  return <div>Cursos aqui</div>;
};

export default page;
