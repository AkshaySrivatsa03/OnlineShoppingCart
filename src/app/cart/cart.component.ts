import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service'; 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
// How can I dynamically change the elements of this page?
// Add a button to the page.. how to refresh the page?
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    });
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData){
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

}
