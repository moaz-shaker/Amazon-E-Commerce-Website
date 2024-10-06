import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { RouterModule } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CommonModule } from '@angular/common';   
import { AuthService } from 'src/app/services/auth.service';

@Component({
  standalone: true,
  imports: [MatIconModule, RouterModule,
  CommonModule],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { 
  userName: any | null = null;
  searchResults: any[] = [];

  constructor(public ShoppingCart: ShoppingCartService, public userService: UserService, public auth:AuthService) { }

  ngOnInit(): void {
    this.userName = this.userService.getUsers();
    console.log(this.userName);
  }

  onSearch(query: string): void {
    this.searchResults = this.ShoppingCart.searchProducts(query);
    console.log(this.searchResults);
  }

  searchProduct(event: Event): void {
  const target = event.target as HTMLInputElement | null;
  if (target && target.value) {
    this.onSearch(target.value);
  }
}
  SignOut(){
  this.auth.logOut()
  }
}