import {ConfigState, initialConfigState} from '../state/config.state';
import {ConfigActions, TConfigActions} from '../actions/config.action';

export const configReducer = (state = initialConfigState, action: TConfigActions): ConfigState => {
  switch (action.type) {
    case ConfigActions.GetConfigSuccess:
      return {
        ...state,
        config: action.payload
      };
    default:
      return state;
  }
};
