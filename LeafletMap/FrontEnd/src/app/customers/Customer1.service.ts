import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "./customer";
// import {Observable} from "rxjs/index";
import {Observable} from "rxjs/Observable";
export const MAIN_URL= "http://localhost:8080";

const URL="/api/v1/customer";
// private baseU = 'http://localhost:8080/api/customers';
@Injectable()
export class Customer1Service {

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(MAIN_URL + URL);
  }

  deleteCustomer(id: string): Observable<boolean>{
    return this.http.delete<boolean>(MAIN_URL+ URL + "/" + id);
  }

  updateCustomer(customer: Customer): Observable<boolean>{
    return this.http.post<boolean>(MAIN_URL + URL,customer);
  }

  getTotalCustomers(): Observable<number>{
    return this.http.get<number>(MAIN_URL + URL + "/count");
  }

  saveCustomer(customer: Customer): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, customer);
  }



}
