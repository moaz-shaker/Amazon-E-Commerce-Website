import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) { }

  getProductsJson(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
