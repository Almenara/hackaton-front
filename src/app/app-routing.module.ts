import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './modules/list/list.component';
import { LoginComponent } from './modules/log/login/login.component';
import { RegisterComponent } from './modules/log/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './core/layout/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'list', component: ListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
           HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
