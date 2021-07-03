import { IStar } from '@interfaces/index';
import { Reducer } from 'redux';
import { GameTypes } from '@store/types/game-types';

interface IState {
  stars: IStar[];
  isGameStarted: boolean;
  mistakes: number;
  gameOver: boolean;
}

const initialState = {
  stars: [],
  mistakes: 0,
  isGameStarted: false,
  gameOver: false,
};

export const GameReducer: Reducer<IState> = (state = initialState, action) => {
  switch (action.type) {
    case GameTypes.ADD_STAR:
      return { ...state, stars: [...state.stars, action.payload] };
    case GameTypes.CLEAR_STARS:
      return { ...state, stars: [] };
    case GameTypes.TOGGLE_GAME_STARTED:
      return { ...state, isGameStarted: action.payload };
    case GameTypes.GET_MISTAKES:
      const mis = state.stars.filter((item) => item.isCorrect === false);
      return { ...state, mistakes: mis.length };
    case GameTypes.RESET_GAME:
      return initialState;
    default:
      return state;
  }
};
