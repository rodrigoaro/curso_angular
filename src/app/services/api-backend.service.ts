import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiBackendService {

  constructor(private http : HttpClient) { }

  /*getData(): Observable<any> {
    return this.http.get('http://localhost:3000/users')
      .pipe(
        retry(3),
        catchError((error) => {
          console.error('Se ha producido un error en el servicio');
          console.error(error);

          return throwError(() => new Error('Error personalizado'));
        }) 
      );
  }*/

  postData(user : any): Observable<any> {

    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer token12345'
    }
  
    const options = { headers }

    return this.http.post('http://localhost:3000/users', user, options);
  }

  getData(parametros : any): Observable<any> {
    
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer token12345'
    }
    
    let params = new HttpParams({ fromObject: parametros});

    const options = { params, headers }
    
    return this.http.get('http://localhost:3000/users', options)
    .pipe(
      retry(3),
      catchError((error) => {
        console.error('Se ha producido un error en el servicio');
        console.error(error);

        return throwError(() => new Error('Error personalizado'));
      }) 
    );
  }
}
