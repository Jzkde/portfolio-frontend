import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Softskills } from 'src/app/partes/softskills';
import { LoginService } from 'src/app/service/login.service';
import { SoftskillsService } from 'src/app/service/softskills.service';

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  styleUrls: ['./competencias.component.css']
})
export class CompetenciasComponent implements OnInit {

  soft: Softskills[] = [];
  inicio:boolean = false;

  constructor(
    private softService: SoftskillsService,
    private toastr: ToastrService,
    private login: LoginService
    ) { }

  ngOnInit(): void {
    this.cargarexperiencia();
    this.inicio = this.login.inicio();
  }

  cargarexperiencia(): void {
    this.softService.softskillslista().subscribe(
      data => {
        this.soft = data;
      },
      err => {
        console.log(err);
      }
    );
}
borrar(id: number)  {
  this.softService.softskillsdelete(id).subscribe(
    data => {
      this.toastr.success('Habilidad Eliminada', 'OK', {
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