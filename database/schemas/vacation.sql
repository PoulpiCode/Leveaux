CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TYPE Status AS ENUM ('Approved', 'Pending', 'Disapproved');

CREATE TABLE IF NOT EXISTS Vacation (
	vacation_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	starting_date DATE NOT NULL,
	final_date DATE NOT NULL,
	vacation_status Status NOT NULL DEFAULT 'Pending',
	request_date DATE NOT NULL,
	id_employee uuid NOT NULL,

	FOREIGN KEY (id_employee) REFERENCES Employee(id_employee)
);
