import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Planetas } from '../personas/personas.module';
import { DetallePlanetaService } from './detalle-planeta.service';

@Component({
  selector: 'app-detalle-planeta',
  templateUrl: './detalle-planeta.component.html',
  styleUrls: ['./detalle-planeta.component.scss']
})
export class DetallePlanetaComponent implements OnInit {
  planeta:Planetas;
  planetas:Planetas[]=[];
  idPlaneta:String;
  constructor(
    private route: ActivatedRoute,
    private service: DetallePlanetaService,
  ) { }

  ngOnInit(): void {
    // se captura el parameto id desde la url
    this.idPlaneta=this.route.snapshot.paramMap.get("idPlaneta");
    // se consumne el metodo para obtener el objeto persona por id al iniciar la pagina
    this.ObtenerPlaneta(this.idPlaneta);
  }
// metodo para obtener el objeto planetas por id
  ObtenerPlaneta(idPlaneta) {
    return this.service.obtenerPlaneta(idPlaneta).subscribe(
      (data: any) => {
      this.planeta=data;
     
      this.planetas.push(this.planeta);

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
