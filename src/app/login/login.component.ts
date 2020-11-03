import { Component, OnInit } from '@angular/core';
import {Form} from './login';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form: Form;
error: string;
 // constructor() { }
  constructor(private router:Router){}
  ngOnInit(): void {
  }
onSubmit(form){

  if(form.username =='admin'&& form.password=='admin'){
   console.log(form.username+"*********"+form.password);
  this.router.navigate(['/home']);

  }else{
   alert("Input not valid. Please try again");
    this.router.navigate(window.open['/login']);
    
  } 
  
}
}
