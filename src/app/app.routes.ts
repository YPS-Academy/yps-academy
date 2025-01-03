import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "login", component: LoginSignupComponent }
];
