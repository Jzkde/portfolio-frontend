import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/service/db.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-explab',
  templateUrl: './explab.component.html',
  styleUrls: ['./explab.component.css']
})
export class ExplabComponent implements OnInit {
explab: any;
  constructor(private explabSvc: DbService){}
  
  ngOnInit(): void {
    this.explabSvc.explabdb()
    .pipe(
      tap(data => this.explab = data)
    ) 
    .subscribe();
    }
    }