package com.simple.crud.controller;


import com.simple.crud.model.user;
import com.simple.crud.repo.userRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class userController {
    @Autowired
    userRepo repo;

    @GetMapping(path = "/users")
    public List<user> getUsers(){
        return repo.findAll();
    }

    @PostMapping(path = "/adduser")
    public user addUser(@RequestBody user new_user){
        repo.save(new_user);
        return new_user;
    }

    @GetMapping(path = "/getuser/{id}")
    public Optional <user> getUser(@PathVariable("id") Integer id){
        return repo.findById(id);

    }

    @DeleteMapping(path = "/deleteuser/{id}")
    public void deleteUser(@PathVariable("id") Integer id){
        user t= repo.getOne(id);
        repo.delete(t);
    }

    @PutMapping(path = "/updateuser")
    public user updateUser(@RequestBody user u_user){
        repo.save(u_user);
        return u_user;
    }

}
