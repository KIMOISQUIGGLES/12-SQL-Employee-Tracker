INSERT INTO department (id, dept_name)
VALUES (1, 'Human Resources'),
       (2, 'Public Relations'),
       (3, 'Custodial'),
       (4, 'Research & Development');

INSERT INTO role (id, department_id, title, salary)
VALUES (1, 1, "Executive Developer", 50.3),
       (2, 2, "Research Associate", 10.7),
       (3, 3, "Janitoral Operator", 30.55),
       (4, 4, "Shoe Shiner", 0.9);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Charles", "Barkley", 1, NULL),
       (2, "Mister", "Clean", 2, NULL),
       (3, "Ronald", "McDonald", 3, NULL),
       (4, "JayJay", "JetPlane", 4, 2);