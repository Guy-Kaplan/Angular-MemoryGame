import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    public user: User = new User();
    public users: User[];
    public userLoggedIn: string;

    public constructor(public usersService: UsersService, private router: Router) { }

    public ngOnInit(): void {
        this.userLoggedIn = sessionStorage.getItem("UserLoggedIn");
        let observable = this.usersService.getAllUsers();
        observable.subscribe(users => {
            this.users = users;
        });
        if(!this.usersService.isLoggedIn()){
            setTimeout(() => {
                this.router.navigate(['login']);
            }, 2000); //redirects after 2 seconds
        }
    }
}