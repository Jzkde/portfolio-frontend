import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/service/db.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

constructor(private acercadeSvc: DbService){}

ngOnInit() {
this.acercadeSvc.obtenerdb().subscribe((data: any) => console.log(data));
}
}