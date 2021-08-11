import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Product } from 'src/product';

@Component({
  selector: 'app-alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.css']
})
export class AlertDetailsComponent implements OnInit {

 @Input() product : Product;
 
 @Input() isUnchanged;
@Output() notify = new EventEmitter<Product>()

  constructor() { }

  ngOnInit(): void {
  }

  clickMe(){
    this.notify.emit(this.product)
  }

}
