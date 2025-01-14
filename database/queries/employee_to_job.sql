-- name: GetAllEmployeeJob :many
SELECT * FROM employee_to_job;

-- name: GetEmployeeJob :one
SELECT * FROM employee_to_job WHERE id_employee=$1;

-- name: GetEmployeeJobStartDate :one
SELECT job_start_date FROM employee_to_job WHERE id_employee=$1;