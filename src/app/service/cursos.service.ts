import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cursos } from '../partes/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos = 'http://localhost:8080/api/cursos/'

  constructor(private http: HttpClient) { }

  cursoslista(): Observable<Cursos[]> {
    return this.http.get<Cursos[]>(this.cursos + 'lista');
  }

  cursosdedetalle(id: number): Observable<Cursos> {
    return this.http.get<Cursos>(this.cursos + `detalle/${id}`);
  }

  cursosnuevo(cursos: Cursos): Observable<any> {
    return this.http.post<any>(this.cursos + 'nuevo', cursos);
  }

  cursosupdate(id: number, cursos: Cursos): Observable<any> {
    return this.http.put<any>(this.cursos + `editar/${id}`, cursos);
  }

  cursosdelete(id: number,): Observable<any> {
    return this.http.delete<any>(this.cursos + `borrar/${id}`);
  }


}
