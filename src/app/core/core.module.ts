import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgChartsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
})
export class CoreModule { }
