export enum CardsTypes {
  GET_CARDS = 'GET_CARDS',
  SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY',
}

interface ISetCurrentCategory {
  type: CardsTypes.SET_CURRENT_CATEGORY;
  payload: string;
}

interface IGetCards {
  type: CardsTypes.GET_CARDS;
}

export type CardsActionTypes = ISetCurrentCategory | IGetCards;
