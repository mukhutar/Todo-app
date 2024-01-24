CREATE DATABASE perntodo;

    CREATE TABLE  Todo(
        todo_id  SERIAL PRIMARY KEY,
        description VARCHAR(255) NOT NULL
    );

    CREATE TABLE Users(
        Users_id SERIAL PRIMARY KEY,
        User_Name VARCHAR(255) NOT NULL
    );