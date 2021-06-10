import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product-service.service';
import { RESTProductResponse } from '../../interfaces/result.interface';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit{

  products!: RESTProductResponse;    //Objet result apisearch
  breadcumbs: string = '';
  results: Array<any> =  [];

  /* ObjResult!: ObjMercadoLibre; */

  ObjResult: any;
  categories: any; 
  

  constructor( 
    private productService: ProductService, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

      this.ObjResult = {

        author: {
          name: 'Fabián',
          lastname: 'Rodríguez'},
        
        categories : [],
        items : []
      };

      this.activatedRoute.queryParams
        .subscribe( ({search}) =>{

        this.productService.getListProduct(search)
          .subscribe( (prod) => {

            this.products = prod;

            // Object feed Mercado Libre

            this.ObjResult.items = this.products.results;

            

            var total = 0;

            this.products.available_filters[0].values.forEach( category => {

              // Get Category More results

              if(category.results > total ){

                this.breadcumbs = category.name;
                total = category.results;
              }

            this.ObjResult.categories.push(category.name);

            });

            console.log(this.ObjResult)

          }, (err) =>{

            /* this.products = new Object */
          })

          

          
      })
      
  }

  


  

}
