import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { CreateCategoryDialogComponent } from '../create-category-dialog/create-category-dialog.component';
import { ConfirmationComponent } from '../../dialog/confirmation/confirmation.component';
import { ICategory } from '../../../interface/ICategory';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  private categoryCollection: AngularFirestoreCollection<ICategory>;
  private categoryDoc: AngularFirestoreDocument<ICategory>;
  navigation: Array<any> = [];
  categories: Observable<ICategory[]>;
  time: Date = new Date();
  constructor(private dialog: MatDialog, private db: AngularFirestore) {
    this.categoryCollection = db.collection<ICategory>('category');
    //this.items = this.itemsCollection.valueChanges();
  }

  ngOnInit() {
    this.navigationData();
    // for test
    this.getCategory();
  }

  navigationData() {
    this.navigation.push({ name: 'Note', icon: 'note', url: '/' });
    this.navigation.push({ name: 'Done', icon: 'done', url: '/done' });
    this.navigation.push({ name: 'Star', icon: 'star', url: '/star' });
  }

  getCategory() {
    this.categories = this.categoryCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        let data = a.payload.doc.data() as ICategory;
        let doc_id = a.payload.doc.id;
        return { doc_id, ...data };
      });
    });

    // this.categories = this.categoryCollection.valueChanges();
    // debugger;
  }

  addCategory() {
    let dialogRef = this.dialog.open(CreateCategoryDialogComponent, {
      width: '250px',
      data: { name: "" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Persist a document id
        let id = this.db.createId();
        let item: ICategory = { id: id, name: result };
        this.categoryCollection.add(item);
        this.getCategory();
        //this.categories.push({ name: result });
      }
    });
  }

  selectCategory() {

  }

  categoryEdit(category: ICategory) {
    let dialogRef = this.dialog.open(CreateCategoryDialogComponent, {
      width: '250px',
      data: { name: category.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        category.name = result;
        this.categoryCollection.doc(category.doc_id).update({
          name: result
        }).then(() => {
          console.log('updated');
        })

        // this.categoryDoc = this.db.doc<ICategory>('category/' + category.doc_id);
        // this.categoryDoc.update(category);
      }
    });
  }

  caregoryDelete(category: ICategory) {
    let dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '250px',
      data: { name: category.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        category.name = result;
        this.categoryCollection.doc(category.doc_id).delete().then(() => {
          console.log('deleted');
        })

        // this.categoryDoc = this.db.doc<ICategory>('category/' + category.doc_id);
        // this.categoryDoc.delete(category);
      }
    });
  }
}
