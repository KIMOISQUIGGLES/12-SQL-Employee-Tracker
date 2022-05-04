INSERT INTO department (name)
VALUES ('Human Resources'),
       ('Public Relations'),
       ('Custodial'),
       ('Research & Development');

INSERT INTO role (department_id, title, salary)
VALUES (1, "Executive Developer", 50.3),
       (2, "Research Associate", 10.7),
       (3, "Janitoral Operator", 30.55),
       (4, "Shoe Shiner", 0.9);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Charles", "Barkley", 223, NULL),
       ("Mister", "Clean", 1513, 284627),
       ("Ronald", "McDonald", 111, NULL),
       ("JayJay", "JetPlane", 743, 8511);