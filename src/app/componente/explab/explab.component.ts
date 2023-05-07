import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/partes/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { LoginService } from 'src/app/service/login.service';



@Component({
  selector: 'app-explab',
  templateUrl: './explab.component.html',
  styleUrls: ['./explab.component.css']
})

export class ExplabComponent implements OnInit {

  experiencia: Experiencia[] = [];

  inicio: boolean = false;

  constructor(
    private experienciaService: ExperienciaService,
    private toastr: ToastrService,
    private login: LoginService
  ) { }

  ngOnInit(): void {
    this.cargarexperiencia();
    this.inicio = this.login.inicio();
  }

  cargarexperiencia(): void {
    this.experienciaService.experiencialista().subscribe(
      data => {
        this.experiencia = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  borrar(id: number) {
    this.experienciaService.explabdelete(id).subscribe(
      data => {
        this.toastr.success('Experiencia Laboral Eliminada', 'OK', {
          timeOut: 2500,
          positionClass: 'toast-center-center'
        });
        this.cargarexperiencia();
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