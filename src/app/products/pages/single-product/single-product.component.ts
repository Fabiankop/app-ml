import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../services/product-service.service';
import { RESTProduct } from '../../interfaces/product.interface';
import { RESTProductDescription } from '../../interfaces/description.interface';
import { RESTObjMLProductID } from '../../interfaces/objMercadoLibreProductId.interface';
import { RESTObjMLCategoryID } from '../../interfaces/categoryProduct.interface';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  productId!: RESTProduct ;
  description!: RESTProductDescription;
  categoryID!: RESTObjMLCategoryID
  objMercadoLibre!: RESTObjMLProductID ;

  descriptionPlainTex: string = '';
  categoryName: string = '';


  constructor( 
    private productService: ProductService, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    //Init Object of type RESTObjMLProductID

    this. objMercadoLibre ={
      "author": {
          "name": "Fabián",
          "lastname": "Rodríguez"
      },
      "category": "",
      "condition": "", 
      "pictures": "",
      "free_shipping": false,
      "title": "",
      "price": {
        "currency": "",
        "amount": 0
      },
      "sold_quantity": 0
    }

    

    this.activatedRoute.params
        .subscribe( ({productId}) =>{

          this.productService.getProduct( productId )
          .subscribe( prod => {
            
            this.productId = prod; 

            // Object food Mercado Libre

            this.objMercadoLibre.pictures = this.productId.pictures[0].url;
            this.objMercadoLibre.title = this.productId.title;
            this.objMercadoLibre.price.amount =  this.productId.price;
            this.objMercadoLibre.price.currency =  this.productId.currency_id;
            this.objMercadoLibre.condition =  this.productId.condition;
            this.objMercadoLibre.sold_quantity =  this.productId.sold_quantity;
            this.objMercadoLibre.free_shipping =  this.productId.shipping.free_shipping;

            this.objMercadoLibre.category = this.productId.category_id;

            // Search in endpoint 'api/categories/{CatoryID}' and select the name of the category 

            this.productService.getProductCategory(this.objMercadoLibre.category)
            .subscribe( cat => {

                this.categoryID = cat;
                this.categoryName = this.categoryID.name

            });

          });

          // Search in endpoint API description and select the plain text of description 

          this.productService.getProductDescription( productId )
          .subscribe( desc=> {
            
                       
            this.description = desc; 

            this.descriptionPlainTex = this.description.plain_text;

          });

          
        });

        
  }

}
