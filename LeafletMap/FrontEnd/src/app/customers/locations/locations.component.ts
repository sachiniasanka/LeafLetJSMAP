import { Component, OnInit } from '@angular/core';
import {Location1Service} from "../Location1Service";
import {Location} from "../location";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  // locations: Array<Location> = [];
  constructor() { }

  ngOnInit() {
    // this.loadAllLocations();

  }
  // loadAllLocations(): void {
  //   this.locationService.getAllLocations()
  //     .subscribe(
  //       (result) => {
  //         this.locations = result;
  //         console.log(this.locations);
  //       }
  //     )
  // }
}
