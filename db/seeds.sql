USE employee_db

INSERT INTO department (name)
VALUES
('Engineering'),
('Finance'),
('Legal'),
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
('Jr. Engineer', 55000, 1),
('Accountant', 60000, 2),
('Lawyer', 80000, 3),
('Jr. Sales Associate', 50000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES 
('Mike', 'Williams', 1),
('Clint', 'Smith', 2),
('Sam', 'Jackson', 3),
('Jordan', 'Belfort', 4);