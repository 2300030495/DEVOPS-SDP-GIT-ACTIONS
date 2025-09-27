package com.klef.fsd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.klef.fsd.model.Admin;

// this is admin repo all admin functionality will be inbuilt here
@Repository
public interface AdminRepository extends JpaRepository<Admin, String> {
	public Admin findByUsernameAndPassword(String username, String password);
	
}
