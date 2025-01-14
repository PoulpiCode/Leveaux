-- name: GetAllJobs :many
SELECT * FROM job;

-- name: GetJob :one
SELECT * FROM job WHERE job_id=$1;

-- name: GetJobEmployees :many
SELECT * FROM employee WHERE employee.job_id=job.job_id;

-- name: GetJobSalary :one
SELECT hour_salary FROM job WHERE job_id=$1;

-- name: InsertJob :one
INSERT INTO job (
    job_name, job_description, hour_salary, hour_pay_increase
) VALUES (
    $1, $2, $3, $4
) RETURNING *;