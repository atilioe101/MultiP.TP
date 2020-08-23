import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DispositivoItem} from "../support/dispositivo";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable()
export class DispositivoService {
    
    constructor(private http: HttpClient) {                 
    }   

    public getAll(): Observable<DispositivoItem[]> {        
        return this.http.get<DispositivoItem[]>(environment.apiUrl + '/dispositivo')
        .pipe(catchError(this.handleError));
    } 

    public updValvula(row: DispositivoItem, status: number) { 
      let data = {'_id': row._id, 'dispositivoId': row.dispositivoId.toString(), 'electrovalvulaId': row.electrovalvula.codigo.toString(), 'nuevoestado': status.toString()};     
     
      this.http.post(environment.apiUrl + '/dispositivo/updestadovalvula', data)      
      .subscribe(data => {
          console.log('update ok');
      }, error => {
          console.log(error);
      });     
    } 

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {          
          console.error('error:', error.error.message);
        } else {          
          console.error(
            `Backend code ${error.status}, ` + `body was: ${error.error}`);
        }       
        return throwError('Something bad happened.');
    }

}