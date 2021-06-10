import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { ResultComponent } from './pages/result/result.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    ResultComponent,
    SingleProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    ResultComponent,
    SingleProductComponent
  ]
})
export class ProductsModule { }
