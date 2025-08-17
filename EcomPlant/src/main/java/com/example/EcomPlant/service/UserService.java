package com.example.EcomPlant.service;
import com.example.EcomPlant.DTO.CartDTO;
import com.example.EcomPlant.DTO.LoginDTO;
import com.example.EcomPlant.DTO.UserDTO;
import com.example.EcomPlant.model.CartItem;
import com.example.EcomPlant.model.Product;
import com.example.EcomPlant.model.User;
import com.example.EcomPlant.repository.CartItemRepository;
import com.example.EcomPlant.repository.ProductRepository;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.EcomPlant.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    ProductRepository productRepository;
    @Autowired
    CartItemRepository cartItemRepository;
    public User findByUserId(Long id){
        return userRepository.findUserById(id);
    }
    public boolean addUser(UserDTO userDTO){
        String username = userDTO.getUsername();
        String password = userDTO.getPassword();
        User user = userRepository.findByUsernameAndPassword(username,password);
        if(user==null) {
            User user1 = new User();
            user1.setUsername(username);
            user1.setEmail(userDTO.getEmail());
            user1.setPassword(password);
            userRepository.save(user1);
            return true;
        }else{
            return false;
        }
    }

    public User Login(@RequestBody LoginDTO loginDTO){
        String username = loginDTO.getUsername();
        String password = loginDTO.getPassword();;
        User user = userRepository.findByUsernameAndPassword(username,password);
        return user;
    }

    public void AddToCart(CartDTO cartDTO,Long id){
        User user = userRepository.findUserById(id);
        System.out.println("working to some extent error from here");
        String productId = cartDTO.getId();
        System.out.println(cartDTO.getId()+" "+cartDTO.getName()+" "+cartDTO.getQuantity()+" "+productId);
        Product product = productRepository.findProductById(productId);
        System.out.println(product.getId()+" "+product.getName());
        List<CartItem> items = cartItemRepository.findByUserId(id);
        if(!items.isEmpty()){
            boolean found = false;
            boolean delete = false;
            System.out.println("if");
            for(CartItem item:items){
                if(item.getProduct().getId().equals(productId)){
                    item.setQuantity(cartDTO.getQuantity());
                    if(cartDTO.getQuantity()==0){
                        cartItemRepository.deleteById(item.getId());

                    }
                    found = true;
                    break;
                }
            }
            if(found) {
                user.setCartItems(items);
                userRepository.save(user);
            }else{
                CartItem cartItem = new CartItem();
                cartItem.setUser(user);
                cartItem.setQuantity(cartDTO.getQuantity());
                cartItem.setProduct(product);
                items.add(cartItem);
                user.setCartItems(items);
                userRepository.save(user);
            }



        }else{
            System.out.println("else");
            String productid = cartDTO.getId();
            System.out.println(productid);
            Product product2 = productRepository.findProductById(productid);
            CartItem cartItem = new CartItem();
            cartItem.setUser(user);
            cartItem.setQuantity(cartDTO.getQuantity());
            cartItem.setProduct(product2);
           // cartItemRepository.save(cartItem);
            List<CartItem> cartItems = new ArrayList<>();
            cartItems.add(cartItem);
            user.setCartItems(cartItems);
            userRepository.save(user);

        }


    }

    public List<CartItem> getCart(Long Id){
        List<CartItem> cartItems  = cartItemRepository.findByUserId(Id);
        return cartItems;
    }

}
