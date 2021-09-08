import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {retry,catchError}  from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  // url base para consumir los servicios web
  baseurl="http://localhost:4000/services/"

  constructor(private http: HttpClient) { 

  }
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
 // metodo get para consumir el servicio que retorna el listado personas 
  obtenerListaPersonas(): Observable<Object> {
    return this.http
      .get<Object>(
        this.baseurl + "personas/",
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }
 // metodo get para consumir el servicio que retorna el listado planetas top 3
  obtenerTopPlanetas(limite): Observable<Object> {
    return this.http
      .get<Object>(
        this.baseurl + "planetasTop3/"+limite,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // metodo get para consumir el servicio que retorna el listado personas top 3
  obtenerTopPersonas(limite): Observable<Object> {
    return this.http
      .get<Object>(
        this.baseurl + "personasTop3/"+limite,
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
