import { Component, Input, OnInit } from '@angular/core';
import { Feedback } from '../../models/feedback';
import { FeedbacksService } from '../../services/feedbacks.service';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

    @Input()
    public pattern: string | RegExp // use RegEx checks for the form

    public myFeedback: Feedback = new Feedback();
    public feedbacks: Feedback[];
    public user: User = new User();
    public users: User[];
    public userLoggedIn: string;

    public constructor(public usersService: UsersService, private router: Router,
        private feedbacksService: FeedbacksService) { }

    public ngOnInit(): void {
        this.userLoggedIn = sessionStorage.getItem("UserLoggedIn");
        let observable = this.usersService.getAllUsers();
        observable.subscribe(users => {
            this.users = users;
        });
        let observable2 = this.feedbacksService.getAllFeedbacks();
        observable2.subscribe(feedbacks => {
            this.feedbacks = feedbacks;
        });
        if(!this.usersService.isLoggedIn()){
            setTimeout(() => {
                this.router.navigate(['login']);
            }, 2000); //redirects after 2 seconds
        }
    }

    /// Adds the user's feedback to the DB
    public addFeedback(): void {
        let feedbackToAdd = new Feedback();
        feedbackToAdd.userID = this.getUserIdByUserName();
        feedbackToAdd.feedback = this.myFeedback.feedback;
        let observable = this.feedbacksService.addFeedback(feedbackToAdd);
        observable.subscribe(f => {
            alert(`
            Thank you.
            Your feedback has been added.`);
            this.feedbacks.push(f);
        }); 
    }

    /// Returns the UserID of the logged in user, by its user name.
    /// If there is no user with this user name, returns -1.
    public getUserIdByUserName(): number {
        for(let i=0;i<this.users.length;i++)
            if(this.users[i].userName === this.userLoggedIn)
                return this.users[i].id;
        return (-1);
    }
  

}