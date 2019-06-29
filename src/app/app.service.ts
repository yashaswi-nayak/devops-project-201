import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpSvc: HttpClient) { }

  initConnection(): Observable<any> {
    const url = 'http://localhost/apis/init-connection';
    return this.httpSvc.get(url);
  }

  getQuote(id): Observable<any> {
    const url = 'http://localhost/apis/quote/' + id;
    return this.httpSvc.get(url);
  }
}
