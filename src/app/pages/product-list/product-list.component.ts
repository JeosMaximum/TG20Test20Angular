import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


import productjson from 'src/app/data/product/product.json';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from '../../models/product/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  Product: any = productjson;

  Salee:any=null;

  product = {

    Price:0.0,
    Weight:0.0,
    resultado_total_price:0.0

  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }



    calculodescendente(){

      if(this.Product.Price == this.Product.Weight) {
        return 0; 
      }
      if(this.Product.Price > this.Product.Weight) {
        return -1;
      }
      return 1;
    };

}
