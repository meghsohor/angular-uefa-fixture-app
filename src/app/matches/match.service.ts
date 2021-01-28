import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Match } from './match.model';

export interface ApiResponse {
  data: Match[];
  page: string;
  per_page: number;
  total: number;
  total_pages: number;
}


@Injectable({providedIn: 'root'})
export class MatchService {
  private readonly BASE_URL = 'https://jsonmock.hackerrank.com/api/football_matches';

  constructor(private http: HttpClient) {

  }

  getUrl(year: number, page: number): string {
    const turnament = 'competition=UEFA%20Champions%20League';
    return `${this.BASE_URL}?${turnament}&year=${year}&page=${page}`;
  }

  getMatches$ = this.http.get<ApiResponse>(this.getUrl(2015, 1)).pipe(
    map(res => res.data),
    catchError(err => this.handleError)
  )

  private handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage)
  }
}