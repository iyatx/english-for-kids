import { ICardLocalStorage, ICardStatistics } from '@interfaces/index';
import {
  StatisticsActionTypes,
  StatisticsTypes,
} from '@store/types/statistics-types';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '@store/index';

const getProcent = (success: number, fails: number): number => {
  if (!fails) return 0;
  const res = (success / (success + fails)) * 100;
  if (isNaN(res)) return 0;
  return Math.floor(res);
};

export const getItems = (): ThunkAction<void, AppState, unknown, StatisticsActionTypes> => (dispatch, getState) => {
  let data: ICardStatistics[] = getState().categories.categories
    .map((category) => {
      return category.words.map((card) => {
        const getFromLocal = localStorage.getItem(card.word);
        const obj = {
          category: category.category,
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

  dispatch({
    type: StatisticsTypes.GET_ITEMS,
    payload: data,
  })
};
