import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { acercade } from '../componente/acercade/acerca.interface';

@Injectable({
  providedIn: 'root'
})
export class DbService {
private acercade = 'http://localhost:3000/acercade'
private explab = 'http://localhost:3000/explab'
private estudios = 'http://localhost:3000/cursos'
private habilidades = 'http://localhost:3000/habilidades'
private proyectos = 'http://localhost:3000/proyectos'

  constructor(private http: HttpClient) { }

  acercadedb(): Observable<acercade> {
  return this.http.get<acercade>(this.acercade)
  }
  explabdb(): Observable<any> {
    return this.http.get(this.explab)
  }
  estudiosdb(): Observable<any> {
    return this.http.get(this.estudios)
  }
  habilidadesdb(): Observable<any> {
    return this.http.get(this.habilidades)
  }
  proyectosdb(): Observable<any> {
    return this.http.get(this.proyectos)
  }
}
