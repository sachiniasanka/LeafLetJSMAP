package com.javasampleapproach.angular4mongodb.controller;


import com.javasampleapproach.angular4mongodb.dto.CustomerDTO;
import com.javasampleapproach.angular4mongodb.dto.LocationDTO;
import com.javasampleapproach.angular4mongodb.service.CustomerService;
import com.javasampleapproach.angular4mongodb.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin
@RequestMapping(value = "api/v1/location")
public class LocationController {

    @Autowired
    private LocationService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ArrayList<LocationDTO> getAllLocations() {
        return service.getAllLocations();
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public LocationDTO getLocation(@PathVariable("id") String id) {
        return service.getLocation(id);
    }

    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean deleteLocation(@PathVariable("id") String id) {
        return service.deleteLocation(id);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean saveLocation(@RequestBody LocationDTO location) {
        return service.saveLocation(location);
    }

    @GetMapping(value = "/count", produces = MediaType.APPLICATION_JSON_VALUE)
    public long getLocationCount() {
        return service.getTotalLocations();
    }
}
