import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cursos } from 'src/app/partes/cursos';
import { CursosService } from 'src/app/service/cursos.service';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements OnInit {

  curso!: Cursos
  nombre: string = ''
  organizador: string = ''
  carga: number = 0
  anio: number = 0
  caracter: string = ''
  certificado: string = ''

  constructor(

    private cursosService: CursosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.curso = {
      nombre: '',
      organizador: '',
      carga: 0,
      anio: 0,
      caracter: '',
      certificado: ''
    }
    
    const id = this.activatedRoute.snapshot.params['id'];
    this.cursosService.cursosdedetalle(id).subscribe(
      data => {
        this.curso = data;
      },
    );
    }
    
    volver(): void {this.router.navigate(['/']);
  }
}