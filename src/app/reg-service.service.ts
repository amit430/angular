import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { Register } from './user-registration/register';


@Injectable({
  providedIn: 'root'
})
export class RegServiceService {
register: Register;
 //constructor(private reg : RegServiceService) { }
    model:any;
    
    getMessage(register){
      
      console.log("&&&&&&&&&&&&&&"+register.firstName)
    }
    
    
 // onRegister(register){
 //   return register;
   //  console.log("&&&&&&&&&&&&&&"+register.firstName)
    // this.model = register;
    // return this.model;
 //  console.log(register.firstName);
//    console.log(register.lastName);
//    console.log(register.gender);
//     console.log(register.mobile);
//      console.log(register.email);
// this.model=[
//   {firstname :  register.firstname,
//     lastname : register.lastName,
//     gender : register.gender,
//     mobile: register.mobile,
//     email: register.email
  
    
    
  
// }
  
//  ]

  
}
  
//}
