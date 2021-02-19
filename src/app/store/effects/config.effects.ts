import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UsersService} from '../../user/shared/services/users.service';
import {ConfigActions, GetConfig, GetConfigSuccess} from '../actions/config.action';
import {switchMap} from 'rxjs/operators';
import {ConfigUserInterface} from '../../user/shared/interfaces/configUser.interface';
import {of} from 'rxjs';

@Injectable()
export class ConfigEffects {
  constructor(
    private actions$: Actions,
    private configService: UsersService
  ) {}

  getConfig$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<GetConfig>(ConfigActions.GetConfig),
      switchMap(() => this.configService.token),
      // @ts-ignore
      switchMap((config: ConfigUserInterface) => {
        return of(new GetConfigSuccess(config));
      })
    );
  });
}
