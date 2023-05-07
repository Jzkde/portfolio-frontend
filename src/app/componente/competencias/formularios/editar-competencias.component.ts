import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Softskills } from 'src/app/partes/softskills';
import { SoftskillsService } from 'src/app/service/softskills.service';

@Component({
  selector: 'app-editar-competencias',
  templateUrl: './editar-competencias.component.html',
  styleUrls: ['./editar-competencias.component.css']
})
export class EditarCompetenciasComponent implements OnInit {

  soft!: Softskills
  nombre: String = ''
  grado: String = ''


  constructor(
    private softService: SoftskillsService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.softService.softskillsdetalle(id).subscribe(
      data => {
        this.soft = data;
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
    this.softService.softskillsupdate(id, this.soft).subscribe(
      data => {
        this.toastr.success('Habilidad Modificada', 'OK', {
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