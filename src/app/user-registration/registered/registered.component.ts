import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import {Register} from '../register';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {
@Input() public parentData;  
  constructor() { }

model:any;
register: Register;
  getUser: any ={};
  ngOnInit(): void {
 
     console.log("Registered component-------------- ");
   
    var data=JSON.parse(localStorage.getItem('Users'));
 
    
      console.log(data.lastname);
      
      this.model=[
     { firstname : data.firstname,
    lastname : data.lastname,
    gender : data.gender,
    mobile: data.mobile,
    email: data.email
  
}
  
]
      
  }
  
  
onRegister(register){
  this.getUser= localStorage.getItem('firstname');
   console.log("Parent data-------------- "+this.getUser);
   console.log(register.lastName);
   console.log(register.gender);
    console.log(register.mobile);
     console.log(register.email);
this.model=[
  // {firstname :  register.firstname,
  //   lastname : register.lastName,
  //   gender : register.gender,
  //   mobile: register.mobile,
  //   email: register.email
  
    
  { firstname : localStorage.getItem('firstname'),
    lastname : localStorage.getItem('lastname'),
    gender : localStorage.getItem('gender'),
    mobile: localStorage.getItem('mobile'),
    email: localStorage.getItem('email')
  
}
  
]

  
}
}
