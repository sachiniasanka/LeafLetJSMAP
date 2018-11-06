package com.javasampleapproach.angular4mongodb.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.javasampleapproach.angular4mongodb.model.Customer;

public interface CustomerMongoRepository extends MongoRepository <Customer, String> {

}
