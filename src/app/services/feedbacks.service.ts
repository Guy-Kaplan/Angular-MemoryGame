import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../models/feedback';

@Injectable({
    providedIn: 'root'
})
export class FeedbacksService {

    constructor(private httpClient: HttpClient) {}

    public getAllFeedbacks(): Observable<Feedback[]> {
        return this.httpClient.get<Feedback[]>("http://localhost:52088/api/feedbacks");
    }

    public addFeedback(feedback: Feedback): Observable<Feedback> {
        return this.httpClient.post<Feedback>(
            "http://localhost:52088/api/feedbacks", feedback);
    }


}