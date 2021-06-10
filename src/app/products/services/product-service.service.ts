import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RESTProductResponse } from '../interfaces/result.interface';
import { RESTProduct } from '../interfaces/product.interface';
import { RESTProductDescription } from '../interfaces/description.interface';
import { RESTObjMLCategoryID } from '../interfaces/categoryProduct.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl ="https://api.mercadolibre.com";

  constructor( private http: HttpClient ) { }

  
  //Method for search product according to term

  getListProduct( term: string ): Observable<RESTProductResponse>{

    const url = `${ this.apiUrl }/sites/MLA/search?limit=4&q=${ term }`;

    return this.http.get<RESTProductResponse>(url);

  }

  //Method for search product according to id

  getProduct( id: string ): Observable<RESTProduct> {

    const url = `${ this.apiUrl }/items/${ id }`;

    return this.http.get<RESTProduct>(url);

  }

  getProductDescription( id: string ): Observable<RESTProductDescription>{

    const url = `${ this.apiUrl }/items/${ id }/description`;

    return this.http.get<RESTProductDescription>(url);

  }

  getProductCategory( category: string ): Observable<RESTObjMLCategoryID>{

    const url = `${ this.apiUrl }/categories/${ category }`;

    return this.http.get<RESTObjMLCategoryID>(url);

  }
}
