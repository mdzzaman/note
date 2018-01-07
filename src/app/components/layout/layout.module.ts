import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { PublicLayoutComponent } from './public-layout/public-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [PublicLayoutComponent],
  exports: [PublicLayoutComponent]
})
export class LayoutModule { }
