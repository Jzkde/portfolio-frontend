import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Acercade } from '../partes/acercade';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  private acercade = 'http://localhost:8080/api/acercade/'

  constructor(private http: HttpClient) { }

  acercadelista(): Observable<Acercade[]> {
    return this.http.get<Acercade[]>(this.acercade + 'lista');
  }

  acercadedetalle(id: number): Observable<Acercade> {
    return this.http.get<Acercade>(this.acercade + `detalle/${id}`);
  }

  acercadeupdate(id: number, acercade: Acercade): Observable<any> {
    return this.http.put<any>(this.acercade + `editar/${id}`, acercade);
  }

}
