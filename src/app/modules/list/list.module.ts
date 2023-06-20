import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListService } from 'src/app/services/list.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    ListComponent
  ],
  providers: [
    ListService
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
