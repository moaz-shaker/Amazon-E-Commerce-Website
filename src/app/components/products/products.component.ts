import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  @Input() products: any[]=[];
  constructor(private shopping_cart_service: ShoppingCartService) { }

  ngOnInit(): void {
    this.getProducts( )
  }
  getProducts(){
    this.shopping_cart_service.get_shopping_cart_items().subscribe((data: any) => {
      this.products = data;
      console.log(this.products)
    });
  }
  addToCart(product: any) {
    this.shopping_cart_service.addProduct(product); 
  }
  
}
