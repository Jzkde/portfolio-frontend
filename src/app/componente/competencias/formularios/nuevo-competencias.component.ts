import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Softskills } from 'src/app/partes/softskills';
import { SoftskillsService } from 'src/app/service/softskills.service';

@Component({
  selector: 'app-nuevo-competencias',
  templateUrl: './nuevo-competencias.component.html',
  styleUrls: ['./nuevo-competencias.component.css']
})
export class NuevoCompetenciasComponent implements OnInit {

  nombre: String = 'EJEMPLO'
  grado: number = 100

  constructor(
    private softService:SoftskillsService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onCrear(): void {
    const hard = new Softskills(
      this.nombre,
      this.grado,

    );
    this.softService.softskillsnuevo(hard).subscribe(
      data => {
        this.toastr.success('Habilidad Cargada', 'OK', {
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