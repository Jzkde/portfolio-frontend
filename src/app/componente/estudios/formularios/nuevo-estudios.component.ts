import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cursos } from 'src/app/partes/cursos';
import { CursosService } from 'src/app/service/cursos.service';

@Component({
  selector: 'app-nuevo-estudios',
  templateUrl: './nuevo-estudios.component.html',
  styleUrls: ['./nuevo-estudios.component.css']
})
export class NuevoEstudiosComponent implements OnInit {

  nombre: string = ''
    organizador: string = ''
    carga: number = 0
    anio: number = 0
    caracter: string = ''
    certificado: string = ''

  constructor(
    private cursoService: CursosService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onCrear(): void {
    const curso = new Cursos(
      this.nombre,
      this.organizador,
      this.carga,
      this.anio,
      this.caracter,
      this.certificado,
    );
    this.cursoService.cursosnuevo(curso).subscribe(
      data => {
        this.toastr.success('Curso Guardado', 'OK', {
          timeOut: 2500,
          positionClass: 'toast-center-center'
        });
        this.router.navigate(['/'])
      },
      err => {
        this.toastr.error(err.error.mensaje, 'ERROR', {
          timeOut: 5000,
          positionClass: 'toast-center-center'
        });
        this.router.navigate(['/'])
      }
    )

  }
}