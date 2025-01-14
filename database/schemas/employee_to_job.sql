CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS employee_to_job (
	id_employee uuid,
	job_id INT,
	job_start_date DATE,
	job_end_date DATE,

	PRIMARY KEY (id_employee, job_id, job_start_date),
	FOREIGN KEY (id_employee) REFERENCES employee(id_employee),
	FOREIGN KEY (job_id) REFERENCES job(job_id)
);
