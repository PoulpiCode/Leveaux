CREATE TABLE IF NOT EXISTS job (
	job_id SERIAL PRIMARY KEY,
	job_name VARCHAR(50) NOT NULL,
	job_description TEXT NOT NULL,
	hour_salary DECIMAL(4, 2) NOT NULL,
	hour_pay_increase DECIMAL(4, 2) NOT NULL
);
