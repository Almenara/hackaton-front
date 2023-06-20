import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ListModule } from './modules/list/list.module';
import { CoreModule } from './core/core.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/log/login/login.component';
import { RegisterComponent } from './modules/log/register/register.component';
import { MapService } from './services/map.service';
import { PopupService } from './services/popup.service';


import { MainService } from './services/main.service';

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
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    MainService,
    MapService,
    PopupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
