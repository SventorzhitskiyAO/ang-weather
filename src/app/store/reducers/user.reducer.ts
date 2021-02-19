import {initialUserState, UserState} from '../state/user.state';
import {CreateUser, TUserActions, UserActions} from '../actions/user.action';

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
    default:
      return state;
  }
};
