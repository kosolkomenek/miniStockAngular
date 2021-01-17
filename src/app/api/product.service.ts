import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from './ProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  apiUrl = "http://192.168.64.2/dashboard";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }

  getProduct():Observable<ProductModel>{
     return this.http.get<ProductModel>(this.apiUrl +'/product.php');
  }

  save(product: any): Observable<ProductModel>{
    return this.http.post<ProductModel>(this.apiUrl +'/save.php', product, {
      headers: {'content-type':'application/x-www-form-urlencoded'}
    })
  }
}
