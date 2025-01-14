```mermaid
flowchart TD
    Sheet[id_sheet]
    Sheet --> sheet_date 
    Sheet --> month_salary
    Sheet --> working_hours
    Sheet --> supp_hours
    Sheet --> sheet_status

    Sheet --> Employee

    Vacation[id_vacation]
    Vacation --> vacation_starting_date
    Vacation --> vacation_final_date
    Vacation --> vacation_date
    Vacation --> request_status
    Vacation --> request_date

    Vacation --> Employee

    Employee[id_employee]
    Employee --> firstname
    Employee --> lastname
    Employee --> phone_number
    Employee --> email
    Employee --> address
    Employee --> hiring_date
    Employee --> employee_vacation_count

    Employee --> User
    Employee --> Job

    User[user_id]
    User --> user_name
    User --> password
    User --> role
    User --> last_connected
    User --> account_created
    User --> time_away

    Job[job_id]
    Job --> job_name
    Job --> job_description
    Job --> hour_salary
    Job --> hour_pay_increase
    Job --> job_vacation_count

    EmployeeJob[id_employee,job_id]
    EmployeeJob --> job_start_date
