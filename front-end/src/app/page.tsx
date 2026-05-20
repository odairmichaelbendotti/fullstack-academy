"use client";

import { useState } from "react";
import Card from "@/features/home/Card";
import Hero from "@/features/home/Hero";
import AboutPlatform from "@/features/home/AboutPlatform";
import Tracks from "@/features/home/Tracks";
import SectionDivider from "@/components/ui/SectionDivider";
import SocialProof from "@/features/home/SocialProof";
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
      <Hero />
      <SectionDivider />
      <AboutPlatform />
      <Tracks />
      <SocialProof />

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
