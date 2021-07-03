import { CardsActionTypes, CardsTypes } from '@store/types/cards-types';

export const getCards = (): CardsActionTypes => {
  return {
    type: CardsTypes.GET_CARDS,
  };
};

export const setCurrentCategory = (payload: string): CardsActionTypes => {
  return {
    type: CardsTypes.SET_CURRENT_CATEGORY,
    payload: payload,
  };
};
