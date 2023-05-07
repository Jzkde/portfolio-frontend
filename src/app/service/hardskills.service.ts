import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hardskills } from '../partes/hardskills';

@Injectable({
  providedIn: 'root'
})
export class HardskillsService {
  private hardskills = 'http://localhost:8080/api/hardskills/'
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
