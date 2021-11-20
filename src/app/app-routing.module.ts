import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from './pages/customer/list/customer-list.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { SaleListComponent } from './pages/sale-list/sale-list.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app' },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'sale-list', component: SaleListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
