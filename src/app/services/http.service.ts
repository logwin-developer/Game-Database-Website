import { Params } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { env } from 'process';
import { environment as env } from '../../environments/environment';
import { forkJoin, Observable } from 'rxjs';
import { APIResponse, Game, specificGame } from '../models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getGameList(
    ordering?: string,
    search?: string
  ): Observable<APIResponse<Game>> {
    let params = new HttpParams();

    if (ordering) {
      params = new HttpParams().set('sort-by', ordering);
    }

    if (search && ordering) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}`, {
      params: params,
    });
  }

  getGame(id: string): Observable<specificGame> {
    const gameInfoRequest = this.http.get<specificGame>(
      `${env.BASE_URL1}?id=${id}`
    );
    return gameInfoRequest;
  }
}
