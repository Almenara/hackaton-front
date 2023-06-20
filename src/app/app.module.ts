import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListModule } from './modules/list/list.module';
import { MainService } from './services/main.service';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './modules/log/login/login.component';
import { RegisterComponent } from './modules/log/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MapService } from './services/map.service';
import { PopupService } from './services/popup.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    ListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MainService,
    MapService,
    PopupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
