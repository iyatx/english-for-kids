import { StatisticsTypes } from '@store/types/statistics-types';
import { Reducer } from 'redux';
import { ICardStatistics } from './../../interfaces/index';

interface IState {
  items: ICardStatistics[];
}

const initialState: IState = {
  items: [],
};

export const StatisticsReducer: Reducer<IState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case StatisticsTypes.GET_ITEMS:
      return { ...state, items: action.payload };
    case StatisticsTypes.UPDATE_ITEMS:
      return state;
    default:
      return state;
  }
};
