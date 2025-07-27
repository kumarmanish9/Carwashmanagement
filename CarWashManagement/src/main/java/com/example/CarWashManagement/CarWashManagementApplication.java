package com.example.CarWashManagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CarWashManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarWashManagementApplication.class, args);
		System.out.println("Connected to database: carwashmanagement");
	}

}
