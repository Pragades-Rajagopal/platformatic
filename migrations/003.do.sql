ALTER TABLE employees 
ADD COLUMN email TEXT NOT NULL DEFAULT 'test';

UPDATE employees
SET email = LOWER(REPLACE(NAME, ' ', '.')) || '@app.com';