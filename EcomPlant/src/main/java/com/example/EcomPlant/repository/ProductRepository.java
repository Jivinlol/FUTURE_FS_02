package com.example.EcomPlant.repository;

import com.example.EcomPlant.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product,String> {
    Product findProductById(String id);
}
