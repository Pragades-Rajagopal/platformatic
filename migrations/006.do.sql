CREATE TABLE IF NOT EXISTS partners (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    business_type TEXT NOT NULL,
    created_on DATETIME NOT NULL
);

CREATE TABLE IF NOT EXISTS partner_details (
    id INTEGER PRIMARY KEY,
    partner_id INTEGER NOT NULL,
    address TEXT NOT NULL,
    is_tax_exempt TEXT NOT NULL,
    band TEXT CHECK( band IN ('A', 'B', 'C', 'D', 'E') ) NOT NULL,
    comment TEXT,
    FOREIGN KEY (partner_id) REFERENCES partners (id)
);