# Tables


### `Employee` Table
| Column Name            | Description                    |
|------------------------|--------------------------------|
| id_employee            | Employee identifier            |
| firstname              | First name of employee         |
| lastname               | Last name of employee          |
| social_security        | The social security number     |
| phone_number           | Contact number of employee     |
| email                  | Email address of employee      |
| address                | Home address of employee, format: STREET;CP;CITY       |
| hiring_date            | Employee's hiring date         |
| current_hourly_pay_rate| The current hourly pay rate |
| current_overtime_pay_rate | The current overtime pay rate |
| employee_vacation_count| Total vacation days available  |
| user_id                | Reference to User              |
| job_id                 | Reference to Job               |

### `EmployeeHistory` Table
| Column Name            | Description                    |
|------------------------|--------------------------------|
| history_id            | Employee identifier            |
| id_employee            | Reference to Employee |
| firstname              | First name of employee         |
| lastname               | Last name of employee          |
| social_security        | The social security number     |
| phone_number           | Contact number of employee     |
| email                  | Email address of employee      |
| address                | Home address of employee, format: STREET;CP;CITY       |
| current_hourly_pay_rate| The current hourly pay rate |
| current_overtime_pay_rate | The current overtime pay rate |
| employee_vacation_count| Total vacation days available  |
| user_id                | Reference to User              |
| job_id                 | Reference to Job               |
| valid_from | This snapshot of the Employee's info is valid from |
| valid_until | Until this date |

### `Sheet` Table
| Column Name    | Description         |
|----------------|---------------------|
| id_sheet       | Identifier for the sheet |
| start_date     | Begining of the period|
| end_date     | End of the period |
| version | Sheet's version |
| working_hours  | Monthly working hours  |
| overtime_hours     | Overtime hours  |
| contrib_reduction_overtime_rest_day | Rachats jours de repos |
| csg_unit | CSG/CSRS imposable à l'impôt sur le revenu hres suppl et rachats jours repos |
| rebought_non_taxable_days | HC/HS/Rachats jour non imposables |
| net_tax | Net fiscal |
| rebought_non_taxable_days_net | HC/HS/Rachats jours non imposable net |
| ss_sickness_maternity | Sécurité Sociale - Maladie Maternité Invalidité Décès |
| ss_complementary | Complémentaire Incapacité Décès |
| work_incidents | ACCIDENTS DU TRAVAIL - MALADIES PROFESSIONNELLES |
| ss_capped | Sécurité Sociale plafonnée |
| ss_uncapped | Sécurité Sociale déplafonnée |
| complementary_slice_1 | Complémentaire Tranche 1 |
| family | FAMILLE |
| unemployed_insurance | ASSURANCE CHOMAGE |
| other_employer_contribution | AUTRES CONTRIBUTIONS DUES PAR L'EMPLOYEUR |
| states_exoneration | EXONERATIONS DE COTISATIONS EMPLOYEUR |
| total_exoneration | ALLEGEMENT DE COTISATIONS EMPLOYEUR |
| generated_pdf | The generated PDF |
| sheet_status   | Status of the sheet  |
| id_employee    | Reference to Employee |

### `Vacation` Table
| Column Name           | Description                          |
|-----------------------|--------------------------------------|
| id_vacation           | Identifier for the vacation request  |
| vacation_starting_date| Start date of vacation               |
| vacation_final_date   | End date of vacation                 |
| vacation_date         | Date of the vacation                 |
| request_status        | Status of the vacation request       |
| request_date          | Date of vacation request submission  |
| id_employee           | Reference to Employee                |


### `User` Table
| Column Name     | Description                    |
|-----------------|--------------------------------|
| user_id         | User identifier                |
| user_name       | User's login name              |
| password        | User's password                |
| role            | Role of the user               |
| last_connected  | Last time user connected       |
| account_created | Date of account creation       |

### `Job` Table
| Column Name       | Description                  |
|-------------------|------------------------------|
| job_id            | Job identifier               |
| job_name          | Name of the job              |
| job_description   | Description of the job       |
| hour_salary       | Base Hourly salary for the job    |
| hour_overtime_increase | Salary overtime increase per hour     |

### `EmployeeJob` Table
| Column Name   | Description                |
|---------------|----------------------------|
| ej_id | EmployeeJob identifier |
| id_employee   | Reference to Employee       |
| job_id        | Reference to Job            |
| job_start_date| Job start date for employee | 
| job_end_date | Job end date default NULL |

