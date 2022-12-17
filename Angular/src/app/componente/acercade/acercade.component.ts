import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/service/db.service';
import { tap } from 'rxjs/operators';
import { acercade } from './acerca.interface';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  acerca!: acercade;
  constructor(private acercadebSvc: DbService){}
  
  ngOnInit(): void {
    this.acercadebSvc.acercadedb()
    .pipe(
      tap(data => this.acerca = data)
    ) 
    .subscribe();
    }
    }