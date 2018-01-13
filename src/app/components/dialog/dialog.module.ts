import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatDialogModule
} from '@angular/material';

import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  imports: [
    MatButtonModule,
    MatDialogModule,
    CommonModule
  ],
  declarations: [ConfirmationComponent],
  entryComponents: [ConfirmationComponent]
})
export class DialogModule { }
