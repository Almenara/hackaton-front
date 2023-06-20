import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LogInComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LogModule { }
