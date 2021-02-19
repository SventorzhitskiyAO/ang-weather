import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import {UsersService} from '../../user/shared/services/users.service';
import {CreateUser, GetUser, GetUsers, GetUsersSuccess, GetUserSuccess, Login, UserActions} from '../actions/user.action';
import {UserInterface} from '../../user/shared/interfaces/user.interface';
import {ConfigUserInterface} from '../../user/shared/interfaces/configUser.interface';

@Injectable()
export class UserEffects {
  constructor(
    private userServices: UsersService,
    private actions$: Actions,
  ) {}

  getUser$ = createEffect( () => {
    return this.actions$.pipe(
      ofType<GetUser>(UserActions.GetUser),
      switchMap((action) => this.userServices.getOneUser(action.payload)),
      map((user: UserInterface) => new GetUserSuccess(user))
    );
  });

  getUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<GetUsers>(UserActions.GetUsers),
      switchMap(() => this.userServices.getUsers()),
      map((users: UserInterface[]) => new GetUsersSuccess(users))
    );
  });

  createUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.CreateUser),
      switchMap((action: CreateUser) => this.userServices.create(action.payload)),
      map((user: UserInterface) => new GetUserSuccess(user)),
    );
  });

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.Login),
      switchMap((action: Login) => this.userServices.login(action.payload)),
      map((obj) => new GetUserSuccess(obj.user))
    );
  });
}
