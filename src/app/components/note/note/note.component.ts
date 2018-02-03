import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { NoteDetailsDialogComponent } from '../note-details-dialog/note-details-dialog.component';
import { INote } from '../../../interface/INote';
import { ICategory } from '../../../interface/ICategory';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  noteForm: FormGroup;
  isProcessing: boolean = false;
  selectedCategory: any;
  isFocuse: boolean = false;
  isEdit: boolean = false;
  //categories: Observable<ICategory[]>;
  categories: ICategory[];
  noteList: Observable<INote[]>;
  editNoteModel: INote;

  private categoryCollection: AngularFirestoreCollection<ICategory>;
  private categoryDoc: AngularFirestoreDocument<ICategory>;

  private noteCollection: AngularFirestoreCollection<INote>;
  private noteDoc: AngularFirestoreDocument<INote>;

  constructor(private fb: FormBuilder, private dialog: MatDialog, private db: AngularFirestore) {
    this.categoryCollection = db.collection<ICategory>('category');
    this.noteCollection = db.collection<INote>('note');
    this.createForm();
    this.getCategory();
    this.getNote();
  }

  ngOnInit() {
    this.selectedCategory = 1;
  }

  getCategory() {
    this.categoryCollection.valueChanges().subscribe(response => {
      this.categories = response;
      this.selectedCategory = response.length > 0 ? response[0].id : '';
      this.noteForm.patchValue({
        category_id: this.selectedCategory
      });
    })
    //this.categories = this.categoryCollection.valueChanges();
    // this.categories = this.categoryCollection.snapshotChanges().map(actions => {
    //   return actions.map(a => {
    //     let data = a.payload.doc.data() as ICategory;
    //     let doc_id = a.payload.doc.id;
    //     return { doc_id, ...data };
    //   });
    // });
  }

  getNote() {
    this.noteList = this.noteCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        let data = a.payload.doc.data() as INote;
        let doc_id = a.payload.doc.id;
        return { doc_id, ...data };
      });
    });
  }

  createForm() {
    this.noteForm = this.fb.group({
      //title: ['', Validators.required],
      id: [''],
      title: [''],
      description: [''],
      category_id: ['']
    });
  }

  focus() {
    this.isFocuse = true;
  }

  blur() {
    this.isFocuse = this.noteForm.get('title').value || this.noteForm.get('description').value ? true : false;
  }

  save() {
    let newNote: INote = this.noteForm.value as INote;
    this.noteCollection.add(newNote);
    this.getNote();
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
        //this.categories.push({ name: result });
      }
    });
  }

  star(data: INote) {
    this.noteCollection.doc(data.doc_id).update(data).then(() => {
      console.log('updated');
    });
  }

  done(data: INote) {
    this.noteCollection.doc(data.doc_id).update(data).then(() => {
      console.log('updated');
    });
  }

  edit(data: INote) {
    this.isEdit = true;
    this.editNoteModel = data;
    this.noteForm.setValue({
      id: data.id,
      title: data.title,
      category_id: data.category_id,
      description: data.description
    });
    this.isFocuse = true;
  }

  update() {
    this.isProcessing = true;
    let updateNote: INote = this.noteForm.value as INote;
    this.noteCollection.doc(this.editNoteModel.doc_id).update(updateNote).then(() => {
      this.isEdit = false;
      this.cancle();
      this.isProcessing = false;
      console.log('updated');
    })
  }
}
