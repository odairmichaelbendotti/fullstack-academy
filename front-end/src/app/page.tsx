"use client";

import { useState } from "react";
import Card from "@/components/Card";
import { courseCards } from "@/data/cards";

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? courseCards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === courseCards.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="w-full">
      <div className="h-105">
        <p>Odair</p>
      </div>

      {/* Card com navegação integrada */}
      <Card
        card={courseCards[activeIndex]}
        total={courseCards.length}
        currentIndex={activeIndex}
        onPrev={handlePrev}
        onNext={handleNext}
        onNavigate={setActiveIndex}
      />
    </main>
  );
};

export default Page;
