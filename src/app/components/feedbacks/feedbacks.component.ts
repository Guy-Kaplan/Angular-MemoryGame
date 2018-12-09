import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../models/feedback';
import { FeedbacksService } from '../../services/feedbacks.service';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {

    public feedbacks: Feedback[];
    public users: User[];

    public constructor(private feedbacksService: FeedbacksService, private usersService: UsersService) { }

    public ngOnInit(): void {
        let observable = this.feedbacksService.getAllFeedbacks();
        observable.subscribe(feedbacks => {
            this.feedbacks = feedbacks;
            console.log(this.feedbacks);
        });
        observable = this.usersService.getAllUsers();
            observable.subscribe(users => {
                this.users = users;
                console.log(this.users); //!!!
            });
    }

    /// Returns the user name of the user with the given ID.
    /// If there is no such a user, returns -1.
    public getUserNameByID(id: number): string {
        for(let i=0;i<this.users.length;i++)
            if(this.users[i].id === id)
                return this.users[i].userName;
        return "---";
    }
}