import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { PersonasComponent } from './personas/personas.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';
import { DetallePlanetaComponent } from './detalle-planeta/detalle-planeta.component';
import {PersonasService} from './personas/personas.service';
import {PlanetasService} from './planetas/planetas.service';
import { DetallePersonaService } from './detalle-persona/detalle-persona.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PlanetasComponent,
    PersonasComponent,
    DetallePersonaComponent,
    DetallePlanetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [PersonasService,PlanetasService,DetallePersonaService,DetallePersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
