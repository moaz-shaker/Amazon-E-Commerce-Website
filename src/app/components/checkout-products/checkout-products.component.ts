import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css']
})

export class CheckoutProductsComponent implements OnInit {
  @Input() checkout_products: any []=[];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter()
   constructor(public shopping_cart_service: ShoppingCartService) { }

  ngOnInit(): void {
    console.log('products', this.checkout_products)
  }

  removeItem(product: any){
    if (this.checkout_products.includes(product)) {
      this.shopping_cart_service.removeItem(product);
      this.checkout_products = this.checkout_products.filter(item => item !== product);
      this.deleteEvent.emit(product);
    }
  }

}
