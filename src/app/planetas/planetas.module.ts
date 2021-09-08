// clase que representa el objeto planeta dao
export class Planetas {
  idplaneta: number;
  nombre: string;
  descripcion: string;
  diametro: number;
  clima: string;
  rotacion: string;
  terreno: string;
  contador: number;
  personas:Persona[]

}
// clase que representa el objeto persona dao
export class Persona {
  idpersona: number;
  nombre: string;
  edad: number;
  altura: number;
  peso: number;
  contador: number;
  idplaneta: number;
}
