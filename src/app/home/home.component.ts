import { Component, OnInit } from '@angular/core';
 import {RegServiceService} from '../reg-service.service';
 import { UserRegistrationComponent } from '../user-registration/user-registration.component';

// import {Register} from './register/user-registration';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
constructor(private reg : RegServiceService) { }


  ngOnInit(): void {

  }

}
