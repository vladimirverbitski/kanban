package com.example.kanban_backend.web.dto;

import com.example.kanban_backend.domain.Category;

/**
 * @version 1.0 - 25.06.2018
 * @author vverbitskiy
 */
public class CategoryDto {

    private String title;


    public Category createEntity() {
        Category category = new Category();
        category.setTitle(this.title);
        return category;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
