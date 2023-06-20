import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/log/login/login.component';
import { RegisterComponent } from './modules/log/register/register.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: "", component: AppComponent},
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent}
];
export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
