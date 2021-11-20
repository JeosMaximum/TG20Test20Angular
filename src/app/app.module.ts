import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CustomerListComponent } from './pages/customer/list/customer-list.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { SaleListComponent } from './pages/sale-list/sale-list.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SaleService } from 'src/app/services/sale/sale.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { ProductService } from 'src/app/services/product/product.service';


registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    ProductListComponent,
    SaleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    MatSlideToggleModule,
    NzMenuModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES },[CustomerService,ProductService,SaleService]],
  bootstrap: [AppComponent]
})
export class AppModule { }
