import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BookService {

  private host = ""
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string
  ) { 
    this.host = baseUrl
  }

  getBooks() {
    const url = `${this.host}api/book`;
    return this.http.get<any[]>(url, {headers: this.headers})
        .pipe(catchError(this.handleError));
  }

  getBookById( id ) {
    const url = `${this.host}api/book/${id}`;
    return this.http.get<any>(url, {headers: this.headers})
        .pipe(catchError(this.handleError));
  }

  postBook( book ){
    const url = `${this.host}api/book`;
    return this.http.post<any>(url, book, {headers: this.headers})
        .pipe(catchError(this.handleError));
  }

  putBook( id, book ){
    const url = `${this.host}api/book/${id}`;
    return this.http.put<any>(url, book, {headers: this.headers})
        .pipe(catchError(this.handleError));
  }

  deleteBook( id ){
    const url = `${this.host}api/book/${id}`;
    return this.http.delete<any>(url, {headers: this.headers})
        .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<any> {
    console.log('error al conectarse con servidor');
    console.error('An error occurred', error || '');
    return throwError(error);
  }
}
