export enum AppTypes {
  TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR',
  CHANGE_MODE = 'CHANGE_MODE',
}

interface IToggleSidebar {
  type: AppTypes.TOGGLE_SIDEBAR;
}

interface ISwitchMode {
  type: AppTypes.CHANGE_MODE;
  payload: 'TRAIN' | 'PLAY';
}

export type AppActionTypes = IToggleSidebar | ISwitchMode;
