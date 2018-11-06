package com.javasampleapproach.angular4mongodb.service;

import com.javasampleapproach.angular4mongodb.dto.CustomerDTO;
import com.javasampleapproach.angular4mongodb.dto.LocationDTO;

import java.util.ArrayList;


public interface LocationService {
    public ArrayList<LocationDTO> getAllLocations();
    public LocationDTO getLocation(String id);
    public boolean saveLocation(LocationDTO dto);
    public  boolean deleteLocation(String id);
    public long getTotalLocations();

}
