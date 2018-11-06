package com.javasampleapproach.angular4mongodb.service;

import com.javasampleapproach.angular4mongodb.dto.CustomerDTO;
import com.javasampleapproach.angular4mongodb.model.Customer;

import java.util.ArrayList;

public interface CustomerService {

    public ArrayList<CustomerDTO> getAllCustomers();
    public CustomerDTO getCustomer(String id);
    public boolean saveCustomer(CustomerDTO dto);
    public  boolean deleteCustomer(String id);
    public long getTotalCustomers();

}
