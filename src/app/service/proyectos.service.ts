import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../partes/proyectos';
import { Db } from './db/db';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private proyectos: String = Db.apiURL + "proyectos/"
  //private acercade = 'https://port-back-05k7.onrender.com/api/acercade/'
  
  constructor(private http: HttpClient) { }

  proyectoslista(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(this.proyectos + 'lista');
  }

  proyectosdetalle(id: number): Observable<Proyectos> {
    return this.http.get<Proyectos>(this.proyectos + `detalle/${id}`);
  }

  proyectosnuevo(proyectos: Proyectos): Observable<any> {
    return this.http.post<any>(this.proyectos + 'nuevo', proyectos);
  }

  proyectosupdate(id: number, proyectos: Proyectos): Observable<any> {
    return this.http.put<any>(this.proyectos + `editar/${id}`, proyectos);
  }

  proyectosdelete(id: number,): Observable<any> {
    return this.http.delete<any>(this.proyectos + `borrar/${id}`);
  }

}
