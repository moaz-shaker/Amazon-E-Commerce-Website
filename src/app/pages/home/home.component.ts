import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ApiService } from 'src/app/services/api.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";
import { ProductsComponent } from "../../components/products/products.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { UserService } from '../../services/user.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, HeaderComponent, ProductsComponent, BannerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[]=[];
  userName: any[]= [];
  constructor(private api: ApiService, public ShoppingCart: ShoppingCartService, public userService: UserService) { }

  ngOnInit(): void {
    this.getProducts( )
    this.userName = this.userService.getUsers();
    
  }
  getProducts(){
    this.api.getProductsJson().subscribe(response => {
      this.products = response;
    })
  }
  addToCart() {
  console.log("item added to cart");
  }
}
