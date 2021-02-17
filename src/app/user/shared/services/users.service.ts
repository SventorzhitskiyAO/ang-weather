import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, Subject, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {LoginInterface} from '../interfaces/login.interface';
import {UserChangeInterface} from '../interfaces/user-change.interface';
import {CreateUserInterface} from '../interfaces/create-user.interface';

@Injectable()
export class UsersService {
  url = 'http://localhost:3000';
  headers = new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('token')}`
  });
  public errors$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  private static setToken(response): void {
    if (response) {
      localStorage.setItem('token', response.token);
    } else {
      localStorage.clear();
    }
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.url}/users`)
      .pipe(
        map((response) => response)
      );
  }

  getOneUser(id: string): Observable<any> {
    return this.http.get(`${this.url}/users/${id}`, {
      headers: this.headers
    });
  }

  create(body: CreateUserInterface): Observable<any> {
    return this.http.post(this.url + '/users-page', body);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.url}/users/${id}`)
      .pipe(
        map(res => res)
      );
  }

  change(id: string, body: UserChangeInterface): Observable<any> {
    return this.http.put(`${this.url}/users/${id}`, body)
      .pipe(
        map(res => res)
      );
  }

  getBoolLogin(l: string): Observable<any> {
    return this.http.post(`${this.url}/users/userName`, {login: l});
  }

  login(body: LoginInterface): Observable<any> {
    return this.http.post(`${this.url}/users/login`, body)
      .pipe(
        tap(UsersService.setToken),
        catchError(this.handleError.bind(this))
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> { // отправить и обработать в HTML
    const {message} = error.error.error;

    switch (message) {
      case 'EMAIL_NOT_FOUND':
        this.errors$.next('Not found email');
        break;
      case 'INVALID_PASSWORD':
        this.errors$.next('Incorrect password');
        break;
      case 'INVALID_EMAIL':
        this.errors$.next('Incorrect email');
        break;
    }

    return throwError(error);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  logOut(): void {
    UsersService.setToken(null);
  }
}
