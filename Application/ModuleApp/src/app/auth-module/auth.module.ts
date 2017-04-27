import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthRoutes } from "./auth.router";

import { LoginComponent } from './component/login/login.component';
import { AuthComponent } from './component/auth/auth.component';
import { RegisterComponent } from './component/register/register.component';
import { LogoutComponent } from './component/logout/logout.component';

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    AuthRoutes
  ],
  providers: [],
  bootstrap: [AuthComponent]
})
export class AuthModule { }
