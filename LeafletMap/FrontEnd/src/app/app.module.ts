import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from "ngx-pagination";

import { AppComponent } from './app.component';

import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';

import { CustomerService } from './customers/customer.service';
import { UpdateCustomerComponent } from './customers/update-customer/update-customer.component';
import {Customer1Service} from "./customers/Customer1.service";
import { ViewLocationsComponent } from './customers/view-locations/view-locations.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Location1Service} from "./customers/Location1Service";
import { LocationsComponent } from './customers/locations/locations.component';

// import { AddCustomerComponent } from './customers/add-customer/add-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CustomerDetailsComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    ViewLocationsComponent,
    LocationsComponent
    // AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,


  ],
  providers: [CustomerService,Customer1Service,Location1Service],
  bootstrap: [AppComponent]
})

export class AppModule { }
