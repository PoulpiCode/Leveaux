CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS EmployeeHistory (
    history_id SERIAL PRIMARY KEY, -- History record identifier (auto-incremented)
    id_employee uuid NOT NULL, -- Reference to Employee (foreign key)
    firstname VARCHAR(50) NOT NULL, -- First name of employee at the time of snapshot
    lastname VARCHAR(50) NOT NULL, -- Last name of employee at the time of snapshot
    phone_number VARCHAR(10), -- Contact number of employee at the time of snapshot
    address TEXT, -- Home address of employee at the time of snapshot
    current_hourly_pay_rate DECIMAL(10, 4) NOT NULL, -- Hourly pay rate at the time of snapshot
    current_overtime_pay_rate DECIMAL(10, 4) NOT NULL, -- Overtime pay rate at the time of snapshot
    section VARCHAR(20), -- Désigne généralement le département ou le service dans lequel l’employé travaille au sein de l'entreprise
    registration_number INT,
    valid_from DATE NOT NULL, -- This snapshot is valid from this timestamp
    valid_until DATE, -- Until this timestamp, NULL means "current" record
    FOREIGN KEY (id_employee) REFERENCES Employee(id_employee) -- Foreign key to Employee table
);
