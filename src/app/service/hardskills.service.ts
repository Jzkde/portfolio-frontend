import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hardskills } from '../partes/hardskills';
import { Db } from './db/db';

@Injectable({
  providedIn: 'root'
})
export class HardskillsService {
  private hardskills: String = Db.apiURL + "hardskills/"
  //private acercade = 'https://port-back-05k7.onrender.com/api/acercade/'
  
  constructor(private http: HttpClient) { }

  hardskillslista(): Observable<Hardskills[]> {
    return this.http.get<Hardskills[]>(this.hardskills + 'lista');
  }

  hardskillsdetalle(id: number): Observable<Hardskills> {
    return this.http.get<Hardskills>(this.hardskills + `detalle/${id}`);
  }

  hardskillsnuevo(hardskills: Hardskills): Observable<any> {
    return this.http.post<any>(this.hardskills + 'nuevo', hardskills);
  }

  hardskillsupdate(id: number, hardskills: Hardskills): Observable<any> {
    return this.http.put<any>(this.hardskills + `editar/${id}`, hardskills);
  }

  hardskillsdelete(id: number,): Observable<any> {
    return this.http.delete<any>(this.hardskills + `borrar/${id}`);
  }
}
