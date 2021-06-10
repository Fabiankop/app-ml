import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './products/pages/home/home.component';
import { ResultComponent } from './products/pages/result/result.component';
import { SingleProductComponent } from './products/pages/single-product/single-product.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
},
{
    path: 'items',
    component: ResultComponent,
},
{
    path: 'items/:productId',  /// ':id' Parameter argument
    component: SingleProductComponent
},
{
    path: '**',
    redirectTo: ''
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
