DROP DATABASE IF EXISTS dept_db;

CREATE DATABASE dept_db;

USE dept_db;

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY(id)
);

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

ALTER TABLE employee
ADD CONSTRAINT role_id
    FOREIGN KEY (role_id)
        REFERENCES role (id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
ADD CONSTRAINT manager_id    
    FOREIGN KEY (manager_id)
        REFERENCES employee (id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE role
ADD CONSTRAINT department_id
    FOREIGN KEY (department_id)
        REFERENCES department (id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;



-- CREATE TABLE department (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     dept_name VARCHAR(30) NOT NULL
-- );

-- CREATE TABLE role (
--     id INT NOT NULL PRIMARY KEY,
--     title VARCHAR(30),
--     salary DECIMAL,
--     department_id INT,
--     FOREIGN KEY (department_id)
--     REFERENCES department(id)
--     ON DELETE SET NULL
-- );

-- -- CREATE TABLE employee (
-- --     id INT NOT NULL PRIMARY KEY,
-- --     first_name VARCHAR(30),
-- --     last_name VARCHAR(30),
-- --     role_id INT,
-- --     manager_id INT,
-- --     FOREIGN KEY (role_id)
-- --     REFERENCES role(id),
-- --     FOREIGN KEY (manager_id)
-- --     REFERENCES employee(id)
-- -- );

-- CREATE TABLE employee (
--     id INT NOT NULL AUTO_INCREMENT,
--     first_name VARCHAR(30),
--     last_name VARCHAR(30),
--     role_id INT,
--     manager_id INT,
--     PRIMARY KEY (id)
-- );