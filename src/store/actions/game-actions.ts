import { IStar } from '@interfaces/index';
import { GameActionTypes, GameTypes } from '@store/types/game-types';

export const addStar = (payload: IStar): GameActionTypes => {
  return {
    type: GameTypes.ADD_STAR,
    payload,
  };
};

export const clearStars = (): GameActionTypes => {
  return {
    type: GameTypes.CLEAR_STARS,
  };
};

export const toggleGameStarted = (payload: boolean): GameActionTypes => {
  return {
    type: GameTypes.TOGGLE_GAME_STARTED,
    payload,
  };
};

export const getMistakes = (): GameActionTypes => {
  return {
    type: GameTypes.GET_MISTAKES,
  };
};

export const resetGame = (): GameActionTypes => {
  return {
    type: GameTypes.RESET_GAME,
  };
};
