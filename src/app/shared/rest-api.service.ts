import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../shared/book';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  // Define API
  apiURL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // HttpClient API get() method => Fetch Books list
  getBooks(): Observable<Book> {
    return this.http
      .get<Book>(this.apiURL + '/book')
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => Fetch Book
  getBook(id): Observable<Book> {
    return this.http
      .get<Book>(this.apiURL + '/book/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API post() method => Create Book
  createBook(book): Observable<Book | ArrayBuffer> {
    return this.http
      .post<Book>(this.apiURL + '/book', JSON.stringify(book), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API put() method => Update Book
  updateBook(id, book): Observable<Book> {
    return this.http
      .put<Book>(
        this.apiURL + '/book/' + id,
        JSON.stringify(book),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API delete() method => Delete Book
  deleteBook(id) {
    return this.http
      .delete<Book>(this.apiURL + '/book/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
