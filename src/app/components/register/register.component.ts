import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    @Input()
    public pattern: string | RegExp // use RegEx checks for the form

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

    /// Adds the new user's details to the DB
    public addUser(): void {
        if(this.isUserNameExists(this.user.userName)){
            alert("Error. User name alredy exists.");
        }
        else if(this.isEmailExists(this.user.email)){
            alert("Error. Email alredy exists.");
        }
        else{
            let userToAdd = new User();
            userToAdd.fullName = this.user.fullName;
            userToAdd.userName = this.user.userName;
            userToAdd.password = this.user.password;
            userToAdd.email = this.user.email;
            userToAdd.birthDate = this.user.birthDate;
            let observable = this.usersService.addUser(userToAdd);
            observable.subscribe(u => {
                alert(`
                Congratulations!!!
                You registered successfully!
                Your new user has been created.
                Please enjoy our website :)`);
                this.users.push(u);
            });
        }
    }
    
    /// Returns true if the given user name already belongs to an existing user.
    /// Otherwise, returns false.
    public isUserNameExists(userName: string): boolean {
        for(let i=0;i<this.users.length;i++)
            if(this.users[i].userName === userName)
                return true;
        return false;
    }

    /// Returns true if the given email already belongs to an existing user.
    /// Otherwise, returns false.
    public isEmailExists(email: string): boolean {
        for(let i=0;i<this.users.length;i++)
            if(this.users[i].email === email)
                return true;
        return false;
    }

    /// Function for sign out, of the current user.
    public signOut(): void {
        sessionStorage.setItem("IsLoggedIn", "false");
    }

}
