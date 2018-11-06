import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "./customer";
// import {Observable} from "rxjs/index";
import {Observable} from "rxjs/Observable";
import {Location} from "./location";
import {passBoolean} from "protractor/built/util";
export const MAIN_URL= "http://localhost:8080";

const URL="/api/v1/location";
// private baseU = 'http://localhost:8080/api/customers';
@Injectable()
export class Location1Service {

  constructor(private http: HttpClient) { }

  getAllLocations(): Observable<Array<Location>>{
    return this.http.get<Array<Location>>(MAIN_URL + URL);
  }

  deleteLocation(id: string): Observable<boolean>{
    return this.http.delete<boolean>(MAIN_URL+ URL + "/" + id);
  }

  updateLocation(location: Location): Observable<boolean>{
    return this.http.post<boolean>(MAIN_URL + URL,location);
  }

  getTotalLocations(): Observable<number>{
    return this.http.get<number>(MAIN_URL + URL + "/count");
  }

  saveLocation(location: Location): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, location);
  }




}
