import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Hardskills } from 'src/app/partes/hardskills';
import { HardskillsService } from 'src/app/service/hardskills.service';

@Component({
  selector: 'app-editar-habilidades',
  templateUrl: './editar-habilidades.component.html',
  styleUrls: ['./editar-habilidades.component.css']
})
export class EditarHabilidadesComponent implements OnInit {

  hard!: Hardskills
  nombre: String = ''
  grado: String = ''
  nivel: number = 0
  logo: String = ''

  constructor(
    private hardService: HardskillsService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.hardService.hardskillsdetalle(id).subscribe(
      data => {
        this.hard = data;
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
    this.hardService.hardskillsupdate(id, this.hard).subscribe(
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