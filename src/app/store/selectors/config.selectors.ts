import {AppState} from '../state/app.state';
import {createSelector} from '@ngrx/store';
import {ConfigState} from '../state/config.state';

const configState = (state: AppState) => state.config;

export const selectConfig = createSelector(
  configState,
  (state: ConfigState) => state.config
);
