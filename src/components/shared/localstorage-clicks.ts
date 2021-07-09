import { ICardLocalStorage } from '@interfaces/index';

export const setTrainModeClick = (word: string): void => {
  const getItem = localStorage.getItem(word);
  const obj = {
    word: word,
    trainClick: 1, // if clicks it is automaticly 1
    playClick: 0,
    error: 0,
  };

  if (getItem) {
    const { trainClick, playClick, error }: ICardLocalStorage =
      JSON.parse(getItem);
    obj.trainClick = trainClick + 1;
    obj.playClick = playClick;
    obj.error = error;
  }

  localStorage.setItem(word, JSON.stringify(obj));
};

export const setPlayModeClick = (word: string): void => {
  const getItem = localStorage.getItem(word);
  const obj = {
    word: word,
    trainClick: 0,
    playClick: 1, // if clicks it is automaticly 1
    error: 0,
  };

  if (getItem) {
    const { trainClick, playClick, error }: ICardLocalStorage =
      JSON.parse(getItem);
    obj.trainClick = trainClick;
    obj.playClick = playClick + 1;
    obj.error = error;
  }

  localStorage.setItem(word, JSON.stringify(obj));
};

export const setFailItem = (word: string): void => {
  const getItem = localStorage.getItem(word);
  const obj = {
    word: word,
    trainClick: 0,
    playClick: 0,
    error: 1, // if clicks it is automaticly 1
  };

  if (getItem) {
    const { trainClick, playClick, error }: ICardLocalStorage =
      JSON.parse(getItem);
    obj.trainClick = trainClick;
    obj.playClick = playClick;
    obj.error = error + 1;
  }

  localStorage.setItem(word, JSON.stringify(obj));
};
