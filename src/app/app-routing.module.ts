import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';
import { DetallePlanetaComponent } from './detalle-planeta/detalle-planeta.component';
import { HeaderComponent } from './header/header.component';
import { PersonasComponent } from './personas/personas.component';
import { PlanetasComponent } from './planetas/planetas.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent},
  { path: 'Personas', component: PersonasComponent},
  { path: 'Planetas', component: PlanetasComponent},
  { path: 'Persona/:idPersona', component: DetallePersonaComponent},
  { path: 'Planeta/:idPlaneta', component: DetallePlanetaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
