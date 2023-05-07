import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proyectos } from 'src/app/partes/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {

  proyectos!: Proyectos
  nombre: String = ''
  solicitante: String = ''
  descricion: String = ''
  imagen: String = ''

  constructor(
    private proyService: ProyectosService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyService.proyectosdetalle(id).subscribe(
      data => {
        this.proyectos = data;
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
    this.proyService.proyectosupdate(id, this.proyectos).subscribe(
      data => {
        this.toastr.success('Proyecto o Practica Modificada', 'OK', {
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