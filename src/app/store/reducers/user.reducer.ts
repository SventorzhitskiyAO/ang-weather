import {initialUserState, UserState} from '../state/user.state';
import {TUserActions, UserActions} from '../actions/user.action';

export const userReducer = (state = initialUserState, action: TUserActions): UserState => {
  switch (action.type) {
    case UserActions.GetUsers:
      return {
        ...state,
        users: []
      };
    case UserActions.GetUsersSuccess:
      return {
        ...state,
        users: action.payload
      };
    case UserActions.GetUserSuccess:
      return {
        ...state,
        selectedUser: action.payload
      };
    case UserActions.DeleteUserSuccess:
      return {
        ...state,
        selectedUser: null
      };
    case UserActions.GetUserLoginSuccess:
      return {
        ...state,
        me: action.payload
      };
    default:
      return state;
  }
};
