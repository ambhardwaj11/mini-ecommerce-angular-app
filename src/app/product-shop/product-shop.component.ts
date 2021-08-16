import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/data/products';
import { Product } from 'src/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.css']
})
export class ProductShopComponent implements OnInit {

  disabledButton:boolean=false;
  text:string="Add To Cart"
  submitted = false
  product:Product;
  constructor( private route :ActivatedRoute, private cart: CartService ) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get("productID"));
    this.product= products.find( product=> product.id == id);

  }

  addtocart(){
    this.disabledButton=true;
    this.text="Added To Cart"
    this.submitted=true

   this.cart.addProductstocart(this.product)

  }  

}
