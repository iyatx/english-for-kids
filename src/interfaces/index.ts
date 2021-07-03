export interface ICard {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
}

export interface ICategories {
  title: string;
  active: boolean;
  imgIndex: number;
}

export interface ILink {
  title: string;
  active: boolean;
  to: string;
}

export interface IStar {
  isCorrect: boolean;
}
