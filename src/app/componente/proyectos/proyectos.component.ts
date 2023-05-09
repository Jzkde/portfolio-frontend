import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proyectos } from 'src/app/partes/proyectos';
import { LoginService } from 'src/app/service/login.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyectos[] = [];
  inicio: boolean = false;

  constructor(
    private proyService: ProyectosService,
    private toastr: ToastrService,
    private router: Router,
    private login: LoginService

  ) { }

  ngOnInit(): void {
    this.cargarproy();
    this.inicio = this.login.inicio();
  }

  ira(url: string){
    window.open(url, "_blank");
}

  cargarproy(): void {
    this.proyService.proyectoslista().subscribe(
      data => {
        this.proyectos = data;
//        console.log(data);
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

  borrar(id: number) {

    this.proyService.proyectosdelete(id).subscribe(
      data => {
        this.toastr.success('Proyecto Eliminado', 'OK', {
          timeOut: 2500,
          positionClass: 'toast-center-center'
        });
        this.cargarproy();
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