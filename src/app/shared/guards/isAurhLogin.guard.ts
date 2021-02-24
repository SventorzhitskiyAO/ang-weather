import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UsersService} from '../../user/shared/services/users.service';
import {filter, map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/state/app.state';
import {IsAuth} from '../../store/actions/user.action';
import {authMe} from '../../store/selectors/user.selectors';

@Injectable()
export class IsAuthGuard implements CanActivate{
  constructor(
    private router: Router,
    private service: UsersService,
    private store: Store<AppState>
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean  {
    if (UsersService.isAuthenticated()){

      this.store.dispatch(new IsAuth());

      this.store.select(authMe).pipe(
        filter(value => !!value),
        map(res => this.router.navigate(['/users', res._id]))
      ).subscribe(); // todo отписаться
    } else {
      return true;
    }
  }
}
