import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/partes/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  experiencia!: Experiencia
  empresa: String = ''
  cargo: String = ''
  periodo: String = ''
  descricion: String = ''
  logo: String = ''

  constructor(
    private experienciaService: ExperienciaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.explabdetalle(id).subscribe(
      data => {
        this.experiencia = data;
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
    this.experienciaService.explabupdate(id, this.experiencia).subscribe(
      data => {
        this.toastr.success('Experiencia Laboral Modificada', 'OK', {
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