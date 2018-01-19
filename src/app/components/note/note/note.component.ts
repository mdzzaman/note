import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
      id:1,
      category_id:1,
      description:"This is description of note",
      title:"Note"
    },
    {
      id:2,
      category_id:1,
      description:"This is description of note",
      title:"Note"
    },
    {
      id:3,
      category_id:1,
      description:"This is description of note",
      title:"Note"
    },
    {
      id:4,
      category_id:1,
      description:"This is description of note",
      title:"Note"
    },
    {
      id:5,
      category_id:1,
      description:"This is description of note",
      title:"Note"
    }
  ];
  categories: Array<any> = [
    { name: 'Cat 1', id: 1 },
    { name: 'Cat 2', id: 2 },
    { name: 'Cat 3', id: 3 }
  ];
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.selectedCategory = 1;
  }

  createForm() {
    this.noteForm = this.fb.group({
      //title: ['', Validators.required],
      title: [''],
      description: [''],
      category: ['']
    });

    this.noteForm.patchValue({
      category: 1
    });

  }

  focus() {
    this.isFocuse = true;
  }

  blur() {
    this.isFocuse = this.noteForm.get('title').value || this.noteForm.get('description').value ? true : false;
  }

  save(){
    let newNote = this.noteForm.value as INote;
    this.noteList.push(newNote);
    this.cancle();
  }

  cancle() {
    this.noteForm.reset();
    this.isFocuse = false;
  }

}
