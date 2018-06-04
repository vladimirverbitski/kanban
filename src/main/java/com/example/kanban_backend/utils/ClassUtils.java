package com.example.kanban_backend.utils;

import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

/**
 * @version 1.0 - 04.06.2018
 * @author vverbitskiy
 */
public class ClassUtils {

    public static URI buildLocation(String id) {
        return ServletUriComponentsBuilder
                .fromCurrentRequest().path("/{id}")
                .buildAndExpand(id).toUri();
    }

}
