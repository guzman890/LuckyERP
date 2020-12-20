import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AsignaturaService {
  private host = ""
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string
  ) { 
    this. host = baseUrl
  }

  getAsignaturas() {
    const url = `${this.host}api/subject`;
    return this.http.get<any[]>(url, {headers: this.headers})
        .pipe(catchError(this.handleError));
  }

  getAsignaturasById( id ) {
    const url = `${this.host}api/subject/${id}`;
    return this.http.get<any>(url, {headers: this.headers})
        .pipe(catchError(this.handleError));
  }

  postAsignatura(subject){
    const url = `${this.host}api/subject`;
    return this.http.post<any>(url, subject, {headers: this.headers})
        .pipe(catchError(this.handleError));
  }

  putAsignatura( id, subject){
    const url = `${this.host}api/subject/${id}`;
    return this.http.put<any>(url, subject, {headers: this.headers})
        .pipe(catchError(this.handleError));
  }

  deleteAsignatura( id ){
    const url = `${this.host}api/subject/${id}`;
    return this.http.delete<any>(url, {headers: this.headers})
        .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<any> {
    console.log('error al conectarse con servidor');
    console.error('An error occurred', error || '');
    return throwError(error);
  }
}
