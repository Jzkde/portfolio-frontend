import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/service/db.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  cursos: any;
    constructor(private cursosSvc: DbService){}
    
    ngOnInit(): void {
      this.cursosSvc.estudiosdb()
      .pipe(
        tap(data => this.cursos = data)
      ) 
      .subscribe();
      }
      }