import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Form} from './login/login';
import { HomeComponent } from './home/home.component';
// import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(private router:Router){}
  
  uName: string;
  upass: string= 'admin';
  form:Form;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      // if((this.form.username==this.uName) && (this.form.password ==this.upass)){ 
       // this.uName = this.form.username;
          console.log("Inside Login gurad");
       this.router.navigate(['/home']);
     
    return false;
 // }
    }
}
