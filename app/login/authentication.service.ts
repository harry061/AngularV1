import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthenticationService {

  constructor(public http: Http) { }

  public isLoggedInUser(username: String, pass: string): Observable<boolean> {

    return this.http.get('./assets/login.json').map((res: Response) => { return res.json().username === username && res.json().password === pass; }).catch((error: any) => { return Observable.throw(error.statusText) });


  }
}
