import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuardGuard } from './login-guard.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisteredComponent } from './user-registration/registered/registered.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
// {path:'', component: LoginComponent, canActivate:[LoginGuardGuard]},
{path:'login', component: LoginComponent},
{path:'home', component: HomeComponent},
 {path:'contactUs', component: ContactUsComponent},
 {path:'aboutUs', component: AboutUsComponent},
 {path:'logout', component: LoginComponent},
 {path:'registered', component:RegisteredComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
