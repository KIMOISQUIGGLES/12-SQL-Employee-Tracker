INSERT IGNORE INTO department (id, name)
VALUES (NULL, 'Human Resources'),
       (NULL, 'Public Relations'),
       (NULL, 'Custodial'),
       (NULL, 'Research & Development');

INSERT IGNORE INTO role (id, department_id, title, salary)
VALUES (1, 1, "Executive Developer", 50.3),
       (2, 2, "Research Associate", 10.7),
       (3, 3, "Janitoral Operator", 30.55),
       (4, 4, "Shoe Shiner", 0.9);

INSERT IGNORE INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Charles", "Barkley", 223, NULL),
       (2, "Mister", "Clean", 1513, 284627),
       (3, "Ronald", "McDonald", 111, NULL),
       (4, "JayJay", "JetPlane", 743, 8511);