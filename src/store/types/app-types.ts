export enum AppTypes {
  TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR',
  CHANGE_MODE = 'CHANGE_MODE',
  SET_TOKEN = 'SET_TOKEN'
}

interface IToggleSidebar {
  type: AppTypes.TOGGLE_SIDEBAR;
}

interface ISwitchMode {
  type: AppTypes.CHANGE_MODE;
  payload: 'TRAIN' | 'PLAY';
}

interface ISetToken {
  type: AppTypes.SET_TOKEN;
  payload: string;
}

export type AppActionTypes = IToggleSidebar | ISwitchMode | ISetToken;
