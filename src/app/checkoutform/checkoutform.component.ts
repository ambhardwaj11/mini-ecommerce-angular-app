import { Component, OnInit } from '@angular/core';
import { Contact } from '../Contact';

@Component({
  selector: 'app-checkoutform',
  templateUrl: './checkoutform.component.html',
  styleUrls: ['./checkoutform.component.css']
})
export class CheckoutformComponent implements OnInit {

  submitted:boolean=false;
  msg:string="gmail.com"
   contact =new Contact()
  constructor() { }

  submit(form ){

    this.contact.firstName = form.firstName;
    this.contact.lastName = form.lastName;
    this.contact.email = form.email;
    // this.contact.password = form.password;

    window.alert("Cart is successfully submitted by " +  this.contact.firstName)
      // console.log(form)
      this.submitted=true;

  }

  ngOnInit(): void {
  }

}
