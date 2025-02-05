declare type NavLinks = {
  name: string;
  path: string;
  Icon: React.ElementType;
};

declare type Features = {
  Icon: React.ElementType;
  title: string;
  description: string;
};

declare type AboutOption = {
  num: number;
  numMod?: string;
  text: string;
  color: string;
};

declare type FAQItemProps = {
  question: string;
  answer: string;
  Icon: React.ElementType;
  isOpen: boolean;
  onClick: () => void;
};

declare type FAQ = {
  Icon: React.ElementType;
  question: string;
  answer: string;
};

declare type Services = {
  word: string;
  description: string;
  num: number;
  Icon: React.ElementType;
};

declare type Partners = string;

declare type Countup = {
  end: number;
  duration: number;
  text: string;
  symbol: string;
};

declare type Leadership = {
  name: string;
  title: string;
  bio: string;
  pos?: string;
  image: string;
  message?: string;
}

declare type Course = {
  name: string;
  img: string;
};

declare type Educational = {
  title: string;
  amount: number;
  image: string;
  courses: Course[];
};