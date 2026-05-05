export interface CardData {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  badge: string;
  backgroundImage: string;
}

export interface CardProps {
  card: CardData;
  isActive?: boolean;
}
