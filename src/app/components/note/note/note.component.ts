import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

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

  cancle() {
    this.noteForm.reset();
    this.isFocuse = false;
  }

}
