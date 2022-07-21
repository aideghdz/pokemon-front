import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BASE_API_URL} from 'app/constants/api_constants'

@Injectable()
export class ApiService {
    private options = {
        headers: new HttpHeaders().append('Content-Type', 'application/json'),
        params: null
    };

    private baseUrl = '';
    private jwtToken: string;
   
   constructor(private httpClient: HttpClient ) {
       console.log(BASE_API_URL);
        this.baseUrl = BASE_API_URL;
   }
    public get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        this.options.params = params;
        console.log(BASE_API_URL);
        const request = this.httpClient
        
        .get(BASE_API_URL + path, this.options)
        .pipe(catchError(err => this.handleError(err)));
        return request;
    }

    public post(path: string, body: Object = {}): Observable<any> {
        
        this.showLoading();
        return this.httpClient
        .post(this.baseUrl + path, JSON.stringify(body), this.options)
        .pipe(catchError(err => this.handleError(err)));
    }
   

    public put(path: string, body: Object = null, params: HttpParams = null): Observable<any> {
        this.options.params = params;

        

        return this.httpClient
        .put(this.baseUrl + path, JSON.stringify(body), this.options)
        .pipe(catchError(err => this.handleError(err)));
    }

    public delete(path: string): Observable<any> {
        

        return this.httpClient
        .delete(this.baseUrl + path)
        .pipe(catchError(err => this.handleError(err)));
    }

    public setJwtToken(token: string) {
        this.jwtToken = token;
        this.options = {
           headers: new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.jwtToken),
           params: null
        };
     }

    private handleError(response: any): ObservableInput<{}> {
        console.log('error: ', response);
        throw response.error;
    }
    showLoading() {
    
    }
}


