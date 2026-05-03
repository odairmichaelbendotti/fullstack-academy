"use client";

import { usePathname } from "next/navigation";
import FrameContainer from "./FrameContainer/FrameContainer";
import CornerElement from "./FrameContainer/CornerElement";

interface ConditionalFrameProps {
  children: React.ReactNode;
}

export default function ConditionalFrame({ children }: ConditionalFrameProps) {
  const pathname = usePathname();
  const isSignRoute = pathname?.startsWith("/sign");

  if (isSignRoute) {
    return <>{children}</>;
  }

  return (
    <FrameContainer>
      <CornerElement position="bottom-left" />
      <CornerElement position="bottom-right" />
      {children}
    </FrameContainer>
  );
}
