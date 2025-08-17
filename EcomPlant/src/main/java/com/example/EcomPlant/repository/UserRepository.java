package com.example.EcomPlant.repository;


import com.example.EcomPlant.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    User findUserById(Long id);

    User findByUsernameAndPassword(String username, String password);

}
