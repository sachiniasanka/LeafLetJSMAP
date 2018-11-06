import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UpdateCustomerComponent} from "./customers/update-customer/update-customer.component";
import {ViewLocationsComponent} from "./customers/view-locations/view-locations.component";
import {LocationsComponent} from "./customers/locations/locations.component";
// import {AddCustomerComponent} from "./customers/add-customer/add-customer.component";

const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomersListComponent },
  { path: 'add', component: CreateCustomerComponent },
  { path: 'update', component: UpdateCustomerComponent },
  { path: 'location', component: ViewLocationsComponent },

  // {
  //   path: "view-locations",
  //   component: ViewLocationsComponent
  //
  // },
  // {
  //   path:"locations",
  //   component:LocationsComponent
  //
  // },
  // {
  //   path:"customers-list",
  //   component:CustomersListComponent
  // },
  // {
  //   path:"update-customer",
  //   component:UpdateCustomerComponent
  // }

  // { path: 'add-customers', component: AddCustomerComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
