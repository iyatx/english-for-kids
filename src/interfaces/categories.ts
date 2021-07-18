export interface IWord {
  _id: string;
  categoryId: string,
  word: string,
  translation: string,
  audioSrc: string,
  image: string,
}

export interface ICategory {
  _id: string;
  category: string;
  totalCount: number;
  words: IWord[];
}

export interface IUpdateCategory {
  _id: string;
  category: string;
}