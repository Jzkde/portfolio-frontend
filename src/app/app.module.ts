import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PortfolioComponent } from './componente/portfolio/portfolio.component';
import { AcercadeComponent } from './componente/acercade/acercade.component';
import { EncabezadoComponent } from './componente/encabezado/encabezado.component';
import { ExplabComponent } from './componente/explab/explab.component';
import { EstudiosComponent } from './componente/estudios/estudios.component';
import { HabilidadesComponent } from './componente/habilidades/habilidades.component';
import { CompetenciasComponent } from './componente/competencias/competencias.component';
import { ProyectosComponent } from './componente/proyectos/proyectos.component';
import { EditarAcercadesComponent } from './componente/acercade/formularios/editar-acercades.component';
import { EditarCompetenciasComponent } from './componente/competencias/formularios/editar-competencias.component';
import { NuevoCompetenciasComponent } from './componente/competencias/formularios/nuevo-competencias.component';
import { NuevoEstudiosComponent } from './componente/estudios/formularios/nuevo-estudios.component';
import { EditarEstudiosComponent } from './componente/estudios/formularios/editar-estudios.component';
import { EditarExperienciaComponent } from './componente/explab/formularios/editar-experiencia.component';
import { NuevoExperienciaComponent } from './componente/explab/formularios/nuevo-experiencia.component';
import { NuevoHabilidadesComponent } from './componente/habilidades/formularios/nuevo-habilidades.component';
import { EditarHabilidadesComponent } from './componente/habilidades/formularios/editar-habilidades.component';
import { EditarProyectosComponent } from './componente/proyectos/formularios/editar-proyectos.component';
import { NuevoProyectosComponent } from './componente/proyectos/formularios/nuevo-proyectos.component';
import { CertificadosComponent } from './componente/estudios/certificados/certificados.component';
import { LoginComponent } from './componente/encabezado/login/login.component';

import { AuthInterceptor } from './auth.interceptor';
import { LogoutComponent } from './componente/encabezado/login/logout/logout.component';




@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    EncabezadoComponent,
    ExplabComponent,
    EstudiosComponent,
    HabilidadesComponent,
    
    CompetenciasComponent,
    ProyectosComponent,
    PortfolioComponent,
    EditarAcercadesComponent,
    EditarCompetenciasComponent,
    NuevoCompetenciasComponent,
    NuevoEstudiosComponent,
    EditarEstudiosComponent,
    EditarExperienciaComponent,
    NuevoExperienciaComponent,
    NuevoHabilidadesComponent,
    EditarHabilidadesComponent,
    EditarProyectosComponent,
    NuevoProyectosComponent,
    CertificadosComponent,
    LoginComponent,
    LogoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule 
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
