# Dictionnaire de données

| Nom colonne                      | Type de donnée       | Justification           | Nature       | Description                                          | Règles                         |
|----------------------------------|----------------------|--------------------------|--------------|------------------------------------------------------|---------------------------------|
| **Employee Table**               |                      |                          |              |                                                      |                                 |
| id_employee                      | uuid                  | 1 by Employee                 | Persistant   | Identifiant unique de l'employé                      | NOT NULL, RANDOM UUID     |
| firstname                        | VARCHAR(50)          | 1 by Employee                 | Persistant   | Prénom de l'employé                                  | NOT NULL                       |
| lastname                         | VARCHAR(50)          | 1 by Employee                 | Persistant   | Nom de famille de l'employé                          | NOT NULL                       |
| social_security                  | STRING               | 1 by Employee                 | Persistant   | Numéro de sécurité sociale de l'employé              | NOT NULL, Unique               |
| phone_number                     | VARCHAR(15)          | 1 by Employee                 | Persistant   | Numéro de contact de l'employé                       | NOT NULL, Unique                       |
| email                            | VARCHAR(100)         | 1 by Employee                 | Persistant   | Adresse e-mail de l'employé                          | NOT NULL, Unique                       |
| address                          | TEXT                 | 1 by Employee                 | Persistant   | Adresse complète de l'employé (format : STREET;CP;CITY) | NOT NULL                   |
| hiring_date                      | DATE                 | 1 by Employee                 | Persistant   | Date d'embauche de l'employé                         | NOT NULL                       |
| current_hourly_pay_rate          | DECIMAL(10, 4)       | 1 by Employee                 | Persistant   | Taux horaire actuel de l'employé                     | NOT NULL                       |
| current_overtime_pay_rate        | DECIMAL(10, 4)       | 1 by Employee                 | Persistant   | Taux de majoration pour heures supplémentaires       | NOT NULL                       |
| employee_vacation_count          | INT                  | 1 by Employee                 | Persistant   | Nombre total de jours de congés disponibles          | NOT NULL                       |
| user_id                          | uuid                  | 1 by Employee                 | Persistant   | Référence à l'utilisateur lié                        | NOT NULL, Foreign Key          |
| job_id                           | INT                  | 1 by Employee                 | Persistant   | Référence au poste de l'employé                      | NOT NULL, Foreign Key          |
| section | VARCHAR(20) | 1 by Employee | Persistant | Désigne généralement le département ou le service dans lequel l’employé travaille au sein de l'entreprise | NOT NULL |
| registration_number | NUMBER | 1 by Employee | Persistant | Numéro d'enregistrement | NOT NULL |
| **EmployeeHistory Table**        |                      |                          |              |                                                      |                                 |
| history_id                       | SERIAL (INT)                  | 1 by EmployeeHistory          | Persistant   | Identifiant unique de l'historique                   | NOT NULL, Auto-increment       |
| id_employee                      | uuid                  | 1 by EmployeeHistory                 | Persistant   | Identifiant unique de l'employé                      | NOT NULL, RANDOM UUID     |
| firstname                        | VARCHAR(50)          | 1 by EmployeeHistory                 | Persistant   | Prénom de l'employé                                  | NOT NULL                       |
| lastname                         | VARCHAR(50)          | 1 by EmployeeHistory                 | Persistant   | Nom de famille de l'employé                          | NOT NULL                       |
| phone_number                     | VARCHAR(15)          | 1 by EmployeeHistory                 | Persistant   | Numéro de contact de l'employé                       | NOT NULL                       |
| email                            | VARCHAR(100)         | 1 by EmployeeHistory                 | Persistant   | Adresse e-mail de l'employé                          | NOT NULL                       |
| address                          | TEXT                 | 1 by EmployeeHistory                 | Persistant   | Adresse complète de l'employé (format : STREET;CP;CITY) | NOT NULL                   |
| hiring_date                      | DATE                 | 1 by EmployeeHistory                 | Persistant   | Date d'embauche de l'employé                         | NOT NULL                       |
| current_hourly_pay_rate          | DECIMAL(10, 4)       | 1 by EmployeeHistory                 | Persistant   | Taux horaire actuel de l'employé                     | NOT NULL                       |
| current_overtime_pay_rate        | DECIMAL(10, 4)       | 1 by EmployeeHistory                 | Persistant   | Taux de majoration pour heures supplémentaires       | NOT NULL                       |
| employee_vacation_count          | INT                  | 1 by EmployeeHistory                 | Persistant   | Nombre total de jours de congés disponibles          | NOT NULL                       |
| user_id                          | uuid                  | 1 by EmployeeHistory                 | Persistant   | Référence à l'utilisateur lié                        | NOT NULL, Foreign Key          |
| job_id                           | INT                  | 1 by EmployeeHistory                 | Persistant   | Référence au poste de l'employé                      | NOT NULL, Foreign Key          |
| valid_from                       | DATE                 | 1 by EmployeeHistory          | Persistant   | Date de début de validité de cette entrée            | NOT NULL                       |
| valid_until                      | DATE                 | 1 by EmployeeHistory          | Persistant   | Date de fin de validité de cette entrée              |                                 |
| **Sheet Table**                  |                      |                          |              |                                                      |                                 |
| id_sheet                         | uuid                  | 1 by Sheet                    | Persistant   | Identifiant unique de la feuille                     | NOT NULL, RANDOM UUID |
| start_date                       | DATE                 | 1 by Sheet                    | Persistant   | Date de début de la période                          | NOT NULL                       |
| sup_hours | NUMBER | SHEET | Persistant Calculated | salaire total dû au heures supplémentaires | overtime_hours *current_hourly_pay_rate *current_overtime_pay_rate |
| gross_salary | NUMBER | 1 by Sheet | Calculated | Salaire brut avec heures supplémentaires |  base_salary + supHours | 
| base_salary  | NUMBER | 1 by Sheet | Calculated | Salaire de base | working_hours * current_hourly_pay_rate |
| net_salary   | NUMBER | 1 by Sheet | Calculated | Salaire net | gross_salary - total_employee_contribution |
| total_employee_contribution | NUMBER | 1 by Sheet | Calculated | somme des contributions à retenir du salaire | somme des contributions à retenir du salaire |
| total_employer_contribution | NUMBER | 1 by Sheet | Calculated | somme des contributions à retenir de l'employeur | somme des contributions à retenir de l'employeur |
| csg_unit | NUMBER | 1 by Sheet | Persistant calculated | Correspond à la ligne CSG déductible de l'impôt sur le revenu et CSG/CSRS imposable à l'impôt sur le revenu. | gross_salary * 0.9825 | 
| end_date                         | DATE                 | 1 by Sheet                    | Persistant   | Date de fin de la période                            | NOT NULL                       |
| version                          | INT                  | 1 by Sheet                    | Persistant   | Version de la feuille de paie                        | NOT NULL                       |
| working_hours                    | DECIMAL(10, 2)       | 1 by Sheet                    | Persistant   | Heures de travail mensuelles                         | NOT NULL                       |
| overtime_hours                   | DECIMAL(10, 2)       | 1 by Sheet                    | Persistant   | Heures supplémentaires                               | NOT NULL                       |
| contrib_reduction_overtime_rest_day | DECIMAL(10, 2)   | 1 by Sheet                    | Persistant   | Rachats jours de repos                               | NOT NULL                       |
| csg_unit                         | DECIMAL(10, 2)       | 1 by Sheet                    | Persistant   | CSG/CSRS imposable hres suppl et rachats jours repos | NOT NULL                       |
| rebought_non_taxable_days        | DECIMAL(10, 2)       | 1 by Sheet                    | Persistant   | HC/HS/Rachats jour non imposables                    | NOT NULL                       |
| net_tax                          | DECIMAL(10, 2)       | 1 by Sheet                    | Persistant   | Net fiscal                                           | NOT NULL                       |
| rebought_non_taxable_days_net    | DECIMAL(10, 2)       | 1 by Sheet                    | Persistant   | HC/HS/Rachats jours non imposable net                | NOT NULL                       |
| ss_sickness_maternity            | DECIMAL(10, 2)       | 1 by Sheet                    | Persistant   | Sécurité Sociale - Maladie Maternité Invalidité Décès| NOT NULL                       |
| ss_complementary                 | DECIMAL(10, 2)       | 1 by Sheet                    | Persistant   | Complémentaire Incapacité Décès                      | NOT NULL                       |
| work_incidents                   | DECIMAL(10, 2)       | 1 by Sheet                    | Persistant   | Accidents du travail - Maladies professionnelles     | NOT NULL                       |
| ss_capped                        | DECIMAL(10, 2)       | 1 by Sheet                    | Persistant   | Sécurité Sociale plafonnée                           | NOT NULL                       |
| ss_uncapped                      | DECIMAL(10, 2)       | 1 by Sheet                    | Persistant   | Sécurité Sociale déplafonnée                         | NOT NULL                       |
| complementary_slice_1            | DECIMAL(10, 2)       | 1 by Sheet                    | Persistant   | Complémentaire Tranche 1                             | NOT NULL                       |
| family                           | DECIMAL(10, 2)       | 1 by Sheet                    | Persistant   | FAMILLE                                             | NOT NULL                       |
| unemployed_insurance             | DECIMAL(10, 2)       | 1 by Sheet                    | Persistant   | ASSURANCE CHOMAGE                                    | NOT NULL                       |
| other_employer_contribution      | DECIMAL(10, 2)       | 1 by Sheet                    | Persistant   | AUTRES CONTRIBUTIONS DUES PAR L'EMPLOYEUR            | NOT NULL                       |
| states_exoneration               | DECIMAL(10, 2)       | 1 by Sheet                    | Persistant   | EXONERATIONS DE COTISATIONS EMPLOYEUR               | NOT NULL                       |
| total_exoneration                | DECIMAL(10, 2)       | 1 by Sheet                    | Persistant   | ALLEGEMENT DE COTISATIONS EMPLOYEUR                 | NOT NULL                       |
| salary_adjustment_without_contributions | NUMBER | 1 by Sheet | Paramètre | Salaire ajusté sans les contributions | NOT NULL |
| generated_pdf                    | BLOB                 | 1 by Sheet                    | Persistant   | Le PDF généré                                        |                                 |
| sheet_status                     | VARCHAR(20)          | 1 by Sheet                    | Persistant   | Statut de la feuille                                 | NOT NULL                       |
| id_employee                      | uuid                  | 1 by Sheet                 | Persistant   | Identifiant unique de l'employé                      | NOT NULL, RANDOM UUID     |
| **Vacation Table**               |                      |                          |              |                                                      |                                 |
| id_vacation                      | uuid                  | 1 by Vacation                 | Persistant   | Identifiant de la demande de congé                   | NOT NULL, RANDOM UUID |
| vacation_starting_date           | DATE                 | 1 by Vacation                 | Persistant   | Date de début du congé                               | NOT NULL                       |
| vacation_final_date              | DATE                 | 1 by Vacation                 | Persistant   | Date de fin du congé                                 | NOT NULL                       |
| vacation_date                    | DATE                 | 1 by Vacation                 | Persistant   | Date du congé                                        | NOT NULL                       |
| request_status                   | VARCHAR(20)          | 1 by Vacation                 | Persistant   | Statut de la demande de congé                        | NOT NULL                       |
| request_date                     | DATE                 | 1 by Vacation                 | Persistant   | Date de soumission de la demande de congé            | NOT NULL                       |
| id_employee                      | uuid                  | 1 by Vacation                 | Persistant   | Référence à l'employé                                | NOT NULL, Foreign Key          |
| **User Table**                   |                      |                          |              |                                                      |                                 |
| user_id                          | uuid                  | 1 by User                     | Persistant   | Identifiant de l'utilisateur                         | NOT NULL, RANDOM UUID |
| user_name                        | VARCHAR(50)          | 1 by User                     | Persistant   | Nom d'utilisateur pour la connexion                 | NOT NULL, Unique               |
| password                         | VARCHAR(100)         | 1 by User                     | Persistant   | Mot de passe de l'utilisateur                        | NOT NULL                       |
| role                             | VARCHAR(20)          | 1 by User                     | Persistant   | Rôle de l'utilisateur                               | NOT NULL                       |
| last_connected                   | DATETIME             | 1 by User                     | Persistant   | Dernière connexion de l'utilisateur                 |                                 |
| account_created                  | DATE                 | 1 by User                     | Persistant   | Date de création du compte                           | NOT NULL                       |
| **Job Table**                    |                      |                          |              |                                                      |                                 |
| job_id                           | SERIAL (INT)                  | 1 by Job                      | Persistant   | Identifiant du poste                                 | NOT NULL, Auto-increment       |
| job_name                         | VARCHAR(50)          | 1 by Job                      | Persistant   | Nom du poste                                         | NOT NULL                       |
| job_description                  | TEXT                 | 1 by Job                      | Persistant   | Description du poste                                |                                 |
| hour_salary                      | DECIMAL(10, 2)       | 1 by Job                      | Persistant   | Salaire horaire de base                             | NOT NULL                       |
| hour_overtime_increase           | DECIMAL(10, 2)       | 1 by Job                      | Persistant   | Augmentation de salaire horaire pour heures sup     | NOT NULL                       |
| **EmployeeJob Table**            |                      |                          |              |                                                      |                                 |
| ej_id                            | uuid                   | 1 by EmployeeJob              | Persistant   | Identifiant de la liaison employé-poste             | NOT NULL, RANDOM UUID |
| id_employee                      | uuid                  | 1 by EmployeeJob              | Persistant   | Référence à l'employé                               | NOT NULL, Foreign Key          |
| job_id                           | INT                  | 1 by EmployeeJob              | Persistant   | Référence au poste                                  | NOT NULL, Foreign Key          |
| job_start_date                   | DATE                 | 1 by EmployeeJob              | Persistant   | Date de début de l'emploi                           | NOT NULL                       |
| job_end_date                     | DATE                 | 1 by EmployeeJob              | Persistant   | Date de fin de l'emploi, NULL par défaut            | Default NULL                   |
