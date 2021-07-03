import { Reducer } from 'redux';
import { AppTypes } from '@store/types/app-types';

interface IState {
  sidebarVisibility: boolean;
  mode: string;
}

const initialState: IState = {
  sidebarVisibility: false,
  mode: 'TRAIN',
};

export const AppReducer: Reducer<IState> = (state = initialState, action) => {
  switch (action.type) {
    case AppTypes.TOGGLE_SIDEBAR:
      return { ...state, sidebarVisibility: !state.sidebarVisibility };
    case AppTypes.CHANGE_MODE:
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};
