CREATE TABLE IF NOT EXISTS employee_details (
    id INTEGER PRIMARY KEY,
    employee_id INTEGER NOT NULL,
    address TEXT,
    age INTEGER NOT NULL,
    rating INTEGER NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employees (id)
)