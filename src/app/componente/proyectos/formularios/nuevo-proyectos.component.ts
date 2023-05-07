import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proyectos } from 'src/app/partes/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-nuevo-proyectos',
  templateUrl: './nuevo-proyectos.component.html',
  styleUrls: ['./nuevo-proyectos.component.css']
})
export class NuevoProyectosComponent implements OnInit {

  nombre: String = ''
  solicitante: String = ''
  descricion: String = ''
  imagen: String = ''

  constructor(
    private proyService: ProyectosService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onCrear(): void {
    const proy = new Proyectos(
      this.nombre,
      this.solicitante,
      this.descricion,
      this.imagen,
    );
    this.proyService.proyectosnuevo(proy).subscribe(
      data => {
        this.toastr.success('Proyecto o Practica Cargada', 'OK', {
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