import { cards, categories } from '@assets/cards';
import { ICardLocalStorage, ICardStatistics } from '@interfaces/index';
import {
  StatisticsActionTypes,
  StatisticsTypes,
} from '@store/types/statistics-types';

const getProcent = (success: number, fails: number): number => {
  if (!fails) return 0;
  const res = (success / (success + fails)) * 100;
  if (isNaN(res)) return 0;
  return Math.floor(res);
};

export const getItems = (): StatisticsActionTypes => {
  let data: ICardStatistics[] = categories
    .map((item, index) => {
      return cards[index].map((card) => {
        const getFromLocal = localStorage.getItem(card.word);
        const obj = {
          category: item,
          word: card.word,
          translation: card.translation,
          audioSrc: card.audioSrc,
          image: card.image,
          playClick: 0,
          trainClick: 0,
          fails: 0,
          percent: 0,
        };

        if (getFromLocal) {
          const data: ICardLocalStorage = JSON.parse(getFromLocal);

          obj.playClick = data.playClick;
          obj.trainClick = data.trainClick;
          obj.fails = data.error;
          obj.percent = getProcent(data.playClick, data.error);
        }

        return obj;
      });
    })
    .flat();

  if (!data) data = [];

  return {
    type: StatisticsTypes.GET_ITEMS,
    payload: data,
  };
};
