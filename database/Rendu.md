# Rendu Saé BUT2 – SQL dans un langage de programmation

## Équipe

L'équipe **17** est composée de:

 - Adrien **GODET** *(G3)*
 - David **KIZAYILAWOKO** *(G2)*
 - Thomas **LEPAGE** *(G2)*
 - Paul **MAILLARD** *(G2)*
 - Cédric **MAS** *(G2)*
 - Guerby **NAHARRO** *(G2)*

## Conception de la BDD

### Conception générale

#### Description des objects fonctionnels

##### 1. *Employee*

La table *Employee* a pour objectif d'enregistrer les informations importantes
personnelles et professionnelles d'un employé.

##### 2. *User*

La table *User* enregistre les informations de l'utilisateur employeur ou employé.

##### 3. *Job*

La table *Job* enregistre tout les emplois que l'entreprise Gerico propose et donc les postes occupables par les employés. 

##### 4. *EmployeeToJob*

Enregistre dans *EmployeeToJob* les postes qu'occupe ou qu'ont occupé chacun des employés au sein de l'entreprise et au cours de leur carrière. 

##### 5. *Sheet*

Enregistre dans *Sheet* tous les calculs, taux, et autres données nécessaires et obligatoires pour avoir une fiche de paie en accord avec la loi française. 

##### 6. *Vacation*

La table *Vacation* enregistre tout ce qui est relatif aux jours de congés que l'employé veut prendre, a pris ou ont été refusés. 

##### 7. *EmployeeHistory*

Un employé est archivé dans *EmployeeHistory* afin de pouvoir conserver ses informations si la fiche de paie n'a pas été générée à temps.

#### MCD et dictionnaire de données

##### MCD

![[gerico-mpd-MCD.drawio.svg|550]]


##### Dictionnaire des données

| Nom colonne                             | Type de donnée | Justification        | Nature                | Description                                                                                                  | Règles                                                               |
| --------------------------------------- | -------------- | -------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| **Employee Table**                      |                |                      |                       |                                                                                                              |                                                                      |
| id_employee                             | uuid           | 1 by Employee        | Persistant            | Identifiant unique de l'employé                                                                              | NOT NULL, RANDOM UUID                                                |
| firstname                               | VARCHAR(50)    | 1 by Employee        | Persistant            | Prénom de l'employé                                                                                          | NOT NULL                                                             |
| lastname                                | VARCHAR(50)    | 1 by Employee        | Persistant            | Nom de famille de l'employé                                                                                  | NOT NULL                                                             |
| social_security                         | VARCHAR(13)    | 1 by Employee        | Persistant            | Numéro de sécurité sociale de l'employé                                                                      | NOT NULL, Unique                                                     |
| phone_number                            | VARCHAR(10)    | 1 by Employee        | Persistant            | Numéro de contact de l'employé                                                                               | NOT NULL, Unique                                                     |
| address                                 | TEXT           | 1 by Employee        | Persistant            | Adresse complète de l'employé (format : STREET;CP;CITY)                                                      | NOT NULL                                                             |
| hiring_date                             | DATE           | 1 by Employee        | Persistant            | Date d'embauche de l'employé                                                                                 | NOT NULL                                                             |
| current_hourly_pay_rate                 | DECIMAL(10, 4) | 1 by Employee        | Persistant            | Taux horaire actuel de l'employé                                                                             | NOT NULL                                                             |
| current_overtime_pay_rate               | DECIMAL(10, 4) | 1 by Employee        | Persistant            | Taux de majoration pour heures supplémentaires                                                               | NOT NULL                                                             |
| employee_vacation_count                 | INT            | 1 by Employee        | Persistant            | Nombre total de jours de congés disponibles                                                                  | NOT NULL                                                             |
| user_id                                 | uuid           | 1 by Employee        | Persistant            | Référence à l'utilisateur lié                                                                                | NOT NULL, Foreign Key                                                |
| section                                 | VARCHAR(20)    | 1 by Employee        | Persistant            | Désigne généralement le département ou le service dans lequel l’employé travaille au sein de l'entreprise    | NOT NULL                                                             |
| registration_number                     | NUMBER         | 1 by Employee        | Persistant            | Numéro d'enregistrement                                                                                      | NOT NULL                                                             |
| **EmployeeHistory Table**               |                |                      |                       |                                                                                                              |                                                                      |
| history_id                              | SERIAL (INT)   | 1 by EmployeeHistory | Persistant Calculated | Identifiant unique de l'historique                                                                           | NOT NULL, Auto-increment                                             |
| id_employee                             | uuid           | 1 by EmployeeHistory | Persistant            | Identifiant unique de l'employé                                                                              | NOT NULL, RANDOM UUID                                                |
| firstname                               | VARCHAR(50)    | 1 by EmployeeHistory | Persistant            | Prénom de l'employé                                                                                          | NOT NULL                                                             |
| lastname                                | VARCHAR(50)    | 1 by EmployeeHistory | Persistant            | Nom de famille de l'employé                                                                                  | NOT NULL                                                             |
| phone_number                            | VARCHAR(15)    | 1 by EmployeeHistory | Persistant            | Numéro de contact de l'employé                                                                               | NOT NULL                                                             |
| address                                 | TEXT           | 1 by EmployeeHistory | Persistant            | Adresse complète de l'employé (format : STREET;CP;CITY)                                                      | NOT NULL                                                             |
| current_hourly_pay_rate                 | DECIMAL(10, 4) | 1 by EmployeeHistory | Persistant            | Taux horaire actuel de l'employé                                                                             | NOT NULL                                                             |
| current_overtime_pay_rate               | DECIMAL(10, 4) | 1 by EmployeeHistory | Persistant            | Taux de majoration pour heures supplémentaires                                                               | NOT NULL                                                             |
| employee_vacation_count                 | INT            | 1 by EmployeeHistory | Persistant            | Nombre total de jours de congés disponibles                                                                  | NOT NULL                                                             |
| registration_number                     | NUMBER         | 1 by EmployeeHistory | Persistant            | Numéro d'enregistrement                                                                                      | NOT NULL                                                             |
| valid_from                              | DATE           | 1 by EmployeeHistory | Persistant            | Date de début de validité de cette entrée                                                                    |                                                                      |
| valid_until                             | DATE           | 1 by EmployeeHistory | Persistant            | Date de fin de validité de cette entrée                                                                      |                                                                      |
| **Sheet Table**                         |                |                      |                       |                                                                                                              |                                                                      |
| id_sheet                                | uuid           | 1 by Sheet           | Persistant            | Identifiant unique de la feuille                                                                             | NOT NULL, RANDOM UUID                                                |
| start_date                              | DATE           | 1 by Sheet           | Persistant            | Date de début de la période                                                                                  | NOT NULL                                                             |
| sup_hours                               | NUMBER         | SHEET                | Persistant Calculated | salaire total dû au heures supplémentaires                                                                   | overtime_hours \*current_hourly_pay_rate \*current_overtime_pay_rate |
| gross_salary                            | NUMBER         | 1 by Sheet           | Calculated            | Salaire brut avec heures supplémentaires                                                                     | base_salary + supHours                                               |
| base_salary                             | NUMBER         | 1 by Sheet           | Calculated            | Salaire de base                                                                                              | working_hours \* current_hourly_pay_rate                             |
| net_salary                              | NUMBER         | 1 by Sheet           | Calculated            | Salaire net                                                                                                  | gross_salary - total_employee_contribution                           |
| total_employee_contribution             | NUMBER         | 1 by Sheet           | Calculated            | somme des contributions à retenir du salaire                                                                 | somme des contributions à retenir du salaire                         |
| total_employer_contribution             | NUMBER         | 1 by Sheet           | Calculated            | somme des contributions à retenir de l'employeur                                                             | somme des contributions à retenir de l'employeur                     |
| csg_unit                                | NUMBER         | 1 by Sheet           | Persistant calculated | Correspond à la ligne CSG déductible de l'impôt sur le revenu et CSG/CSRS imposable à l'impôt sur le revenu. | gross_salary \* 0.9825                                               |
| end_date                                | DATE           | 1 by Sheet           | Persistant            | Date de fin de la période                                                                                    | NOT NULL                                                             |
| version                                 | INT            | 1 by Sheet           | Persistant            | Version de la feuille de paie                                                                                | NOT NULL                                                             |
| working_hours                           | DECIMAL(10, 2) | 1 by Sheet           | Persistant            | Heures de travail mensuelles                                                                                 | NOT NULL                                                             |
| overtime_hours                          | DECIMAL(10, 2) | 1 by Sheet           | Persistant            | Heures supplémentaires                                                                                       | NOT NULL                                                             |
| contrib_reduction_overtime_rest_day     | DECIMAL(10, 2) | 1 by Sheet           | Persistant            | Rachats jours de repos                                                                                       | NOT NULL                                                             |
| csg_unit                                | DECIMAL(10, 2) | 1 by Sheet           | Persistant            | CSG/CSRS imposable hres suppl et rachats jours repos                                                         | NOT NULL                                                             |
| rebought_non_taxable_days               | DECIMAL(10, 2) | 1 by Sheet           | Persistant            | HC/HS/Rachats jour non imposables                                                                            | NOT NULL                                                             |
| net_tax                                 | DECIMAL(10, 2) | 1 by Sheet           | Persistant            | Net fiscal                                                                                                   | NOT NULL                                                             |
| rebought_non_taxable_days_net           | DECIMAL(10, 2) | 1 by Sheet           | Persistant            | HC/HS/Rachats jours non imposable net                                                                        | NOT NULL                                                             |
| ss_sickness_maternity                   | DECIMAL(10, 2) | 1 by Sheet           | Persistant            | Sécurité Sociale - Maladie Maternité Invalidité Décès                                                        | NOT NULL                                                             |
| ss_complementary                        | DECIMAL(10, 2) | 1 by Sheet           | Persistant            | Complémentaire Incapacité Décès                                                                              | NOT NULL                                                             |
| work_incidents                          | DECIMAL(10, 2) | 1 by Sheet           | Persistant            | Accidents du travail - Maladies professionnelles                                                             | NOT NULL                                                             |
| ss_capped                               | DECIMAL(10, 2) | 1 by Sheet           | Persistant            | Sécurité Sociale plafonnée                                                                                   | NOT NULL                                                             |
| ss_uncapped                             | DECIMAL(10, 2) | 1 by Sheet           | Persistant            | Sécurité Sociale déplafonnée                                                                                 | NOT NULL                                                             |
| complementary_slice_1                   | DECIMAL(10, 2) | 1 by Sheet           | Persistant            | Complémentaire Tranche 1                                                                                     | NOT NULL                                                             |
| family                                  | DECIMAL(10, 2) | 1 by Sheet           | Persistant            | FAMILLE                                                                                                      | NOT NULL                                                             |
| unemployed_insurance                    | DECIMAL(10, 2) | 1 by Sheet           | Persistant            | ASSURANCE CHOMAGE                                                                                            | NOT NULL                                                             |
| other_employer_contribution             | DECIMAL(10, 2) | 1 by Sheet           | Persistant            | AUTRES CONTRIBUTIONS DUES PAR L'EMPLOYEUR                                                                    | NOT NULL                                                             |
| states_exoneration                      | DECIMAL(10, 2) | 1 by Sheet           | Persistant            | EXONERATIONS DE COTISATIONS EMPLOYEUR                                                                        | NOT NULL                                                             |
| total_exoneration                       | DECIMAL(10, 2) | 1 by Sheet           | Persistant            | ALLEGEMENT DE COTISATIONS EMPLOYEUR                                                                          | NOT NULL                                                             |
| salary_adjustment_without_contributions | NUMBER         | 1 by Sheet           | Paramètre             | Salaire ajusté sans les contributions                                                                        | NOT NULL                                                             |
| generated_pdf                           | BLOB           | 1 by Sheet           | Persistant            | Le PDF généré                                                                                                |                                                                      |
| sheet_status                            | VARCHAR(20)    | 1 by Sheet           | Persistant            | Statut de la feuille                                                                                         | NOT NULL                                                             |
| id_employee                             | uuid           | 1 by Sheet           | Persistant            | Identifiant unique de l'employé                                                                              | NOT NULL, RANDOM UUID                                                |
| **Vacation Table**                      |                |                      |                       |                                                                                                              |                                                                      |
| id_vacation                             | uuid           | 1 by Vacation        | Persistant            | Identifiant de la demande de congé                                                                           | NOT NULL, RANDOM UUID                                                |
| vacation_starting_date                  | DATE           | 1 by Vacation        | Persistant            | Date de début du congé                                                                                       | NOT NULL                                                             |
| vacation_final_date                     | DATE           | 1 by Vacation        | Persistant            | Date de fin du congé                                                                                         | NOT NULL                                                             |
| vacation_date                           | DATE           | 1 by Vacation        | Persistant            | Date du congé                                                                                                | NOT NULL                                                             |
| request_status                          | VARCHAR(20)    | 1 by Vacation        | Persistant            | Statut de la demande de congé                                                                                | NOT NULL                                                             |
| request_date                            | DATE           | 1 by Vacation        | Persistant            | Date de soumission de la demande de congé                                                                    | NOT NULL                                                             |
| id_employee                             | uuid           | 1 by Vacation        | Persistant            | Référence à l'employé                                                                                        | NOT NULL, Foreign Key                                                |
| **User Table**                          |                |                      |                       |                                                                                                              |                                                                      |
| user_id                                 | uuid           | 1 by User            | Persistant            | Identifiant de l'utilisateur                                                                                 | NOT NULL, RANDOM UUID                                                |
| user_name                               | VARCHAR(50)    | 1 by User            | Persistant            | Nom d'utilisateur pour la connexion                                                                          | NOT NULL, Unique                                                     |
| email_address                           | VARCHAR(100)   | 1 by User            | Persistant            | Mail de connexion                                                                                            | NOT NULL, Unique                                                     |
| password                                | TEXT           | 1 by User            | Persistant            | Mot de passe de l'utilisateur                                                                                | NOT NULL                                                             |
| role                                    | VARCHAR(20)    | 1 by User            | Persistant            | Rôle de l'utilisateur                                                                                        | NOT NULL                                                             |
| last_connected                          | TIMESTAMP      | 1 by User            | Persistant            | Dernière connexion de l'utilisateur                                                                          |                                                                      |
| account_created                         | TIMESTAMP      | 1 by User            | Persistant            | Date de création du compte                                                                                   | NOT NULL                                                             |
| **Job Table**                           |                |                      |                       |                                                                                                              |                                                                      |
| job_id                                  | SERIAL (INT)   | 1 by Job             | Persistant Calculated | Identifiant du poste                                                                                         | NOT NULL, Auto-increment                                             |
| job_name                                | VARCHAR(50)    | 1 by Job             | Persistant            | Nom du poste                                                                                                 | NOT NULL                                                             |
| job_description                         | TEXT           | 1 by Job             | Persistant            | Description du poste                                                                                         |                                                                      |
| hour_salary                             | DECIMAL(10, 2) | 1 by Job             | Persistant            | Salaire horaire de base                                                                                      | NOT NULL                                                             |
| hour_overtime_increase                  | DECIMAL(10, 2) | 1 by Job             | Persistant            | Augmentation de salaire horaire pour heures sup                                                              | NOT NULL                                                             |
| **EmployeeJob Table**                   |                |                      |                       |                                                                                                              |                                                                      |
| id_employee                             | uuid           | 1 by EmployeeJob     | Persistant            | Référence à l'employé                                                                                        | PRIMARY KEY, Foreign Key                                             |
| job_id                                  | INT            | 1 by EmployeeJob     | Persistant            | Référence au poste                                                                                           | PRIMARY KEY, Foreign Key                                             |
| job_start_date                          | DATE           | 1 by EmployeeJob     | Persistant            | Date de début de l'emploi                                                                                    | PRIMARY KEY                                                          |
| job_end_date                            | DATE           | 1 by EmployeeJob     | Persistant            | Date de fin de l'emploi, NULL par défaut                                                                     | Default NULL                                                         |

##### Fiches de paie

Nous générons la fiche de paie en PDF dès que l'utilisateur clique dessus dans sa
section *Fiches de paie* sur le site internet. Les données statiques de cette fiche de
paie sont bien évidemment stockées dans la base de données, et vont permettre de
calculer le reste pour la génération. Une fois générée, la fiche de paie est
enregistrer dans la base de données, dans la colonne *sheet.generated_pdf*.
Si l'employé souhaite revoir sa fiche de paie, on renverra juste le PDF déjà
généré.

### Conception détaillée

#### MLD

![[gerico-mpd-MLD.drawio.svg|550]]

#### Choix de la technologie

Nous avons décidé de partir avec le SGBDR [PostgreSQL](https://www.postgresql.org/),
car c'est une technologie Open-Source très avancée qui existe depuis plus de 25 ans, elle a une forte réputation pour être stable et rapide. 
Des [*benchmarks*](https://www.youtube.com/watch?v=R7jBtnrUmYI) (https://www.youtube.com/watch?v=R7jBtnrUmYI) montrent même qu'elle est plus performante que *MySQL*. 
Sa documentation est bien détaillée et elle a une communauté très investie.

#### MPD

![[gerico-mpd-MPD.drawio.svg|550]]

#### Scripts de création des tables

```sql
CREATE TYPE Status AS ENUM ('Approved', 'Pending', 'Disapproved');

CREATE TABLE IF NOT EXISTS Vacation (
	vacation_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	starting_date DATE NOT NULL,
	final_date DATE NOT NULL,
	vacation_status Status NOT NULL DEFAULT 'Pending',
	request_date DATE NOT NULL
);
```

```sql
CREATE TYPE Role AS ENUM ('Employee', 'Admin');

CREATE TABLE IF NOT EXISTS "User" (
	user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	email_address VARCHAR(100) NOT NULL UNIQUE,
	username VARCHAR(50) NOT NULL UNIQUE,
	password TEXT NOT NULL,
	role Role NOT NULL DEFAULT 'Employee',
	last_connected TIMESTAMP,
	account_created TIMESTAMP DEFAULT NOW()
);
```

```sql
CREATE TABLE IF NOT EXISTS job (
	job_id SERIAL PRIMARY KEY,
	job_name VARCHAR(50) NOT NULL,
	job_description TEXT NOT NULL,
	hour_salary DECIMAL(2, 10) NOT NULL,
	hour_pay_increase DECIMAL(2, 10) NOT NULL
);
```

```sql
CREATE TABLE IF NOT EXISTS Employee (
    id_employee uuid PRIMARY KEY DEFAULT uuid_generate_v4(), -- Employee identifier
    firstname VARCHAR(50) NOT NULL, -- First name of employee
    lastname VARCHAR(50) NOT NULL, -- Last name of employee
    social_security VARCHAR(13) UNIQUE NOT NULL, -- Social security number (unique, not null)
    phone_number VARCHAR(10), -- Contact number of employee
    address TEXT, -- Home address of employee in format: STREET;CP;CITY
    hiring_date DATE NOT NULL, -- Employee's hiring date
    current_hourly_pay_rate DECIMAL(10, 4) NOT NULL, -- The current hourly pay rate
    current_overtime_pay_rate DECIMAL(10, 4) NOT NULL, -- The current overtime pay rate
    employee_vacation_count INT DEFAULT 0, -- Total vacation days available (defaults to 0)
    section VARCHAR(20), -- Désigne généralement le département ou le service dans lequel l’employé travaille au sein de l'entreprise
    registration_number INT,
    user_id uuid, -- Reference to User
    job_id INT, -- Reference to Job
    FOREIGN KEY (user_id) REFERENCES User(user_id), -- Foreign key to User table
    FOREIGN KEY (job_id) REFERENCES Job(job_id) -- Foreign key to Job table
);
```

```sql
CREATE TABLE IF NOT EXISTS Sheet (
    id_sheet uuid PRIMARY KEY DEFAULT uuid_generate_v4(), -- Identifier for the sheet
    start_date DATE NOT NULL, -- Beginning of the period
    end_date DATE NOT NULL, -- End of the period
    version INT NOT NULL, -- Sheet's version
    working_hours DECIMAL(10, 2) NOT NULL, -- Monthly working hours
    overtime_hours DECIMAL(10, 2) NOT NULL, -- Overtime hours
    contrib_reduction_overtime_rest_day DECIMAL(10, 2) NOT NULL, -- Rachats jours de repos
    csg_unit DECIMAL(10, 2) NOT NULL, -- CSG/CSRS imposable à l'impôt sur le revenu hres suppl et rachats jours repos
    rebought_non_taxable_days DECIMAL(10, 2) NOT NULL, -- HC/HS/Rachats jour non imposables
    net_tax DECIMAL(10, 2) NOT NULL, -- Net fiscal
    rebought_non_taxable_days_net DECIMAL(10, 2) NOT NULL, -- HC/HS/Rachats jours non imposable net
    ss_sickness_maternity DECIMAL(10, 2) NOT NULL, -- Sécurité Sociale - Maladie Maternité Invalidité Décès
    ss_complementary DECIMAL(10, 2) NOT NULL, -- Complémentaire Incapacité Décès
    work_incidents DECIMAL(10, 2) NOT NULL, -- ACCIDENTS DU TRAVAIL - MALADIES PROFESSIONNELLES
    ss_capped DECIMAL(10, 2) NOT NULL, -- Sécurité Sociale plafonnée
    ss_uncapped DECIMAL(10, 2) NOT NULL, -- Sécurité Sociale déplafonnée
    complementary_slice_1 DECIMAL(10, 2) NOT NULL, -- Complémentaire Tranche 1
    family DECIMAL(10, 2) NOT NULL, -- FAMILLE
    unemployed_insurance DECIMAL(10, 2) NOT NULL, -- ASSURANCE CHOMAGE
    other_employer_contribution DECIMAL(10, 2) NOT NULL, -- AUTRES CONTRIBUTIONS DUES PAR L'EMPLOYEUR
    states_exoneration DECIMAL(10, 2) NOT NULL, -- EXONERATIONS DE COTISATIONS EMPLOYEUR
    total_exoneration DECIMAL(10, 2) NOT NULL, -- ALLEGEMENT DE COTISATIONS EMPLOYEUR
    generated_pdf BYTEA, -- The generated PDF (stored as binary data)
    sheet_status VARCHAR(20) NOT NULL, -- Status of the sheet
    id_employee uuid, -- Reference to Employee
	FOREIGN KEY (id_employee) REFERENCES Employee(id_employee) -- Foreign key constraint to Employee table
);
```


```sql
CREATE TABLE IF NOT EXISTS EmployeeHistory (
    history_id SERIAL PRIMARY KEY, -- History record identifier (auto-incremented)
    id_employee uuid NOT NULL, -- Reference to Employee (foreign key)
    firstname VARCHAR(50) NOT NULL, -- First name of employee at the time of snapshot
    lastname VARCHAR(50) NOT NULL, -- Last name of employee at the time of snapshot
    phone_number VARCHAR(10), -- Contact number of employee at the time of snapshot
    address TEXT, -- Home address of employee at the time of snapshot
    current_hourly_pay_rate DECIMAL(10, 4) NOT NULL, -- Hourly pay rate at the time of snapshot
    current_overtime_pay_rate DECIMAL(10, 4) NOT NULL, -- Overtime pay rate at the time of snapshot
    section VARCHAR(20), -- Désigne généralement le département ou le service dans lequel l’employé travaille au sein de l'entreprise
    registration_number INT,
    valid_from DATE NOT NULL, -- This snapshot is valid from this timestamp
    valid_until DATE, -- Until this timestamp, NULL means "current" record
    FOREIGN KEY (id_employee) REFERENCES Employee(id_employee), -- Foreign key to Employee table
);
```

```sql
CREATE TABLE IF NOT EXISTS employee_to_job (
	id_employee uuid,
	job_id INT,
	job_start_date DATE,
	job_end_date DATE,

	PRIMARY KEY (id_employee, job_id, job_start_date),
	FOREIGN KEY (id_employee) REFERENCES employee(id_employee),
	FOREIGN KEY (job_id) REFERENCES job(job_id)
);
```
