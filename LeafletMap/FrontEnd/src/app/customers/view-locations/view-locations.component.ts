import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Location1Service} from "../Location1Service";
import {Location} from "../location";
import {NgForm} from "@angular/forms";

import {isNumber} from "util";
import {map} from "rxjs/operator/map";
import {formControlBinding} from "@angular/forms/src/directives/ng_model";
import {getHtmlTagDefinition} from "@angular/compiler";
import {Customer} from "../customer";
declare let L;

@Component({
  selector: 'app-view-locations',
  templateUrl: './view-locations.component.html',
  styleUrls: ['./view-locations.component.css']



})
export class ViewLocationsComponent implements OnInit {


  self = this;
  defaultVal = 'nsdkd';
  long = '';
  lati = '';
  $scopeLong = this.long;
  locations: Array<Location> = [];
  selectedLocations: Location = new Location();
  tempLocations: Location = null;
  manuallySelected: boolean = false;
  @ViewChild("frmLocations") frmLocations: NgForm;
  constructor(private locationService: Location1Service) {
    this.self = this;
  }
  ngOnInit() {
    this.loadAllLocations();
    this.update();
  }
  loadAllLocations(): void {
    this.locationService.getAllLocations()
      .subscribe(
        (result) => {
          this.locations = result;
          console.log(this.locations);
        }
      )
  }
  saveLocation(): void{
    this.locationService.saveLocation(this.selectedLocations).subscribe(

      (result)=>{
        if (result){
          alert("Location has been saved successfully");
          this.loadAllLocations();
        }else{
          alert("Failed to save the location");
        }
      }
    )
  }
  clear(): void {
    let index = this.locations.indexOf(this.selectedLocations);
    if (index !== -1) {
      this.locations[index] = this.tempLocations;
      this.tempLocations = null;
    }
    this.selectedLocations = new Location();
    this.manuallySelected = false;


  }




  update(): void{
    const map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);




    map.on('click', function (e)

    {
      var lati = e.latlng.lat;
      var long = e.latlng.lng;
      alert(lati+"  "+long);
       var marker = new L.marker([e.latlng.lat,e.latlng.lng]).addTo(map);

      marker.bindPopup("marker").openPopup();




    });

  }

}
