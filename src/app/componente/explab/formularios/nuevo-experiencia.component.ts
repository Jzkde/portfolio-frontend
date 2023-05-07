import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/partes/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-nuevo-experiencia',
  templateUrl: './nuevo-experiencia.component.html',
  styleUrls: ['./nuevo-experiencia.component.css']
})
export class NuevoExperienciaComponent implements OnInit {

  empresa: String = ''
  cargo: String = ''
  periodo: String = ''
  descricion: String = ''
  logo: String = ''

  constructor(
    private experienciaService: ExperienciaService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onCrear(): void {
    const experiencia = new Experiencia(
      this.empresa,
      this.cargo,
      this.periodo,
      this.descricion,
      this.logo
    );
    this.experienciaService.explabnuevo(experiencia).subscribe(
      data => {
        this.toastr.success('Experiencia Laboral Cargada', 'OK', {
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