import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Hardskills } from 'src/app/partes/hardskills';
import { HardskillsService } from 'src/app/service/hardskills.service';

@Component({
  selector: 'app-nuevo-habilidades',
  templateUrl: './nuevo-habilidades.component.html',
  styleUrls: ['./nuevo-habilidades.component.css']
})
export class NuevoHabilidadesComponent implements OnInit {

  nombre: String = 'EJEMPLO'
  grado: number = 50
  nivel: String = 'Experto!!'
  logo: String = 'https://svgsilh.com/svg/1873373.svg'

  constructor(
    private hardService: HardskillsService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onCrear(): void {
    const hard = new Hardskills(
      this.nombre,
      this.grado,
      this.nivel,
      this.logo
    );
    this.hardService.hardskillsnuevo(hard).subscribe(
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