import { Component, OnInit } from '@angular/core';
import { Acercade } from 'src/app/partes/acercade';
import { AcercaDeService } from 'src/app/service/acercade.service';
import { LoginService } from 'src/app/service/login.service';



@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {


   acercade: Acercade [ ] =[]
   inicio:boolean = false;

  constructor(
    private acercadeService: AcercaDeService,
    private login: LoginService
  ) { }

  ngOnInit(): void {
    this.cargaracercade();
    this.inicio = this.login.inicio();
  }

  cargaracercade(): void {
    this.acercadeService.acercadelista().subscribe(

      data => {
        this.acercade = data;
        
      },
      err => {
        console.log(err);
      }
    );
  }
}