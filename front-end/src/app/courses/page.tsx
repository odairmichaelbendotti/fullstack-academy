import type { Metadata } from "next";

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

const CoursesPage = () => {
  return <div>Cursos aqui</div>;
};

export default CoursesPage;
