import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import salejson from 'src/app/data/sale/sale.json';
import { SaleService } from 'src/app/services/sale/sale.service';
import { Sale } from '../../models/sale/sale';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.scss']
})

export class SaleListComponent implements OnInit {

  Sale: any = salejson;
  Salee: any= [];

  sale = {

    Units:0,
    Weight:0,
    Price:0.0,
    resultado_total_price:0.0,
    resultado_total_weight:0

  }

  constructor(private saleService: SaleService, private http: HttpClient) { }

  ngOnInit() {
    console.log("Epaaa");
    this.getUsers().subscribe(res =>{
      console.log("Res",res)
      this.Salee = res;
    });
    
  }

  getUsers(){
    return this.http
    .get("src/app/services/sale/sale.service")
    .pipe(
      map((res:any) =>{
        return res.data;
      })
    )
  }

  calculopesototal(){


      this.sale.Units * this.sale.Weight == this.sale.resultado_total_weight

  }

  calculopreciototal(){


    this.sale.Units * this.sale.Price == this.sale.resultado_total_price

  }

}
