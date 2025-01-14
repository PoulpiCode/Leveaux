-- name: GetAllUsers :many
SELECT * FROM "User";

-- name: GetUser :one
SELECT * FROM "User" WHERE email_address=$1;

-- name: GetEmployeFromUSer :one
SELECT * FROM employee WHERE employee.user_id=$1;

-- name: InsertUser :one
INSERT INTO "User" (
    email_address, username, password, role
) VALUES (
	$1, $2, $3, $4
) RETURNING *;

-- name: GetRoles :many
SELECT unnest(enum_range(NULL::Role)) as name;
