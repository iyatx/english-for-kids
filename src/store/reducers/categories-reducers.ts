import { Reducer } from 'redux';
import { ICategory } from '@interfaces/categories';
import { CategoriesTypes } from '@store/types/categories-types';
import { ILink } from '@interfaces/index';

interface IState {
  categories: ICategory[],
  currentCategory: ICategory | null;
  categoriesNavLinks: ILink[]
}

const initialState: IState = {
  categories: [],
  currentCategory: null,
  categoriesNavLinks: []
};

export const CategoriesReducer: Reducer<IState> = (state = initialState, action) => {
  switch (action.type) {
    case CategoriesTypes.GET_ALL_CATEGORIES:
      return { ...state, categories: action.payload };
    case CategoriesTypes.SET_CURRENT_CATEGORY:
      const data = state.categories.filter((category) => category.category === action.payload)[0];
      return { ...state, currentCategory: data };
    default:
      return state;
  }
};