import {Action} from '@ngrx/store';
import {ConfigUserInterface} from '../../user/shared/interfaces/configUser.interface';

export enum ConfigActions {
  GetConfig = '[Config] GET_CONFIG',
  GetConfigSuccess = '[Config] GET_CONFIG_SUCCESS'
}

export class GetConfig implements Action {
  public readonly type = ConfigActions.GetConfig;
}

export class GetConfigSuccess implements Action {
  public readonly type = ConfigActions.GetConfigSuccess;

  constructor(public payload: ConfigUserInterface) {
  }
}

export type TConfigActions = GetConfig | GetConfigSuccess;
