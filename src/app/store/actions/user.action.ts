import {Action} from '@ngrx/store';
import {UserInterface} from '../../user/shared/interfaces/user.interface';
import {CreateUserInterface} from '../../user/shared/interfaces/create-user.interface';
import {LoginInterface} from '../../user/shared/interfaces/login.interface';
import {UserChangeInterface} from '../../user/shared/interfaces/user-change.interface';

export enum UserActions {
  GetUsers = '[User] GET_USERS',
  GetUsersSuccess = '[User] GET_USERS_SUCCESS',
  GetUser = '[User] GET_USER',
  GetUserSuccess = '[User] GET_USER_SUCCESS',
  CreateUser = '[User] CREATE_USER',
  Login = '[User] LOGIN',
  GetUserLogin = '[Users] GET_USER_LOGIN',
  GetUserLoginSuccess = '[Users] GET_USER_LOGIN_SUCCESS',
  ChangeUser = '[Users] CHANGE_USER',
  DeleteUser = '[Users] DELETE_USER',
  DeleteUserSuccess = '[Users] DELETE_USER_SUCCESS'
}

export class GetUsers implements Action {
  public readonly type = UserActions.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = UserActions.GetUsersSuccess;

  constructor(public payload: UserInterface[]) {}
}

export class GetUser implements Action {
  public readonly type = UserActions.GetUser;

  constructor(public payload: string) {}
}

export class GetUserSuccess implements Action {
  public readonly type = UserActions.GetUserSuccess;

  constructor(public  payload: UserInterface) {}
}

export class CreateUser implements Action {
  public readonly type = UserActions.CreateUser;

  constructor(public payload: CreateUserInterface) {}
}

export class Login implements Action {
  public readonly type = UserActions.Login;

  constructor(public payload: LoginInterface) {}
}

export class GetUserLogin implements Action {
  public readonly type = UserActions.GetUserLogin;

  constructor(public payload: string) {}
}

export class GetUserLoginSuccess implements Action {
  public readonly type = UserActions.GetUserLoginSuccess;

  constructor(public payload: string) {}
}

export class ChangeUser implements Action {
  public readonly type = UserActions.ChangeUser;

  constructor(public payload: UserChangeInterface) {
  }
}

export class DeleteUser implements Action {
  public readonly type = UserActions.DeleteUser;

  constructor(public payload: string) {}
}

export class DeleteUserSuccess implements Action {
  public readonly type = UserActions.DeleteUserSuccess;
}

// tslint:disable-next-line:max-line-length
export type TUserActions = GetUser | GetUsers | GetUsersSuccess | GetUserSuccess | CreateUser | Login | GetUserLogin | GetUserLoginSuccess | ChangeUser | DeleteUser | DeleteUserSuccess;
