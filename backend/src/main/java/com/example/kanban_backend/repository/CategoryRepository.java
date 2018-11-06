package com.example.kanban_backend.repository;

import com.example.kanban_backend.domain.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @version 1.0 - 14.06.2018
 * @author vverbitskiy
 */
@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

    List<Category> findAllById(Long id);

}
