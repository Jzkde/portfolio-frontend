import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AcercadeComponent } from './componente/acercade/acercade.component';
import { EditarAcercadesComponent } from './componente/acercade/formularios/editar-acercades.component';
import { CompetenciasComponent } from './componente/competencias/competencias.component';
import { EditarCompetenciasComponent } from './componente/competencias/formularios/editar-competencias.component';
import { NuevoCompetenciasComponent } from './componente/competencias/formularios/nuevo-competencias.component';
import { LoginComponent } from './componente/encabezado/login/login.component';
import { CertificadosComponent } from './componente/estudios/certificados/certificados.component';
import { EstudiosComponent } from './componente/estudios/estudios.component';
import { EditarEstudiosComponent } from './componente/estudios/formularios/editar-estudios.component';
import { NuevoEstudiosComponent } from './componente/estudios/formularios/nuevo-estudios.component';
import { ExplabComponent } from './componente/explab/explab.component';
import { EditarExperienciaComponent } from './componente/explab/formularios/editar-experiencia.component';
import { NuevoExperienciaComponent } from './componente/explab/formularios/nuevo-experiencia.component';
import { EditarHabilidadesComponent } from './componente/habilidades/formularios/editar-habilidades.component';
import { NuevoHabilidadesComponent } from './componente/habilidades/formularios/nuevo-habilidades.component';
import { HabilidadesComponent } from './componente/habilidades/habilidades.component';
import { EditarProyectosComponent } from './componente/proyectos/formularios/editar-proyectos.component';
import { NuevoProyectosComponent } from './componente/proyectos/formularios/nuevo-proyectos.component';
import { ProyectosComponent } from './componente/proyectos/proyectos.component';

import { PortfolioComponent } from './componente/portfolio/portfolio.component';
import { LogoutComponent } from './componente/encabezado/login/logout/logout.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent },


  { path: 'acercade', component: AcercadeComponent },
  { path: 'acercade/editar/:id', component: EditarAcercadesComponent, canActivate: [AuthGuard] },

  { path: 'cursos', component: EstudiosComponent },
  { path: 'cursos/nuevo', component: NuevoEstudiosComponent, canActivate: [AuthGuard] },
  { path: 'cursos/editar/:id', component: EditarEstudiosComponent, canActivate: [AuthGuard] },
  { path: 'cursos/certificados/:id', component: CertificadosComponent },

  { path: 'experiencia', component: ExplabComponent },
  { path: 'experiencia/nuevo', component: NuevoExperienciaComponent, canActivate: [AuthGuard] },
  { path: 'experiencia/editar/:id', component: EditarExperienciaComponent, canActivate: [AuthGuard] },

  { path: 'hardskills', component: HabilidadesComponent },
  { path: 'hardskills/nuevo', component: NuevoHabilidadesComponent, canActivate: [AuthGuard] },
  { path: 'hardskills/editar/:id', component: EditarHabilidadesComponent, canActivate: [AuthGuard] },

  { path: 'proyectos', component: ProyectosComponent },
  { path: 'proyectos/nuevo', component: NuevoProyectosComponent, canActivate: [AuthGuard] },
  { path: 'proyectos/editar/:id', component: EditarProyectosComponent, canActivate: [AuthGuard] },

  { path: 'softskills', component: CompetenciasComponent },
  { path: 'softskills/nuevo', component: NuevoCompetenciasComponent, canActivate: [AuthGuard] },
  { path: 'softskills/editar/:id', component: EditarCompetenciasComponent, canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  
  { path: '**', redirectTo: '/', pathMatch: 'full' },



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
