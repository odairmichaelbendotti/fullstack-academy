import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autenticação",
  description: "Faça login ou crie uma conta na Fullstack Academy",
};

export default function SignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
