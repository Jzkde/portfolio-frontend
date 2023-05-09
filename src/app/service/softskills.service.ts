import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Softskills } from '../partes/softskills';
import { Db } from './db/db';

@Injectable({
  providedIn: 'root'
})
export class SoftskillsService {
  private softskills: String = Db.apiURL + "softskills/"
  //private acercade = 'https://port-back-05k7.onrender.com/api/acercade/'
  
  constructor(private http: HttpClient) { }

  softskillslista(): Observable<Softskills[]> {
    return this.http.get<Softskills[]>(this.softskills + 'lista');
  }
  softskillsdetalle(id: number): Observable<Softskills> {
    return this.http.get<Softskills>(this.softskills + `detalle/${id}`);
  }

  softskillsnuevo(softskills: Softskills): Observable<any> {
    return this.http.post<any>(this.softskills + 'nuevo', softskills);
  }

  softskillsupdate(id: number, softskills: Softskills): Observable<any> {
    return this.http.put<any>(this.softskills + `editar/${id}`, softskills);
  }

  softskillsdelete(id: number,): Observable<any> {
    return this.http.delete<any>(this.softskills + `borrar/${id}`);
  }


}
