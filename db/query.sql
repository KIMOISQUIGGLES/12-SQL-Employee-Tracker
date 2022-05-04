SELECT department.name AS department, role.title
FROM role
LEFT JOIN department
ON role.department_id = department.id;

SELECT role.salary AS salary, employee.first_name
FROM employee
ON employee.role_id = role.id

