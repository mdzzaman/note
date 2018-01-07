import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialShareModule } from './material-share/material-share.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialShareModule
  ],
  declarations: [],
  exports:[
    CommonModule,
    MaterialShareModule
  ]
})
export class SharedModule { }
