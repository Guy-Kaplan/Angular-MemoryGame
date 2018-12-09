import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../models/result';

@Injectable({
    providedIn: 'root'
})
export class ResultsService {

    constructor(private httpClient: HttpClient) {}

    public getAllResults(): Observable<Result[]> {
        return this.httpClient.get<Result[]>("http://localhost:52088/api/game-results");
    }

    public addResult(result: Result): Observable<Result> {
        return this.httpClient.post<Result>(
            "http://localhost:52088/api/game-results", result);
    }


}