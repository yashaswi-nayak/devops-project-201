import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpSvc: HttpClient) { }

  initConnection(): Observable<any> {
    const url = 'http://35.226.79.144:51008/apis/init-connection';
    return this.httpSvc.get(url);
  }

  getQuote(id): Observable<any> {
    const url = 'http://35.226.79.144:51008/apis/quote/' + id;
    return this.httpSvc.get(url);
  }
}
