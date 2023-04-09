CREATE TABLE IF NOT EXISTS employee_details (
  employee_id INTEGER PRIMARY KEY,
  age INTEGER NOT NULL,
  address TEXT,
  FOREIGN KEY (employee_id) REFERENCES employees (id)
);