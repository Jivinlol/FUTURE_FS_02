package com.example.EcomPlant.controller;
import com.example.EcomPlant.DTO.AuthResponse;
import com.example.EcomPlant.DTO.CartDTO;
import com.example.EcomPlant.DTO.LoginDTO;
import com.example.EcomPlant.DTO.UserDTO;
import com.example.EcomPlant.model.CartItem;
import com.example.EcomPlant.model.Product;
import com.example.EcomPlant.model.User;
import com.example.EcomPlant.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.EcomPlant.service.ProductService;

import java.io.IOException;
import java.net.http.HttpResponse;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/ecommerce")
public class Ecom{
    @Autowired
    ProductService productService;

    @Autowired
    UserService userService;

    @GetMapping("/allproducts")
    public List<Product> AllProduct(){
        return productService.getAllProducts();
    }
    @GetMapping("/")
    public String home(){
        return "welcome to home";
    }
    @GetMapping("/addproducts")
    public String addValues() throws IOException {
        productService.saveAllProductsWithImages();
        return "added values";
    }
    @GetMapping("/getProduct/{id}")
    public Product getProductById(@PathVariable String id) throws IOException {
        return productService.findProductById(id);
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody LoginDTO loginDTO){
        User user = userService.Login(loginDTO);
        if(user==null){
            return ResponseEntity.status(401).body(user);
        }else{
            return ResponseEntity.status(200).body(user);
        }

    }

    @PostMapping("/SignUp")
    public ResponseEntity<String> signup(@RequestBody UserDTO userDTO){
        boolean added  = userService.addUser(userDTO);
        if(added){
            return ResponseEntity.status(200).body("added");
        }else{
            return ResponseEntity.status(409).body("User already exits");
        }

    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("cart/add/{id}")
    public String addToCart(@RequestBody CartDTO cartDTO,@PathVariable Integer id){
        long userid = id;
        userService.AddToCart(cartDTO,userid);
        return "added successfully";
    }

    @GetMapping("cart/get/{id}")
    public List<CartItem> addToCart(@PathVariable Integer id){
        long userid = id;
        System.out.println("working");
        return userService.getCart(userid);



    }

}
