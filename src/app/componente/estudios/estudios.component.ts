import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cursos } from 'src/app/partes/cursos';
import { CursosService } from 'src/app/service/cursos.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent  implements OnInit {

  cursos: Cursos[] = [];
  inicio:boolean = false;

  constructor(
    private cursosService:CursosService,
    private toastr: ToastrService,
    private login: LoginService
    ) { }

  ngOnInit(): void {
    this.cargarcuros();
    this.inicio = this.login.inicio();
  }

  cargarcuros(): void {
    this.cursosService.cursoslista().subscribe(
      data => {
        this.cursos = data;
      },
      err => {
        console.log(err);
      }
    );
}
borrar(id: number)  {
  this.cursosService.cursosdelete(id).subscribe(
    data => {
      this.toastr.success('Curso Eliminado', 'OK', {
        timeOut: 2500,
        positionClass: 'toast-center-center'
      });
      this.cargarcuros();
     },
     err => {
      this.toastr.error(err.error.mensaje, 'ERROR', {
        timeOut: 5000,
        positionClass: 'toast-center-center'
      });
    }   
  )
}
}