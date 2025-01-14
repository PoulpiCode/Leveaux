CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS Employee (
    id_employee uuid PRIMARY KEY DEFAULT uuid_generate_v4(), -- Employee identifier
    firstname VARCHAR(50) NOT NULL, -- First name of employee
    lastname VARCHAR(50) NOT NULL, -- Last name of employee
    social_security VARCHAR(15) UNIQUE NOT NULL, -- Social security number (unique, not null)
    phone_number VARCHAR(10), -- Contact number of employee
    address TEXT, -- Home address of employee in format: STREET;CP;CITY
    hiring_date DATE NOT NULL, -- Employee's hiring date
    current_hourly_pay_rate DECIMAL(10, 4) NOT NULL, -- The current hourly pay rate
    current_overtime_pay_rate DECIMAL(10, 4) NOT NULL, -- The current overtime pay rate
    employee_vacation_count INT DEFAULT 0, -- Total vacation days available (defaults to 0)
    section VARCHAR(20), -- Désigne généralement le département ou le service dans lequel l’employé travaille au sein de l'entreprise
    registration_number INT,
    user_id uuid, -- Reference to User
    job_id INT, -- Reference to Job
    FOREIGN KEY (user_id) REFERENCES "User"(user_id), -- Foreign key to User table
    FOREIGN KEY (job_id) REFERENCES Job(job_id) -- Foreign key to Job table
);
