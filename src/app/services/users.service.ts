import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private httpClient: HttpClient) {
    }

    public getAllUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>("http://localhost:52088/api/users");
    }

    public addUser(user: User): Observable<User> {
        return this.httpClient.post<User>(
            "http://localhost:52088/api/users", user);
    }

    public isLoggedIn(): boolean {
        if(sessionStorage.getItem("IsLoggedIn") == "true")
            return true;
        return false;
    }

}