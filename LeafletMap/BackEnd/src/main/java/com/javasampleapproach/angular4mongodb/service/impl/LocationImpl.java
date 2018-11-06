package com.javasampleapproach.angular4mongodb.service.impl;

import com.javasampleapproach.angular4mongodb.dto.CustomerDTO;
import com.javasampleapproach.angular4mongodb.dto.LocationDTO;
import com.javasampleapproach.angular4mongodb.model.Customer;
import com.javasampleapproach.angular4mongodb.model.Location;
import com.javasampleapproach.angular4mongodb.repo.CustomerMongoRepository;
import com.javasampleapproach.angular4mongodb.repo.LocationMongoRepository;
import com.javasampleapproach.angular4mongodb.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(propagation = Propagation.SUPPORTS,readOnly = true)
public class LocationImpl implements LocationService {

    @Autowired
    private LocationMongoRepository repository;
    @Override
    public ArrayList<LocationDTO> getAllLocations() {
        List<Location> locations = repository.findAll();
        ArrayList<LocationDTO> alLocations = new ArrayList<>();
        for (Location location : locations) {
            LocationDTO locationDTO = new LocationDTO(location.getId(),
                    location.getLat(),
                    location.getLng());
            alLocations.add(locationDTO);
        }
        return alLocations;
    }

    @Override
    public LocationDTO getLocation(String id) {
        Location location = repository.findOne(id);
        LocationDTO locationDTO = new LocationDTO(location.getId(),
                location.getLat(),
                location.getLng());
        return locationDTO;
    }

    @Override
    public boolean saveLocation(LocationDTO dto) {
        Location location = new Location(dto.getId(),
                dto.getLat(),
                dto.getLng());

        repository.save(location);
        return true;
    }

    @Override
    public boolean deleteLocation(String id) {
        return false;
    }

    @Override
    public long getTotalLocations() {
        return 0;
    }
}
