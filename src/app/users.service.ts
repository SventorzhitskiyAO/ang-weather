import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class UsersService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

   headers = new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('token')}`
   });

  getUsers(): Observable<any> {
    return this.http.get(`${this.url}/users`)
      .pipe(
        map((response) => response)
      );
  }

  getOneUser(id: number): Observable<any> {
    return this.http.get(`${this.url}/users/${id}`, {
      headers: this.headers
    });
  }

  create(body): Observable<any> {
    return this.http.post(this.url + '/users', body);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${this.url}/users/${id}`)
      .pipe(
        map(res => res)
      );
  }

  change(id, body): Observable<any> {
    return this.http.put(`${this.url}/users/${id}`, body)
      .pipe(
        map(res => res)
      );
  }

  login(body): Observable<any> {
    return this.http.post(`${this.url}/users/login`, body);
  }
}
