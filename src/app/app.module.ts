import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
// import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { LogoutComponent } from './logout/logout.component';
 import {RegServiceService} from './reg-service.service';
 import { Register } from './user-registration/register';
import { RegisteredComponent } from './user-registration/registered/registered.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// import {Form} from './login';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    UserRegistrationComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    // RegisteredUsersComponent,
    LogoutComponent,
    RegisteredComponent,
    HeaderComponent,
    FooterComponent

    

 
    
    // Form
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
      
  
  ],
 
  providers: [RegServiceService,Register],
  bootstrap: [AppComponent]
})
export class AppModule { }
