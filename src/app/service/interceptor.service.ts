import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';



@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{


  constructor(private loginService: LoginService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    throw new Error('Method not implemented.');
  }

// InterceptorService(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
  // var currentUser = this.loginService.usuarioAutenticado; 
  // if (currentUser && currentUser.accessToken){
  // req=req.clone({
  //   setHeaders: {
  //     Authorization: `Bearer ${currentUser.accessToken}`
  //   }
  // })
  // }
  // console.log("interceptor service" + JSON.stringify(currentUser));
  
  
  
  // return next.handle(req);

  }
// }
