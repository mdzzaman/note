import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent implements OnInit {
  noteForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.noteForm = this.fb.group({
      //title: ['', Validators.required],
      title: [''],
      description: ['']
    });
  }

}
