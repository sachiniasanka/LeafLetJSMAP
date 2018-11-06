package com.javasampleapproach.angular4mongodb.controller;
//
//import java.util.List;
//
//import javax.validation.Valid;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.javasampleapproach.angular4mongodb.model.Customer;
//import com.javasampleapproach.angular4mongodb.repo.CustomerMongoRepository;
//
//@CrossOrigin(origins = "http://localhost:4200")
//@RestController
//@RequestMapping("/api")
//public class CustomerController {
//
//	@Autowired
//	CustomerMongoRepository customerRepository;
//
//	@GetMapping("/customers")
//	public List<Customer> getAllCustomers() {
//		System.out.println("Get all Customers...");
//
//		return customerRepository.findAll();
//	}
//
//	@PostMapping("/customers/create")
//	public Customer createCustomer(@Valid @RequestBody Customer customer) {
//		System.out.println("Create Customer: " + customer.getName() + "...");
//
//		customer.setActive(false);
//		return customerRepository.save(customer);
//	}
//
//	@PutMapping("/customers/{id}")
//	public ResponseEntity<Customer> updateCustomer(@PathVariable("id") String id, @RequestBody Customer customer) {
//		System.out.println("Update Customer with ID = " + id + "...");
//
//		Customer customerData = customerRepository.findOne(id);
//		if (customer == null) {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//		customerData.setName(customer.getName());
//		customerData.setAge(customer.getAge());
//		customerData.setActive(customer.isActive());
//		Customer updatedcustomer = customerRepository.save(customerData);
//		return new ResponseEntity<>(updatedcustomer, HttpStatus.OK);
//	}
//
//	@DeleteMapping("/customers/{id}")
//	public ResponseEntity<String> deleteCustomer(@PathVariable("id") String id) {
//		System.out.println("Delete Customer with ID = " + id + "...");
//
//		customerRepository.delete(id);
//
//		return new ResponseEntity<>("Customer has been deleted!", HttpStatus.OK);
//	}
//
//	@DeleteMapping("/customers/delete")
//	public ResponseEntity<String> deleteAllCustomers() {
//		System.out.println("Delete All Customers...");
//
//		customerRepository.deleteAll();
//
//		return new ResponseEntity<>("All customers have been deleted!", HttpStatus.OK);
//	}
//}


import com.javasampleapproach.angular4mongodb.dto.CustomerDTO;
import com.javasampleapproach.angular4mongodb.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin
@RequestMapping(value = "api/v1/customer")
public class CustomerController {

	@Autowired
	private CustomerService service;
//

	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	public ArrayList<CustomerDTO> getAllCustomers() {
		return service.getAllCustomers();
	}

	@GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public CustomerDTO getCustomer(@PathVariable("id") String id) {
		return service.getCustomer(id);
	}

	@DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public boolean deleteCustomer(@PathVariable("id") String id) {
		return service.deleteCustomer(id);
	}

	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public boolean saveCustomer(@RequestBody CustomerDTO customer) {
		return service.saveCustomer(customer);
	}

	@GetMapping(value = "/count", produces = MediaType.APPLICATION_JSON_VALUE)
	public long getCustomerCount() {
		return service.getTotalCustomers();
	}
}