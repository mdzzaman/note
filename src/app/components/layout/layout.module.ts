import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PublicLayoutComponent } from './public-layout/public-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PublicLayoutComponent],
  exports: [PublicLayoutComponent]
})
export class LayoutModule { }
