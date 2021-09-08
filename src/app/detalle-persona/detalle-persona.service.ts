import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {retry,catchError}  from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DetallePersonaService {

  // url base para consumir los servicios web
  baseurl="http://localhost:4000/services/"

  constructor(private http: HttpClient) { 

  }
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
  // metodo get para consumir el servicio que retorna el objeto persona 
  obtenerPersona(idPersona): Observable<Object> {
    return this.http
      .get<Object>(
        this.baseurl + "personas/"+idPersona,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // metodo para manejar los errores del consumo de los servicios web
  errorHandl(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
