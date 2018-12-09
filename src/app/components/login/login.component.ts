import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public user: User = new User();
    public users: User[];
    public userLoggedIn: string;

    public constructor(public usersService: UsersService) { }

    public ngOnInit(): void {
        this.userLoggedIn = sessionStorage.getItem("UserLoggedIn");
        let observable = this.usersService.getAllUsers();
        observable.subscribe(users => {
            this.users = users;
        });
    }

    /// Function for login.
    /// Enables login if no user is already logged in and if the
    /// entered user name and password are correct.
    public login(): void {
        if(this.usersService.isLoggedIn())
            alert("You are already logged in...");
        else {
            if(this.areUserAndPasswordExist(this.user.userName, this.user.password)){
                sessionStorage.setItem("IsLoggedIn", "true");
                sessionStorage.setItem("UserLoggedIn", this.user.userName);
                this.userLoggedIn = sessionStorage.getItem("UserLoggedIn");
                alert(`
                Logged in successfully.
                Welcome ${this.userLoggedIn}!
                `);
            }
            else
                alert("Incorrect username or password");
        }
    }

    /// Returns true if the given user name and password match and belong to an existing user.
    /// Otherwise, returns false.
    public areUserAndPasswordExist(userName: string, password: string): boolean {
        for(let i=0; i<this.users.length; i++){
            if(this.users[i].userName === userName && this.users[i].password === password)
                return true;
        }
        return false;
    }

    /// Function for sign out, of the current user.
    /// Updates variables accordingly.
    public signOut(): void {
        sessionStorage.setItem("IsLoggedIn", "false");
        sessionStorage.setItem("UserLoggedIn", "---");
        this.user.userName = "";
        this.user.password = "";
    }
}