import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../partes/experiencia';
import { Db } from './db/db';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private experiencia: String = Db.apiURL + "experiencia/"
  //private acercade = 'https://port-back-05k7.onrender.com/api/acercade/'
  
  constructor(private http: HttpClient) { }

  experiencialista(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.experiencia + 'lista');
  }

  explabdetalle(id: number): Observable<Experiencia> {
    return this.http.get<Experiencia>(this.experiencia + `detalle/${id}`);
  }

  explabnuevo(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(this.experiencia + 'nuevo', experiencia);
  }
 
  // explabupdate(experiencia: Experiencia): Observable<any> {
  //   return this.http.put<any>(this.experiencia + 'editar/' + experiencia.id, experiencia);
  // }

  explabupdate(id: number, experiencia: Experiencia): Observable<Experiencia> {
    return this.http.put<Experiencia>(this.experiencia + `editar/${id}`, experiencia);
  }

  explabdelete(id: number,): Observable<Experiencia> {
    return this.http.delete<Experiencia>(this.experiencia + `borrar/${id}`);
  }
}
