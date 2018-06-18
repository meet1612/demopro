import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewproComponent } from './viewpro/viewpro.component';
import { EditproComponent } from './viewpro/editpro/editpro.component';
import { ForgetComponent } from './login/forget/forget.component';
import { ChangepassComponent } from './viewpro/changepass/changepass.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ViewproComponent,
    EditproComponent,
    ForgetComponent,
    ChangepassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
