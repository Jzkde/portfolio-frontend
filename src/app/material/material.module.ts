import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  imports: [
    CommonModule,
    
  ]
})
export class MaterialModule { }
