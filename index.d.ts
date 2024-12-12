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
