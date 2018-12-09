import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';
import { FeedbacksComponent } from '../components/feedbacks/feedbacks.component';
import { ResultsComponent } from '../components/results/results.component';
import { ContactComponent } from '../components/contact/contact.component';
import { AboutComponent } from '../components/about/about.component';
import { FeedbackComponent } from '../components/feedback/feedback.component';
import { GameComponent } from '../components/game/game.component';
import { Page404Component } from '../components/page404/page404.component';


const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent },
    { path: "feedbacks", component: FeedbacksComponent },
    { path: "results", component: ResultsComponent },
    { path: "contact", component: ContactComponent },
    { path: "about", component: AboutComponent },
    { path: "feedback", component: FeedbackComponent },
    { path: "game", component: GameComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: Page404Component },

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
    ],
    declarations: []
})
export class RoutingModule { }