import { ThunkAction } from 'redux-thunk';
import { AppState } from '@store/index';
import { CategoriesActionTypes, CategoriesTypes } from '@store/types/categories-types';
import { API } from '../../api';

export const setCategoriesData = (): ThunkAction<void, AppState, unknown, CategoriesActionTypes> => (dispatch) => {
  API
    .get('/category')
    .then((res) => {
      dispatch({
        type: CategoriesTypes.GET_ALL_CATEGORIES,
        payload: res.data,
      });
    })
};

export const setCurrentCategory = (categoryName: string): CategoriesActionTypes => {
  return {
    type: CategoriesTypes.SET_CURRENT_CATEGORY,
    payload: categoryName
  }
}
