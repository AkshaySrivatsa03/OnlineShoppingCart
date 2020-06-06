import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(
    private http:HttpClient)
    {}

  // allows for duplicate entries
  // figure out how to add a number to the entries, so that 
  // when a user adds the same product repeatedly, we only increment the
  // count of the product
  addToCart(product){
    this.items.push(product);
  }

  // unused. I don't know two things
  // where to place the button to modify the cart
  // how to identify the same product
  removeFromCart(product){
    const index = this.items.indexOf(product, 0);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }

}
