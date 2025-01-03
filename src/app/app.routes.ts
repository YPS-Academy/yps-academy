import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StudDashComponent } from './components/studentsdata/stud-dash/stud-dash.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "login", component: LoginSignupComponent },
    {path:"stud-dashboard", component: StudDashComponent}, 


    // Wildcard route for a 404 page
    {path: "**", redirectTo: "page-not-found"},
    {path: "page-not-found", component: PageNotFoundComponent}
];
