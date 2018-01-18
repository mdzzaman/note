import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateCategoryDialogComponent } from '../create-category-dialog/create-category-dialog.component';
import { ConfirmationComponent } from '../../dialog/confirmation/confirmation.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  navigation: Array<any> = [];
  categories: Array<any> = [];
  time: Date = new Date();
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.navigationData();
    // for test
    this.categories.push({ name: "Cat 1" });
    this.categories.push({ name: "Cat 2" });
    this.categories.push({ name: "Cat 3" });
  }

  navigationData() {
    this.navigation.push({ name: 'Note', icon: 'note', url: '/' });
    this.navigation.push({ name: 'Done', icon: 'done', url: '/done' });
    this.navigation.push({ name: 'Star', icon: 'star', url: '/star' });
  }

  addCategory() {
    let dialogRef = this.dialog.open(CreateCategoryDialogComponent, {
      width: '250px',
      data: { name: "" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categories.push({ name: result });
      }
    });
  }

  selectCategory() {

  }

  categoryEdit(category: any) {
    let dialogRef = this.dialog.open(CreateCategoryDialogComponent, {
      width: '250px',
      data: { name: category.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        category.name = result;
      }
    });
  }

  caregoryDelete(category: any) {
    let dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '250px',
      data: { name: category.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      debugger;
      console.log(result);
      if (result) {
        category.name = result;
      }
    });
  }
}
