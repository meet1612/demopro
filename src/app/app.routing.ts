import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewproComponent } from './viewpro/viewpro.component';
import { EditproComponent } from './viewpro/editpro/editpro.component';
import { ForgetComponent } from './login/forget/forget.component';
import { ChangepassComponent } from './viewpro/changepass/changepass.component';

const arr:Routes=[
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'viewpro/:id',component:ViewproComponent},
  {path:'editpro/:id',component:EditproComponent},
  {path:'forget',component:ForgetComponent},
  {path:'changepass/:id',component:ChangepassComponent}
];
export const routing=RouterModule.forRoot(arr);
