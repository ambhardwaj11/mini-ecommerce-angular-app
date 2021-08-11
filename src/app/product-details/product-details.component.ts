import { Component, OnInit } from '@angular/core';
import { products } from 'src/data/products';
import { Product } from 'src/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  products :Product[] = products;
  isUnchanged:boolean=true
  
  clickMe(product : Product){
    alert( product.name +" course is available")  
  }

  enableBuying(){
    this.isUnchanged =!this.isUnchanged;
  }

  constructor() { }

  ngOnInit(): void {
  }

  title:string= "aman bhardwaj";
}
