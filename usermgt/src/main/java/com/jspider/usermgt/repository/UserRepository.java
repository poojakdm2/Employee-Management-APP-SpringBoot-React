package com.jspider.usermgt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jspider.usermgt.pojo.User;

public interface UserRepository extends JpaRepository<User,Long> {
}