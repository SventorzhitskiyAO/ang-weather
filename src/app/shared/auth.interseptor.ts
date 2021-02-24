import {Injectable} from '@angular/core';
import {UsersService} from '../user/shared/services/users.service';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    if (UsersService.isAuthenticated()) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${UsersService.token}`
        }
      });
    }
    return next.handle(req);
  }
}
