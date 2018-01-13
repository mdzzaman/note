import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { NoteComponent } from './note/note.component';
import { NoteRoutes } from './note.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(NoteRoutes)
  ],
  declarations: [NoteComponent]
})
export class NoteModule { }
