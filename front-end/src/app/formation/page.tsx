import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formação Fullstack Completa",
  description:
    "Formação completa de desenvolvedor fullstack. Do zero ao primeiro emprego em 6 meses com garantia de renda. Mentoria 1:1 e projetos reais.",
  keywords: [
    "formação fullstack",
    "bootcamp fullstack",
    "curso completo programação",
    "carreira desenvolvedor",
    "mudar de área tech",
  ],
  openGraph: {
    title: "Formação Fullstack Completa | Fullstack Academy",
    description:
      "Formação completa de desenvolvedor fullstack. Do zero ao primeiro emprego em 6 meses com garantia de renda.",
  },
};

const page = () => {
  return <div>Formação</div>;
};

export default page;
