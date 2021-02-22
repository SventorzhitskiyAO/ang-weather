import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UsersService} from '../../user/shared/services/users.service';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(
    private service: UsersService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean  {
    if (this.service.isAuthenticated()){
      return true;
    } else {
      UsersService.logOut();
      this.router.navigate(['/users', 'login'], {
        queryParams: {
          loginAgain: true
        }
      });
    }
  }

}
