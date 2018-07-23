import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './~mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

 

  constructor(
    
    private http: HttpClient,
    private messageService: MessageService) { }

    private log(message: string) {
      this.messageService.add(`HeroService: ${message}`);
    }

    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}


    private heroesUrl = 'api/heroes';  // URL to web api
  getHeroes(): Observable<Hero[]> {  
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      //HeroService methods will tap into the flow of observable values and send a message (via log()) to the message area at the bottom of the page.
      tap(heroes => this.log('fetched heroes')),
      catchError(this.handleError('getHeroes', []))
    );
  }

//   There are three significant differences from getHeroes().
//1) it constructs a request URL with the desired hero's id.
//2) the server should respond with a single hero rather than an array of heroes.
//3)therefore, getHero returns an Observable<Hero> ("an observable of Hero objects") rather than an observable of hero arrays .

  getHero(id: number): Observable<Hero> {
   
    //backticks ( ` ) that define a JavaScript template literal for embedding the id.
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`)));
  }
}
