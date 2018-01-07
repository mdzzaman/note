import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatSelectModule,
  MatTabsModule,
  MatDialogModule,
  MatListModule,
  MatProgressBarModule
} from '@angular/material';

@NgModule({
  imports: [
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    MatListModule,
    MatProgressBarModule
  ],
  declarations: [],
  exports: [
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    MatListModule,
    MatProgressBarModule
  ]
})
export class MaterialShareModule { }
