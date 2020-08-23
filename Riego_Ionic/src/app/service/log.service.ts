import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Log} from "../support/log";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable()
export class LogService {
    
    constructor(private http: HttpClient) {                 
    }   

    public getAll(dispId: string): Observable<Log[]> {        
        return this.http.get<Log[]>(environment.apiUrl + '/log/' + dispId)
        .pipe(catchError(this.handleError));
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