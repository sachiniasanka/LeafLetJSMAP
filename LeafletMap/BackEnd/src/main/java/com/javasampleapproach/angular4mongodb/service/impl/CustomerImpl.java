package com.javasampleapproach.angular4mongodb.service.impl;

import com.javasampleapproach.angular4mongodb.dto.CustomerDTO;
import com.javasampleapproach.angular4mongodb.model.Customer;
import com.javasampleapproach.angular4mongodb.repo.CustomerMongoRepository;
import com.javasampleapproach.angular4mongodb.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
@Service
@Transactional(propagation = Propagation.SUPPORTS,readOnly = true)
public class CustomerImpl implements CustomerService {

    @Autowired
    private CustomerMongoRepository repository;

    @Override
    public ArrayList<CustomerDTO> getAllCustomers() {
        List<Customer> customers = repository.findAll();
        ArrayList<CustomerDTO> alCustomers = new ArrayList<>();
        for (Customer customer : customers) {
            CustomerDTO customerDTO = new CustomerDTO(customer.getId(),
              customer.getName(),
              customer.getAge());
            alCustomers.add(customerDTO);
        }
        return alCustomers;    }

    @Override
    public CustomerDTO getCustomer(String id) {
        Customer customer = repository.findOne(id);
        CustomerDTO customerDTO = new CustomerDTO(customer.getId(),
                customer.getName(),
                customer.getAge());
        return customerDTO;    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean saveCustomer(CustomerDTO dto) {
        Customer customer = new Customer(dto.getId(),
                dto.getName(),
                dto.getAge());

        repository.save(customer);
        return true;    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean deleteCustomer(String id) {
        repository.delete(id);
        return true;    }

    @Override
    public long getTotalCustomers() {
        return 0;
    }
}
