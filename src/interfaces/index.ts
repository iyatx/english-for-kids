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

export interface ICardLocalStorage {
  word: string;
  trainClick: number;
  playClick: number;
  error: number;
}

export interface ICardStatistics {
  category: string;
  word: string;
  translation: string;
  audioSrc: string;
  image: string;
  playClick: number;
  trainClick: number;
  fails: number;
  percent: number;
}
