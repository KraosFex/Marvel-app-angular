import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  PUBLIC_KEY = '923450f9268ca72cc914a215b806b465';
  HASH = '473a7cc76737973e6aadbab9fc66eb1c';

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<any> {
    return this.http
      .get<any>(
        `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`
      )
      .pipe(map((data: any) => data.data.results));
  }

  getCharacter(id: string): Observable<any> {
    return this.http
      .get<any>(
        `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`
      )
      .pipe(map((data: any) => data.data.results));
  }

  
}
