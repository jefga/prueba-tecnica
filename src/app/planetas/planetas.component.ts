import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Planetas } from '../personas/personas.module';
import{PlanetasService} from './planetas.service';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.scss']
})
export class PlanetasComponent implements OnInit {
  planetas:Planetas[]
  constructor(
    private route: ActivatedRoute,
    private service:PlanetasService
  ) { }

  ngOnInit(): void {
    // se consumne el metodo para obtener el listado al iniciar la pagina
    this.ObtenerListaPlanetas()
    console
  }

// metodo para obtener el listado de planetas
  ObtenerListaPlanetas() {
    return this.service.obtenerListaPlanetas().subscribe(
      (data: any) => {
      this.planetas=data;
      console.log( this.planetas);
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
