import { GameToysModel } from './gametoys.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class GameToysService {
    constructor(private http: HttpClient) { }

    readonly baseURL = 'http://localhost:44312/api/Inventory/'
    list: GameToysModel[];

    GetInventory()/* : Observable<any> */ {
        this.http.get(this.baseURL + `Inventory`)
      .toPromise()
      .then(res =>this.list = res as GameToysModel[]);

        /* const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json; charset=UTF-8'
            })
        };
        return this.http
            .get<any>(`https://localhost:44312/api/Inventory/Inventory`, headerOptions)
            .pipe(catchError(this.handleError.bind(this)));  */
    }

    handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error :', errorResponse.error.message);
        } else {
            console.error('Server Side Error :', errorResponse);
        }

        Observable.throw(errorResponse.error.json());
    }
}