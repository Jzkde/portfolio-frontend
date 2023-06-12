import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cursos } from 'src/app/partes/cursos';
import { CursosService } from 'src/app/service/cursos.service';

@Component({
  selector: 'app-editar-estudios',
  templateUrl: './editar-estudios.component.html',
  styleUrls: ['./editar-estudios.component.css']
})
export class EditarEstudiosComponent implements OnInit {

  curso!: Cursos
  nombre: string = ''
  organizador: string = ''
  carga: number = 0
  anio: number = 0
  caracter: string = ''
  certificado: string = ''

  constructor(

    private cursosService: CursosService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {

    this.curso = {
      nombre: '',
      organizador: '',
      carga: 0,
      anio: 0,
      caracter: '',
      certificado: ''
    }

    const id = this.activatedRoute.snapshot.params['id'];
    this.cursosService.cursosdedetalle(id).subscribe(
      data => {
        this.curso = data;
        console.log(data)
      },
      err => {
        this.toastr.error(err.error.mensaje, 'ERROR', {
          timeOut: 5000,
          positionClass: 'toast-center-center'
        });
        this.router.navigate(['/'])

      }
    );
  }
  onEditar(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.cursosService.cursosupdate(id, this.curso).subscribe(
      data => {
        this.toastr.success('Curso Modificado', 'OK', {
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
    );
  }
}