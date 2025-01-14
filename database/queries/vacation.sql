-- name: GetAllVacations :many
SELECT * FROM vacation;

-- name: GetEmployeVacations :many
SELECT * FROM vacation WHERE id_employee=$1;

-- name: GetEmployeeValidatedVacations :many
SELECT * FROM vacation WHERE request_status="validated" and id_employee=$1;

-- name: GetEmployeePendingVacations :many
SELECT * FROM vacation WHERE request_status="pending" and id_employee=$1;

-- name: GetEmployeeVacations :many
SELECT * FROM vacation WHERE id_employee=$1;

-- name: GetVacationDays :one
SELECT (final_date - starting_date) AS vacation_days
FROM vacation WHERE id_employee = $1;

-- name: GetFutureVacations :many
SELECT *
FROM vacation
WHERE starting_date > $1;
