import { IStar } from '@interfaces/index';

export enum GameTypes {
  ADD_STAR = 'ADD_STAR',
  CLEAR_STARS = 'CLEAR_STARS',
  TOGGLE_GAME_STARTED = 'TOGGLE_GAME_STARTED',
  GET_MISTAKES = 'GET_MISTAKES',
  RESET_GAME = 'RESET_GAME',
}

interface IAddStar {
  type: GameTypes.ADD_STAR;
  payload: IStar;
}

interface IClearStars {
  type: GameTypes.CLEAR_STARS;
}

interface IGetMistakes {
  type: GameTypes.GET_MISTAKES;
}

interface IToggleGameStarted {
  type: GameTypes.TOGGLE_GAME_STARTED;
  payload: boolean;
}

interface IResetGame {
  type: GameTypes.RESET_GAME;
}

export type GameActionTypes =
  | IAddStar
  | IClearStars
  | IGetMistakes
  | IResetGame
  | IToggleGameStarted;
