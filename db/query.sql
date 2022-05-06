SELECT department.name AS department, role.title, role.salary
FROM role
LEFT JOIN department
ON role.department_id = department.id
LEFT JOIN employee
ON employee.role_id = role.id;

