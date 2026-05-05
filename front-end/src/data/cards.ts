import { CardData } from "@/types/card";
import cardGoImage from "@/images/cards/card-go.png";

export const courseCards: CardData[] = [
  {
    id: 1,
    title: "Domine Go",
    subtitle:
      "Aprenda a linguagem de alta performance criada pelo Google. Ideal para sistemas distribuídos, microserviços e aplicações escaláveis.",
    buttonText: "Saiba mais",
    badge: "BACKEND",
    backgroundImage: cardGoImage.src,
  },
  {
    id: 2,
    title: "JavaScript Expert",
    subtitle:
      "Do básico ao avançado. Domine a linguagem mais popular do mundo e construa aplicações web modernas e interativas.",
    buttonText: "Saiba mais",
    badge: "FRONTEND",
    backgroundImage: cardGoImage.src,
  },
  {
    id: 3,
    title: "TypeScript Pro",
    subtitle:
      "TypeScript: JavaScript com superpoderes. Tipagem estática, IntelliSense superior e código mais seguro e escalável.",
    buttonText: "Saiba mais",
    badge: "FULL STACK",
    backgroundImage: cardGoImage.src,
  },
];
