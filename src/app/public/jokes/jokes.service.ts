import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';

import { HttpSuccessResponse } from '../../common/interfaces/http-responses';
import { Joke } from '../../common/models/joke';

import { map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
	private basepath: string = 'http://api.icndb.com/jokes';

	constructor(private readonly http: HttpClient) {
	}

	listJokes(): Observable<Joke[]> {
		return this.http.get(`${this.basepath}`)
			.pipe(map((results: HttpSuccessResponse<Joke[]>) => results.value))

			
	}

	getJokeById(jokeId: number | string): Observable<Joke> {
		return this.http.get(`${this.basepath}/${jokeId}`)
			.pipe(map((results: HttpSuccessResponse<Joke>) => results.value))
	}

}
