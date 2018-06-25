/**
 * @version 1.0 - 14.06.2018
 * @author vverbitskiy
 */

package com.example.kanban_backend.service;

import com.example.kanban_backend.domain.Category;
import com.example.kanban_backend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getCats() {
        return categoryRepository.findAll();
    }

    public Category getCatById(Long id) {
        return categoryRepository.findById(id).get();
    }

    public Category createCategory(Category entity) {
        return categoryRepository.save(entity);
    }
}
