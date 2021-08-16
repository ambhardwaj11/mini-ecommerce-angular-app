import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CheckoutformComponent } from './checkoutform/checkoutform.component';
import { LpComponent } from './lp/lp.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductShopComponent } from './product-shop/product-shop.component';


const routes: Routes = [

  { path: 'products/:productID', component: ProductShopComponent },
  { path: 'products', component: ProductDetailsComponent },
  { path: 'cart', component: CartItemsComponent},
  { path: 'checkout', component: CheckoutformComponent },
  { path: '', component: LpComponent }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
