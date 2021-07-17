import { combineReducers } from 'redux';
import { AppReducer } from '@store/reducers/app-reducers';
import { GameReducer } from './reducers/game-reducer';
import { StatisticsReducer } from './reducers/statistics-reducers';
import { CategoriesReducer } from '@store/reducers/categories-reducers';

export const rootReducer = combineReducers({
  app: AppReducer,
  game: GameReducer,
  statistics: StatisticsReducer,
  categories: CategoriesReducer
});
