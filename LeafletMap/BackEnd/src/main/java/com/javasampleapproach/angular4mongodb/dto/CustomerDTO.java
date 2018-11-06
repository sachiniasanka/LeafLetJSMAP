package com.javasampleapproach.angular4mongodb.dto;

public class CustomerDTO {

    private String id;
    private String name;
    private int age;

    public CustomerDTO() {
    }

    public CustomerDTO(String id, String name, int age) {
        this.setId(id);
        this.setName(name);
        this.setAge(age);
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "CustomerDTO{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
