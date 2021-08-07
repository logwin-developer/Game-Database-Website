import { Observable } from 'rxjs';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': '401d74c257msh0a1b35b12013120p10dab3jsnbc8d9e1c0f65',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
      },
    });
    return next.handle(req);
  }
}
