import { AppActionTypes, AppTypes } from '@store/types/app-types';

export const toggleSidebar = (): AppActionTypes => {
  return {
    type: AppTypes.TOGGLE_SIDEBAR,
  };
};

export const switchMode = (payload: 'TRAIN' | 'PLAY'): AppActionTypes => {
  return {
    type: AppTypes.CHANGE_MODE,
    payload,
  };
};
