package com.skool.dao;
import org.springframework.stereotype.Component;

@Component
public class StudentDao {
    private final long id;
    private final String content;

    public StudentDao(long id, String content) {
        this.id = id;
        this.content = content;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}
