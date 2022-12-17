import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcercadeComponent } from './componente/acercade/acercade.component';
import { EncabezadoComponent } from './componente/encabezado/encabezado.component';
import { ExplabComponent } from './componente/explab/explab.component';
import { EstudiosComponent } from './componente/estudios/estudios.component';
import { HabilidadesComponent } from './componente/habilidades/habilidades.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    EncabezadoComponent,
    ExplabComponent,
    EstudiosComponent,
    HabilidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
