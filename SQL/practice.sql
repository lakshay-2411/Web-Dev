-- My DB name: Employee_data
-- Having Tables: employees, departments, projects, employee_projects

SELECT DISTINCT department_id FROM employees

SELECT DISTINCT city FROM employees

SELECT * FROM employees WHERE salary > 50000

SELECT name, email FROM employees WHERE department_id = 3

SELECT * FROM employees ORDER BY salary DESC

SELECT name, hire_date FROM employees ORDER BY hire_date ASC, name DESC

SELECT * FROM employees WHERE salary BETWEEN 40000 AND 80000

SELECT * FROM employees WHERE hire_date BETWEEN '2025-01-01' AND '2025-06-22'

SELECT * FROM employees WHERE department_id IN (1, 3, 5)

SELECT * FROM employees WHERE city IN ('Gurgaon', 'Delhi', 'Mumbai')


-- Major difference between like and ilike is that 'like' is case-sensitive while 'ilike' is case-insensitive.
SELECT * FROM employees WHERE name LIKE 'Lakshay%'

SELECT * FROM employees WHERE email LIKE '%@gmail.com'

SELECT * FROM employees WHERE name ILIKE 'Lakshay%'

SELECT * FROM employees WHERE city ILIKE '%rewa%'

SELECT department_id, COUNT(*) as employee_count 
FROM employees 
GROUP BY department_id

SELECT city, AVG(salary) as avg_salary 
FROM employees 
GROUP BY city

SELECT department_id, COUNT(*) as employee_count 
FROM employees 
GROUP BY department_id 
HAVING COUNT(*) > 5

SELECT city, AVG(salary) as avg_salary 
FROM employees 
GROUP BY city 
HAVING AVG(salary) > 60000

SELECT name AS employee_name, salary AS annual_salary 
FROM employees

SELECT COUNT(DISTINCT department_id) FROM employees

SELECT department_id, SUM(salary) AS total_dept_salary 
FROM employees GROUP BY department_id

SELECT e.name, d.department_name 
FROM employees e 
INNER JOIN departments d ON e.department_id = d.id

SELECT e.name, d.department_name 
FROM employees e 
FULL OUTER JOIN departments d ON e.department_id = d.id

SELECT name, 'Employee' AS type FROM employees
UNION
SELECT department_name, 'Department' AS type FROM departments


-- Combined practice query
-- Ques: Which departments have active employees with an average salary above 55000, and what are their employee counts and average salaries, ranked from highest to lowest average salary?

SELECT d.department_name, COUNT(e.id) as employee_count, AVG(e.salary) as avg_salary
FROM employees e 
INNER JOIN departments d ON e.department_id = d.id 
WHERE e.status = 'Active'
GROUP BY d.department_name 
HAVING AVG(e.salary) > 55000 
ORDER BY avg_salary DESC