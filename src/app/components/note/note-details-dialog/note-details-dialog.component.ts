import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { INote } from '../../../interface/INote';

@Component({
  selector: 'app-note-details-dialog',
  templateUrl: './note-details-dialog.component.html',
  styleUrls: ['./note-details-dialog.component.scss']
})
export class NoteDetailsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NoteDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: INote) {
   }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
