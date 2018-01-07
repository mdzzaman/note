import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NoteComponent } from './note/note.component';
import { NoteRoutes } from './note.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(NoteRoutes)
  ],
  declarations: [NoteComponent]
})
export class NoteModule { }
