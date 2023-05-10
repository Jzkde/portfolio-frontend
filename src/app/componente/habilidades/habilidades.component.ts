import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Hardskills } from 'src/app/partes/hardskills';
import { HardskillsService } from 'src/app/service/hardskills.service';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  hardskills: Hardskills[] = [];
  
  inicio: boolean = false;
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.hardskills, event.previousIndex, event.currentIndex);
  }

  constructor(
    private hardService: HardskillsService,
    private toastr: ToastrService,
    private login: LoginService
  ) { }

  ngOnInit(): void {
    this.cargarexperiencia();
    this.inicio = this.login.inicio();
  }

  cargarexperiencia(): void {
    this.hardService.hardskillslista().subscribe(
      data => {
        this.hardskills = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  borrar(id: number) {
    this.hardService.hardskillsdelete(id).subscribe(
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