import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing.module';
import { MatIconModule, MatInputModule, MatButtonModule, MatCheckboxModule } from "@angular/material";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from '../components/layout/layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MenuComponent } from '../components/menu/menu.component';
import { Page404Component } from '../components/page404/page404.component';
import { HomeComponent } from '../components/home/home.component';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';
import { FeedbacksComponent } from '../components/feedbacks/feedbacks.component';
import { ResultsComponent } from '../components/results/results.component';
import { ContactComponent } from '../components/contact/contact.component';
import { AboutComponent } from '../components/about/about.component';
import { FeedbackComponent } from '../components/feedback/feedback.component';
import { GameComponent } from '../components/game/game.component';
import { HttpClientModule } from "@angular/common/http";
import { MatrixComponent } from '../components/matrix/matrix.component';
import { SquareComponent } from '../components/square/square.component';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        Page404Component,
        HomeComponent,
        RegisterComponent,
        LoginComponent,
        FeedbacksComponent,
        ResultsComponent,
        ContactComponent,
        AboutComponent,
        FeedbackComponent,
        GameComponent,
        MatrixComponent,
        SquareComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        RoutingModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatAutocompleteModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [LayoutComponent]
})
export class AppModule { }