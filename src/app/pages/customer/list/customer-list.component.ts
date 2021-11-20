import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Customer } from 'src/app/models/customer/customer';

import customerjson from 'src/app/data/customer/customer.json';

import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  Customer: any = customerjson;

  constructor(private customerService: CustomerService) { }

  ngOnInit():void { }
}
