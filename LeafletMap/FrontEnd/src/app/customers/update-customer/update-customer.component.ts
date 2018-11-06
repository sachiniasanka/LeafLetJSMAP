import {Component, OnInit, ViewChild} from '@angular/core';
import {Customer} from "../customer";
import {CustomerService} from "../customer.service";
import {subscribeOn} from "rxjs/operator/subscribeOn";
import {NgForm} from "@angular/forms";
import {Customer1Service} from "../Customer1.service";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {


  customers: Array<Customer> = [];
  selectedCustomers: Customer = new Customer();
  tempCustomers: Customer = null;
  manuallySelected: boolean = false;
  @ViewChild("frmCustomers") frmCustomers: NgForm;

  constructor(private customerService: Customer1Service) {
  }

  ngOnInit() {
    this.loadAllCustomers();
  }


  saveCustomer(): void{
    this.customerService.saveCustomer(this.selectedCustomers).subscribe(
      (result)=>{
        if (result){
          alert("Customer has been saved successfully");
          this.loadAllCustomers();
        }else{
          alert("Failed to save the customer");
        }
      }
    )
  }
  loadAllCustomers(): void {
    this.customerService.getAllCustomers()
      .subscribe(
      (result) => {
        this.customers = result;
        console.log(this.customers);
      }
    )
  }

  deleteCustomer(customer: Customer): void {
    if (confirm("Are you sure you want to delete this customer?")) {
      this.customerService.deleteCustomer(customer.id).subscribe(
        (result) => {
          if (result) {
            alert("Customer has been updated successfully");
          } else {
            alert("Failed to delete the customer");
          }
          this.loadAllCustomers();
        }
      )
    }
  }
  selectCustomer(customer: Customer): void {
    this.clear();
    this.selectedCustomers = customer;
    this.tempCustomers = Object.assign({}, customer);
    this.manuallySelected = true;
  }

  clear(): void {
    let index = this.customers.indexOf(this.selectedCustomers);
    if (index !== -1) {
      this.customers[index] = this.tempCustomers;
      this.tempCustomers = null;
    }
    this.selectedCustomers = new Customer();
    this.manuallySelected = false;
  }


  updateCustomer(): void{
    this.customerService.updateCustomer(this.selectedCustomers).subscribe(
      (result)=>{
        if (result){
          alert("Cusomer has been updated successfully");
          this.loadAllCustomers();
        }else{
          alert("Failed to update the customer");
        }
      }
    )
  }

















  // searchCustomer(){
  //
  //   this.customer = [];
  //   this.customerService.search(this.searchCustomer().subscribe((data:Customer) =>{
  //     this.customer.push(data);
  //   }));

  // }
  // update() {



  // update( customer:boolean) {
  //   this.customerService.updateCustomer(this.customer.id,
  //     { name: this.customer.name, age: this.customer.age })
  //     .subscribe(
  //     data => {
  //       console.log(data);
  //       this.customer = data as Customer;
  //     },
  //     error => console.log(error));
  // }
  // findById(){
  // this.customerService.getCustomersList(this.customer.id)
  //   if(this.customer.id == )
  //
  //
  //
  //
  // }

}
