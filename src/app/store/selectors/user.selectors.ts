import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UserState} from '../state/user.state';

export const users = createFeatureSelector<UserState>('users');

export const selectUserList = createSelector(
  users,
  state => state.users
);

export const selectSelectedUser = createSelector(
  users,
  state => state.selectedUser
);

export const selectLoginName = createSelector(
  users,
  state => state.userLoginName
);

