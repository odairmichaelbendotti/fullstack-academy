"use client";

import { usePathname } from "next/navigation";
import FrameContainer from "@/components/layout/FrameContainer/FrameContainer";

interface ConditionalFrameProps {
  children: React.ReactNode;
}

export default function ConditionalFrame({ children }: ConditionalFrameProps) {
  const pathname = usePathname();
  const isSignRoute = pathname?.startsWith("/sign");

  if (isSignRoute) {
    return <>{children}</>;
  }

  return <FrameContainer>{children}</FrameContainer>;
}
