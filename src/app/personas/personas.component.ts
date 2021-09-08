import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import{PersonasService} from './personas.service';
import{Personas, Planetas} from './personas.module';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {
 personas:Personas[]
 planetas:Planetas[]
  constructor(
  private route: ActivatedRoute,
   private service: PersonasService,
    ) {
    
     }

  ngOnInit(): void {
    // se consumne el metodo para obtener el listado de personas al iniciar la pagina
    this.ObtenerListaPersonas();
    // se consumne el metodo para obtener el listado de personas top 3 al iniciar la pagina
    this.ObtenerPlanetasTop();
  }

// metodo para obtener el listado de personas
 ObtenerListaPersonas() {
    return this.service.obtenerListaPersonas().subscribe(
      (data: any) => {
      this.personas=data;
      },
      (err) => {
        let posicion = err.indexOf("Error Code: 0");
       
        if (posicion != -1) {
          
        } else {
         
        }
      }
    );
  }
  // metodo para obtener el listado de personas top 3
  ObtenerPlanetasTop() {
    return this.service.obtenerTopPlanetas(3).subscribe(
      (data: any) => {
      this.planetas=data;
      },
      (err) => {
        let posicion = err.indexOf("Error Code: 0");
       
        if (posicion != -1) {
          
        } else {
         
        }
      }
    );
  }

}
