package com.example.kanban_backend.repository;

import com.example.kanban_backend.domain.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @version 1.0 - 04.06.2018
 * @author vverbitskiy
 */
@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findAllById(Long id);

}
