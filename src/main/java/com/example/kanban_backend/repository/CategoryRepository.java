package com.example.kanban_backend.repository;

import com.example.kanban_backend.domain.Task;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @version 1.0 - 14.06.2018
 * @author vverbitskiy
 */
public interface CategoryRepository extends JpaRepository<Task, Long> {

}
