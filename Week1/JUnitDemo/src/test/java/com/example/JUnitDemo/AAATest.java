package com.example.JUnitDemo;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class AAATest {

    private App app;

    // Setup method
    @Before
    public void setUp() {
        System.out.println("Setup: Creating App object");
        app = new App();
    }

    // Test using Arrange-Act-Assert pattern
    @Test
    public void testAddition() {

        // Arrange
        int a = 10;
        int b = 20;

        // Act
        int result = app.add(a, b);

        // Assert
        assertEquals(30, result);
    }

    // Teardown method
    @After
    public void tearDown() {
        System.out.println("Teardown: Cleaning up");
        app = null;
    }
}