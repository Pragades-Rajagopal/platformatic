CREATE VIEW employees_v AS
SELECT 
e.id 'employee_id',
e.name,
e.email,
e.designation,
e.experience,
ed.address,
ed.age,
ed.rating
FROM employees e, employee_details ed
WHERE ed.employee_id = e.id