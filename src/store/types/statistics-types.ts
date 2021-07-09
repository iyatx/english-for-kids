import { ICardStatistics } from '@interfaces/index';

export enum StatisticsTypes {
  GET_ITEMS = 'GET_ITEMS',
  UPDATE_ITEMS = 'UPDATE_ITEMS',
}

interface IGetItems {
  type: StatisticsTypes.GET_ITEMS;
  payload: ICardStatistics[];
}

interface IUpdateItems {
  type: StatisticsTypes.UPDATE_ITEMS;
}

export type StatisticsActionTypes = IGetItems | IUpdateItems;
