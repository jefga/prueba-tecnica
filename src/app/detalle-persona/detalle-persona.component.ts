import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Personas } from '../personas/personas.module';
import{DetallePersonaService} from './detalle-persona.service';

@Component({
  selector: 'app-detalle-persona',
  templateUrl: './detalle-persona.component.html',
  styleUrls: ['./detalle-persona.component.scss']
})
export class DetallePersonaComponent implements OnInit {
  persona:Personas
  personas:Personas[]=[];
  idPersona:String
  constructor(
    private route: ActivatedRoute,
    private service: DetallePersonaService,
  ) { }

  ngOnInit(): void {
    // se captura el parameto id desde la url
    this.idPersona=this.route.snapshot.paramMap.get("idPersona");
    // se consumne el metodo para obtener el objeto personas por id al iniciar la pagina
    this.ObtenerPersona(this.idPersona);
  }
  // metodo para obtener el objeto personas por id
  ObtenerPersona(idPersona) {
    return this.service.obtenerPersona(idPersona).subscribe(
      (data: any) => {
      this.persona=data;
      console.log(this.persona);
      this.personas.push(this.persona);
     
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
