package com.example.kanban_backend.web;

import com.example.kanban_backend.domain.Task;
import com.example.kanban_backend.service.TaskService;
import com.example.kanban_backend.web.dto.TaskDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.example.kanban_backend.utils.ClassUtils.buildLocation;


/**
 * @version 1.0 - 04.06.2018
 * @author vverbitskiy
 */
//localhost:8080/tasks/
@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;


    @GetMapping
    public ResponseEntity<?> getTasks() {
        return ResponseEntity.ok(taskService.getTasks());
    }


    @GetMapping("/{id}")
    public ResponseEntity<?> getTaskById(@PathVariable Long id) {
        return ResponseEntity.ok(taskService.getTaskById(id));
    }

    @PostMapping()
    public ResponseEntity<?> createTask(@RequestBody TaskDto taskDto) {
        Task task = taskService.createTask(taskDto.createEntity());
        return ResponseEntity.created(
                buildLocation(String.valueOf(task.getId()))
        ).build();

    }
}
