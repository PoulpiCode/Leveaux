CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

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
