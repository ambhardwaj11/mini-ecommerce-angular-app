import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  constructor( private cart : CartService  ) { }

  products = this.cart.getProducts()
  sum:number;
  newPrice:number=0;
  shippingPrice:number=8;
  totalPrice:number;

  ngOnInit(): void {

    this.updateCart()

  }

  updateCart(){
    this.sum=0
    for(let  i=0; i<this.products.length; i++){
      this.sum = this.sum + this.products[i].price
    }
      this.totalPrice = this.sum + this.shippingPrice;
  }

    onkey(product, value ){

    this.newPrice = value * product.price
    this.sum = this.sum - product.price + this.newPrice
    this.totalPrice = this.totalPrice + this.newPrice + this.shippingPrice
    this.updateCart()

  }

  deleteProduct(product:any){

    const index = this.products.indexOf(product)
    this.products.splice(index,1) 
    this.updateCart()
  }


}
