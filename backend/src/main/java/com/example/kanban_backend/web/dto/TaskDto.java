package com.example.kanban_backend.web.dto;

import com.example.kanban_backend.domain.Task;

/**
 * @version 1.0 - 04.06.2018
 * @author vverbitskiy
 */
public class TaskDto {

    private String title;

    private String description;

    private String category;

    private String nodes;


    public Task createEntity() {
        Task task = new Task();
        task.setTitle(this.title);
        task.setDescription(this.description);
        task.setCategory(this.category);
        task.setNodes(this.nodes);
        return task;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getNodes() { return nodes; }

    public void setNodes(String nodes) { this.nodes = nodes; }
}
