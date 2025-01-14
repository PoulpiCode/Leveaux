#!/usr/bin/bash

cd "$(dirname "$0")"

[[ ! -f ../.env ]] && exit 1
dbname=$(cat ../.env | grep POSTGRES_DB | cut -d= -f2)
[[ ${#dbname} -eq 0 ]] && exit 1

order=(./schemas/user.sql ./schemas/job.sql ./schemas/employee.sql ./schemas/vacation.sql  ./schemas/employee_to_job.sql ./schemas/employee_history.sql ./schemas/sheet.sql)


for o in "${order[@]}"; do 
	echo "File: $o"
	cat "$o" | docker exec -i gerico-db psql -U postgres -d "$dbname"
done
