-- name: GetAllSheets :many
SELECT * FROM sheet;

-- name: GetSheet :one
SELECT * FROM sheet WHERE id_sheet=$1;

-- name: GetMostRecentSheet :one
SELECT *
FROM sheet
ORDER BY start_date DESC
LIMIT 1;

-- name: GetAllSheetsOrderedByDate :many
SELECT *
FROM Sheet
ORDER BY start_date DESC;
