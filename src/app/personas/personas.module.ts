// clase que representa el objeto persona dto
export class Personas {
  idpersona: number;
  nombre: string;
  edad: number;
  altura: number;
  peso: number;
  contador: number;
  nombrePlaneta: string;
}
// clase que representa el objeto persona dao
export class Planetas {
  idplaneta: number;
  nombre: string;
  descripcion: string;
  diametro: number;
  clima: string;
  rotacion: string;
  terreno: string;
  contador: number;
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

