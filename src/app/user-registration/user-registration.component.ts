import { Component, OnInit } from '@angular/core';
import {Register} from './register';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
register: Register;
  constructor() { }
  model:any;
uname: string;
user:any ={};
  ngOnInit(): void {
  }
onRegister(register){
  
   
   console.log(register.firstName);
   console.log(register.lastName);
   console.log(register.gender);
    console.log(register.mobile);
     console.log(register.email);
this.model=[
  {firstname :  register.firstName,
    lastname : register.lastName,
    gender : register.gender,
    mobile: register.mobile,
    email: register.email
  
   
    
  
}
  
]
this.user =Object.apply(this.user, this.model); 
//localStorage.setItem('Users',JSON.stringify(this.user));
 this.addUser(this.user);
  
}
addUser(user){
  let users=[];
  if(localStorage.getItem('Users')){
    users = JSON.parse(localStorage.getItem('users'));
    users=[user,...users];
    
  }else{
    users=[user];
  }
   localStorage.setItem('Users',JSON.stringify(user));
  
   }

}
