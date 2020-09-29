package com.simple.crud.repo;

import com.simple.crud.model.user;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepo extends JpaRepository<user,Integer> {
}
