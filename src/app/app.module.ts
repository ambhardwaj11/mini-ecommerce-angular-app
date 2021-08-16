import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AlertDetailsComponent } from './alert-details/alert-details.component';
import { ProductShopComponent } from './product-shop/product-shop.component';
import { AppRoutingModule } from './app-routing.module';
import { LpComponent } from './lp/lp.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CheckoutformComponent } from './checkoutform/checkoutform.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    AlertDetailsComponent,
    ProductShopComponent,
    LpComponent,
    CartItemsComponent,
    CheckoutformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
