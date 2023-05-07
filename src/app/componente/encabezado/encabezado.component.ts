import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})



export class EncabezadoComponent implements OnInit {



  inicio: boolean = false;

constructor(private login: LoginService,
  private router: Router){}




  ngOnInit(): void {
    this.inicio = this.login.inicio();
    
    
  }
  logout(): void {
    this.login.salir();
    
  }


}
