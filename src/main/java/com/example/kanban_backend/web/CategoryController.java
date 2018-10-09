package com.example.kanban_backend.web;

import com.example.kanban_backend.domain.Category;
import com.example.kanban_backend.service.CategoryService;
import com.example.kanban_backend.web.dto.CategoryDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.example.kanban_backend.utils.ClassUtils.buildLocation;
/**
 * @version 1.0 - 14.06.2018
 * @author vverbitskiy
 */
@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping
    public ResponseEntity<?> getCats() {
        return ResponseEntity.ok(categoryService.getCats());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCatById(@PathVariable Long id) {
        return ResponseEntity.ok(categoryService.getCatById(id));
    }

    @PostMapping()
    public ResponseEntity<?> createCategory(@RequestBody CategoryDto categoryDto) {
        Category category = categoryService.createCategory(categoryDto.createEntity());
        return ResponseEntity.created(
                buildLocation(String.valueOf(category.getId()))
        ).build();

    }

    @GetMapping("/{id}/delete")
    public ResponseEntity<?> deleteCategoryById(@PathVariable Long id) {
        categoryService.deleteCategoryById(id);
        return ResponseEntity.ok().build();
    }
}
