import {Component, OnInit, ViewChild} from '@angular/core';
import {Customer} from "../customer";
import {NgForm} from "@angular/forms";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customers: Array<Customer> = [];
  selectedCustomer: Customer = new Customer();
  tempDriver: Customer = null;
  manuallySelected: boolean = false;
  @ViewChild("frmCustomers") frmCustomers: NgForm;


  constructor(private customerService: CustomerService) {



  }

  ngOnInit() {
    this.loadAllCustomers();


  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  loadAllCustomers(): void {
    this.customerService.getAllCustomers().subscribe(
      (result) => {
        this.customers = result;
        console.log(this.customers);
      }
    )
  }
  deleteCustomer(customers: Customer): void {
    if (confirm("Are you sure you want to delete this customer?")) {
      this.customerService.deleteCustomer(customers.id).subscribe(
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
    // this.clear();
    this.selectedCustomer = customer;
    this.tempDriver = Object.assign({}, customer);
    this.manuallySelected = true;
  }
  // clear(): void {
  //   let index = this.customers.indexOf(this.selectedCustomer);
  //   if (index !== -1) {
  //     this.customers[index] = this.tempCustomer;
  //     this.tempDriver = null;
  //   }
  //   this.selectedCustomer = new Customer();
  //   this.manuallySelected = false;
  // }
  // updateCustomer(): void{
  //   this.customerService.updateCustomer(this.selectedCustomer).subscribe(
  //     (result)=>{
  //       if (result){
  //         alert("Customer has been updated successfully");
  //         this.loadAllCustomers();
  //       }else{
  //         alert("Failed to update the customer");
  //       }
  //     }
  //   )
  // }

}
