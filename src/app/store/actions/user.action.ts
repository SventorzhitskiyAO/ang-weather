import {Action} from '@ngrx/store';
import {UserInterface} from '../../user/shared/interfaces/user.interface';
import {CreateUserInterface} from '../../user/shared/interfaces/create-user.interface';
import {LoginInterface} from '../../user/shared/interfaces/login.interface';

export enum UserActions {
  GetUsers = '[User] GET_USERS',
  GetUsersSuccess = '[User] GET_USERS_SUCCESS',
  GetUser = '[User] GET_USER',
  GetUserSuccess = '[User] GET_USER_SUCCESS',
  CreateUser = '[User] CREATE_USER',
  Login = '[User] LOGIN'
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

export type TUserActions = GetUser | GetUsers | GetUsersSuccess | GetUserSuccess | CreateUser | Login;





