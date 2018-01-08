import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NavigationModule
  ],
  declarations: [PublicLayoutComponent],
  exports: [PublicLayoutComponent]
})
export class LayoutModule { }
