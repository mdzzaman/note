import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [SideNavComponent],
  exports: [SideNavComponent]
})
export class NavigationModule { }
