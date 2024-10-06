import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shopping_cart_items: any[]=[];
  searchResults: any[] = [];

  constructor() { }
  addProduct = (product: any)=>{
    let items = this.get_shopping_cart_items();
    if(items){
      items.push(product)
      localStorage.setItem('shopping_cart', JSON.stringify(items))
    }else{
      this.shopping_cart_items.push(product);
       localStorage.setItem('shopping_cart', JSON.stringify(this.shopping_cart_items))
    }
  }

  get_shopping_cart_items=()=>{
    let items = localStorage.getItem('shopping_cart')
    return JSON.parse(items || '[]')
  }
  getCartLength =()=>{
    let items = this.get_shopping_cart_items();
    return items? this.get_shopping_cart_items().length: 0

  }
  getTotal = ()=>{
    let items = this.get_shopping_cart_items();
    return items?.reduce((count:any, item:any)=> count+ item.price, 0)

  }
  removeItem=(product:any)=>{
    console.log('remove', product)
    let items = this.get_shopping_cart_items();
    
    const index = items.findIndex((item:any)=> item.id == product.id);
    if(index>=0){
      console.log('hitting if')
      items.splice(index, 1);
      return localStorage.setItem('shopping_cart', JSON.stringify(items))
    }

  }
  searchProducts = (query: string) => {
    let items = this.get_shopping_cart_items();
    return items.filter((item: any) => 
      item.name.toLowerCase().includes(query.toLowerCase()) || 
      item.details.toLowerCase().includes(query.toLowerCase())
    );
  }
}
