import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; 
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
interface Product {
  title: string;
  image: string;
  price: number;
  id: number;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  description: string;
}

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  product: Product | null = null;
  cart: any[] = [];

  constructor(private http: HttpClient, private router: Router, public route: ActivatedRoute,private shopping_cart: ShoppingCartService) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.http.get<Product>(`https://fakestoreapi.com/products/${productId}`)
        .subscribe((response: Product) => {
          this.product = response; 
        });
    });
  }
  
  addToCart(product: Product): void {
    this.shopping_cart.addProduct(product);
  }

  editProduct(product: any): void {
    this.router.navigate(['/edit-product', product.id]);
  }

  onImageError(event: any): void {
    event.target.src = 'assets/images/image-not-found.png';
  }

  removeProduct(product: Product): void {
    console.log('Product removed:', product);
    this.cart = this.cart.filter(item => item.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    if (this.product && this.product.id === product.id) {
      this.product = null;
    }
  }
}