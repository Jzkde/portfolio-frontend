import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, ɵɵresolveBody } from '@angular/core';
import { map } from 'rxjs/operators';
import { Credentials } from '../partes/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private login = 'http://localhost:8080/login/'


  constructor(private http: HttpClient) { }


  logear(creds: Credentials) {
    return this.http.post(this.login, creds, { observe: 'response' }).pipe(map((response: HttpResponse<any>) => {
      const body = response.body;
      const headers = response.headers;
      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace("Bearer ", "");
      localStorage.setItem('token', token);
      return body;

    }))

  };
public salir():void {
localStorage.removeItem('token');
}

  public getToken() {
    return localStorage.getItem('token');
  }

  public inicio(): boolean {
    return this.getToken() != null;
  }
  

}
