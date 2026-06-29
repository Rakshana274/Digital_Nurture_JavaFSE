package com.library.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.service.BookService;

public class LibraryApplication {

    public static void main(String[] args) {

        // Load Spring Container
        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get BookService Bean
        BookService service =
                context.getBean("bookService", BookService.class);

        // Call Business Method
        service.displayBook();
    }
}