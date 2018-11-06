package com.javasampleapproach.angular4mongodb.repo;

import com.javasampleapproach.angular4mongodb.model.Customer;
import com.javasampleapproach.angular4mongodb.model.Location;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LocationMongoRepository extends MongoRepository<Location, String> {
}
