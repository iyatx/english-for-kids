import { ICategory } from '@interfaces/categories';

export enum CategoriesTypes {
  GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES',
  SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY',
}

interface IGetAllCategories {
  type: CategoriesTypes.GET_ALL_CATEGORIES,
  payload: ICategory[]
}

interface ISerCurrentCategory {
  type: CategoriesTypes.SET_CURRENT_CATEGORY,
  payload: string
}

export type CategoriesActionTypes =
  | IGetAllCategories
  | ISerCurrentCategory;