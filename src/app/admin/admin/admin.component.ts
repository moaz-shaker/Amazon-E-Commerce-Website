import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  template: `
    <mat-card *ngFor="let product of products">
      <mat-card-title>{{ product.name }}</mat-card-title>
      <mat-card-content>{{ product.price }}</mat-card-content>
      <mat-card-content>{{ product.id }}</mat-card-content>
      <mat-card-content>{{ product.category }}</mat-card-content>
      <mat-card-content>{{ product.rating }}</mat-card-content>
      <mat-card-content>{{ product.count }}</mat-card-content>
      <mat-card-content>{{ product.image }}</mat-card-content>
      <mat-card-content>{{ product.description }}</mat-card-content>
      <mat-card-actions>
        <button mat-raised-button (click)="editProduct(product)">Edit</button>
        <button mat-raised-button (click)="deleteProduct(product)">Delete</button>
      </mat-card-actions>
    </mat-card>
  `
})
export class AdminComponent implements OnInit {
  products: any[]=[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://fakestoreapi.com/products')
      .subscribe((response: any) => {
        this.products = response;
      }, (error: any) => {
        // Handle error
      });
  }

  editProduct(product: any): void {
    // Edit product
  }

  deleteProduct(product: any): void {
    // Delete product
  }
}