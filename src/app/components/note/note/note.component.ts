import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NoteDetailsDialogComponent } from '../note-details-dialog/note-details-dialog.component';
import { INote } from '../../../interface/INote';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  noteForm: FormGroup;
  selectedCategory: any;
  isFocuse: boolean = false;
  isEdit: boolean = false;
  noteList: Array<INote> = [
    {
      id: 1,
      category_id: 1,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      title: "Note"
    },
    {
      id: 2,
      category_id: 1,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      title: "Note"
    },
    {
      id: 3,
      category_id: 1,
      description: "This is description of note",
      title: "Note"
    },
    {
      id: 4,
      category_id: 1,
      description: "This is description of note",
      title: "Note"
    },
    {
      id: 5,
      category_id: 1,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      title: "Note"
    }
  ];
  categories: Array<any> = [
    { name: 'Cat 1', id: 1 },
    { name: 'Cat 2', id: 2 },
    { name: 'Cat 3', id: 3 }
  ];

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.createForm();
  }

  ngOnInit() {
    this.selectedCategory = 1;
  }

  createForm() {
    this.noteForm = this.fb.group({
      //title: ['', Validators.required],
      id: [''],
      title: [''],
      description: [''],
      category_id: ['']
    });

    this.noteForm.patchValue({
      category_id: 1
    });

  }

  focus() {
    this.isFocuse = true;
  }

  blur() {
    this.isFocuse = this.noteForm.get('title').value || this.noteForm.get('description').value ? true : false;
  }

  save() {
    let newNote = this.noteForm.value as INote;
    this.noteList.push(newNote);
    this.cancle();
  }

  cancle() {
    this.noteForm.reset();
    this.isFocuse = false;
  }

  details(data: INote) {
    let dialogRef = this.dialog.open(NoteDetailsDialogComponent, {
      //width: '250px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categories.push({ name: result });
      }
    });
  }

  star(data: INote) {

  }

  done(data: INote) {

  }

  edit(data: INote) {
    this.noteForm.setValue(data);
    this.isFocuse = true;
  }
}
