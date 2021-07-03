import { combineReducers } from 'redux';
import { AppReducer } from '@store/reducers/app-reducers';
import { cardsReducer } from './reducers/cards-reducers';
import { GameReducer } from './reducers/game-reducer';

export const rootReducer = combineReducers({
  app: AppReducer,
  cards: cardsReducer,
  game: GameReducer,
});
