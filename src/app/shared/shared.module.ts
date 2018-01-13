import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialShareModule } from './material-share/material-share.module';
import { DialogModule } from '../components/dialog/dialog.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialShareModule,
    DialogModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    MaterialShareModule,
    DialogModule
  ]
})
export class SharedModule { }
