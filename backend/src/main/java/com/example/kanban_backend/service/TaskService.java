/**
 * @version 1.0 - 04.06.2018
 * @author vverbitskiy
 */

package com.example.kanban_backend.service;

import com.example.kanban_backend.domain.Task;
import com.example.kanban_backend.repository.TaskRepository;
import com.example.kanban_backend.web.dto.TaskDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public List<Task> getTasks() {
        return taskRepository.findAll();
    }

    public Task getTaskById(Long id) {
        return taskRepository.findById(id).get();
    }

    public Task createTask(Task entity) {
        return taskRepository.save(entity);
    }

    public void deleteTaskById(Long id) {
        taskRepository.deleteById(id);
    }

    public void dropAllTasks() {
        taskRepository.deleteAll();
    }

    public void updateTask(Long id, TaskDto taskDto) {
        Task taskToUpdate = taskRepository.getOne(id);
        taskToUpdate.setTitle(taskDto.getTitle());
        taskToUpdate.setDescription(taskDto.getDescription());
        taskToUpdate.setCategory(taskDto.getCategory());
        taskRepository.save(taskToUpdate);
    }

}
