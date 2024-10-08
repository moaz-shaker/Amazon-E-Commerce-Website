import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items: any [] = [];

  constructor(public shopping_cart: ShoppingCartService) { }

  ngOnInit(): void {
    this.getShoppingCart()
  }

  getShoppingCart(){
    this.items = this.shopping_cart.get_shopping_cart_items();
  }

  deleteEventHandler(product: any){
    this.shopping_cart.removeItem(product); // Call the service to remove the item
    this.getShoppingCart(); // Refresh the cart items
  }
}
