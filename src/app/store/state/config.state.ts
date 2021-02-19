import {ConfigUserInterface} from '../../user/shared/interfaces/configUser.interface';

export interface ConfigState {
  config: ConfigUserInterface;
}

export const initialConfigState: ConfigState = {
  config: null
};
