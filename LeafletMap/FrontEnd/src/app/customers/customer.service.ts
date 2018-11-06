import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
// import { Observa } from 'rxjs/index';
export const MAIN_URL= "http://localhost:8080";
import { Customer } from './customer';
import {Observable} from "rxjs/Observable";

@Injectable()
export class CustomerService {

  private baseUrl = 'http://localhost:8080/api/customers';
  // private static ApiConstants: any;
  // public static SEARCH_CUSTOMER = CustomerService.ApiConstants.API_URL + 'customer/search';

  constructor(private http: HttpClient) { }


  getAllCustomers(): Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(MAIN_URL + URL);
  }

  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, customer);
  }

  updateCustomer(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${name}`, value);
  }



  deleteCustomer(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCustomersList(query = {}): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
  //
  // public search(search){
  //   return this.http.get(CustomerService.ApiConstants.SEARCH_USER,{params:{any:search}});
  // }


  searchCustomer(id: String): Observable<Customer> {
    return this.http.get<Customer>(MAIN_URL + URL + "/" + id);
  }

  // searchUsers(searchParam: string): Observable<Customer[]> {
  //   return this.http.get(`${this.githubApiUrl}/search/customers?q=${searchParam}`)
  //     .map(res => <Customer[]>(res.json().customers))
  // }





}
