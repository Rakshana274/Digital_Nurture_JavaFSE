package com.library.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.service.BookService;

public class LibraryApplication {

    public static void main(String[] args) {

        // Load Spring configuration file
        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get BookService bean from Spring Container
        BookService service =
                context.getBean("bookService", BookService.class);

        // Call method
        service.displayBook();
    }
}