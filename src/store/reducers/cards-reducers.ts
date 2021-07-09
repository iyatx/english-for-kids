import { Reducer } from 'redux';
import { cards, categories } from './../../assets/cards';
import { ICard } from 'interfaces';
import { CardsTypes } from '@store/types/cards-types';

interface IState {
  currentCategory: string;
  readonly categories: string[];
  cards: ICard[];
}

const initialState: IState = {
  currentCategory: 'Categories',
  categories,
  cards: [],
};

export const cardsReducer: Reducer<IState> = (state = initialState, action) => {
  switch (action.type) {
    case CardsTypes.GET_CARDS:
      return state;
    case CardsTypes.SET_CURRENT_CATEGORY:
      const category = action.payload;
      const getCategoryIdx = state.categories.findIndex(
        (item) => item === category,
      );

      return {
        ...state,
        cards: cards[getCategoryIdx],
        currentCategory: action.payload,
      };
    default:
      return state;
  }
};
