import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/partes/login';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  creds: Credentials = {
    email: "",
    password: ""
  };

  constructor(private login: LoginService,
    private router: Router) {

  }

  onLogin(fomr: NgForm) {
    console.log("form", fomr.value);
    this.login.logear(this.creds).subscribe(response => {
      this.router.navigate(['/']);
    })
  }


}
