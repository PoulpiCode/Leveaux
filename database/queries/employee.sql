-- name: GetAllEmployees :many
SELECT * FROM employee;

-- name: GetAllEmployeesInfo :many
SELECT * FROM employee e
JOIN "User" u ON e.user_id = u.user_id 
JOIN job j ON e.job_id = j.job_id;


-- name: GetEmployee :one
SELECT * FROM employee e
JOIN job j ON e.job_id = j.job_id
JOIN "User" u ON u.user_id = e.user_id
WHERE e.id_employee=$1;

-- name: InsertEmployee :one
INSERT INTO Employee (
	firstname, lastname, social_security, phone_number,
	address, hiring_date, current_hourly_pay_rate,
	current_overtime_pay_rate, user_id, job_id)
VALUES (
	$1, $2, $3, $4, $5, $6,$7, $8, $9, $10
)
RETURNING *;
