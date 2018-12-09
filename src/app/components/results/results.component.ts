import { Component, OnInit } from '@angular/core';
import { Result } from '../../models/result';
import { ResultsService } from '../../services/results.service';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

    public results: Result[];
    public users: User[];

    public constructor(private resultsService: ResultsService, private usersService: UsersService) { }

    public ngOnInit(): void {
        let observable = this.resultsService.getAllResults();
        observable.subscribe(results => {
            this.results = results;
            console.log(this.results);
        });
        let observable2 = this.usersService.getAllUsers();
            observable2.subscribe(users => {
                this.users = users;
            });
    }

    /// Returns the user name of the user with the given user ID.
    /// If there is no such a user ID, returns -1.
    public getUserNameByID(id: number): string {
        for(let i=0;i<this.users.length;i++)
            if(this.users[i].id === id)
                return this.users[i].userName;
        return "---";
    }

    /// Returns the full name of the user with the given user ID.
    /// If there is no such a user ID, returns "---".
    public getFullNameByID(id: number): string {
        for(let i=0;i<this.users.length;i++)
            if(this.users[i].id === id)
                return this.users[i].fullName;
        return "---";
    }
}