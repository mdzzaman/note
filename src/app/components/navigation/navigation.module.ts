import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CreateCategoryDialogComponent } from './create-category-dialog/create-category-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [SideNavComponent, CreateCategoryDialogComponent],
  exports: [SideNavComponent],
  entryComponents: [CreateCategoryDialogComponent]
})
export class NavigationModule { }
