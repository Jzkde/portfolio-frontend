import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Acercade } from 'src/app/partes/acercade';
import { AcercaDeService } from 'src/app/service/acercade.service';

@Component({
  selector: 'app-editar-acercades',
  templateUrl: './editar-acercades.component.html',
  styleUrls: ['./editar-acercades.component.css']
})
export class EditarAcercadesComponent implements OnInit {

  acercade!: Acercade
  nombre: string = ''
  titulo: string = ''
  email: string = ''
  descricion: string = ''
  imagen: string = ''

  constructor(
    private acercadeService: AcercaDeService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {

    this.acercade = {
      nombre: '',
      titulo: '',
      email: '',
      descricion: '',
      imagen: ''
    }

    this.acercadeService.acercadedetalle(1).subscribe(
      data => {
        this.acercade = data;
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
    this.acercadeService.acercadeupdate(1, this.acercade).subscribe(
      data => {
        this.toastr.success('Perfil Modificado', 'OK', {
          timeOut: 2500,
          positionClass: 'toast-center-center'
        });
        this.router.navigate(['/'])
      },
    );
  }

}

