import { QueryArrayConfig, QueryArrayResult } from "pg";

interface Client {
    query: (config: QueryArrayConfig) => Promise<QueryArrayResult>;
}

export const getAllEmployeesQuery = `-- name: GetAllEmployees :many
SELECT id_employee, firstname, lastname, social_security, phone_number, address, hiring_date, current_hourly_pay_rate, current_overtime_pay_rate, employee_vacation_count, section, registration_number, user_id, job_id FROM employee`;

export interface GetAllEmployeesRow {
    idEmployee: string;
    firstname: string;
    lastname: string;
    socialSecurity: string;
    phoneNumber: string | null;
    address: string | null;
    hiringDate: Date;
    currentHourlyPayRate: string;
    currentOvertimePayRate: string;
    employeeVacationCount: number | null;
    section: string | null;
    registrationNumber: number | null;
    userId: string | null;
    jobId: number | null;
}

export async function getAllEmployees(client: Client): Promise<GetAllEmployeesRow[]> {
    const result = await client.query({
        text: getAllEmployeesQuery,
        values: [],
        rowMode: "array"
    });
    return result.rows.map(row => {
        return {
            idEmployee: row[0],
            firstname: row[1],
            lastname: row[2],
            socialSecurity: row[3],
            phoneNumber: row[4],
            address: row[5],
            hiringDate: row[6],
            currentHourlyPayRate: row[7],
            currentOvertimePayRate: row[8],
            employeeVacationCount: row[9],
            section: row[10],
            registrationNumber: row[11],
            userId: row[12],
            jobId: row[13]
        };
    });
}

export const getAllEmployeesInfoQuery = `-- name: GetAllEmployeesInfo :many
SELECT id_employee, firstname, lastname, social_security, phone_number, address, hiring_date, current_hourly_pay_rate, current_overtime_pay_rate, employee_vacation_count, section, registration_number, e.user_id, e.job_id, u.user_id, email_address, username, password, role, last_connected, account_created, j.job_id, job_name, job_description, hour_salary, hour_pay_increase FROM employee e
JOIN "User" u ON e.user_id = u.user_id 
JOIN job j ON e.job_id = j.job_id`;

export interface GetAllEmployeesInfoRow {
    idEmployee: string;
    firstname: string;
    lastname: string;
    socialSecurity: string;
    phoneNumber: string | null;
    address: string | null;
    hiringDate: Date;
    currentHourlyPayRate: string;
    currentOvertimePayRate: string;
    employeeVacationCount: number | null;
    section: string | null;
    registrationNumber: number | null;
    userId: string | null;
    jobId: number | null;
    userId_2: string;
    emailAddress: string;
    username: string;
    password: string;
    role: string;
    lastConnected: Date | null;
    accountCreated: Date | null;
    jobId_2: number;
    jobName: string;
    jobDescription: string;
    hourSalary: string;
    hourPayIncrease: string;
}

export async function getAllEmployeesInfo(client: Client): Promise<GetAllEmployeesInfoRow[]> {
    const result = await client.query({
        text: getAllEmployeesInfoQuery,
        values: [],
        rowMode: "array"
    });
    return result.rows.map(row => {
        return {
            idEmployee: row[0],
            firstname: row[1],
            lastname: row[2],
            socialSecurity: row[3],
            phoneNumber: row[4],
            address: row[5],
            hiringDate: row[6],
            currentHourlyPayRate: row[7],
            currentOvertimePayRate: row[8],
            employeeVacationCount: row[9],
            section: row[10],
            registrationNumber: row[11],
            userId: row[12],
            jobId: row[13],
            userId_2: row[14],
            emailAddress: row[15],
            username: row[16],
            password: row[17],
            role: row[18],
            lastConnected: row[19],
            accountCreated: row[20],
            jobId_2: row[21],
            jobName: row[22],
            jobDescription: row[23],
            hourSalary: row[24],
            hourPayIncrease: row[25]
        };
    });
}

export const getEmployeeQuery = `-- name: GetEmployee :one
SELECT id_employee, firstname, lastname, social_security, phone_number, address, hiring_date, current_hourly_pay_rate, current_overtime_pay_rate, employee_vacation_count, section, registration_number, e.user_id, e.job_id, j.job_id, job_name, job_description, hour_salary, hour_pay_increase, u.user_id, email_address, username, password, role, last_connected, account_created FROM employee e
JOIN job j ON e.job_id = j.job_id
JOIN "User" u ON u.user_id = e.user_id
WHERE e.id_employee=$1`;

export interface GetEmployeeArgs {
    idEmployee: string;
}

export interface GetEmployeeRow {
    idEmployee: string;
    firstname: string;
    lastname: string;
    socialSecurity: string;
    phoneNumber: string | null;
    address: string | null;
    hiringDate: Date;
    currentHourlyPayRate: string;
    currentOvertimePayRate: string;
    employeeVacationCount: number | null;
    section: string | null;
    registrationNumber: number | null;
    userId: string | null;
    jobId: number | null;
    jobId_2: number;
    jobName: string;
    jobDescription: string;
    hourSalary: string;
    hourPayIncrease: string;
    userId_2: string;
    emailAddress: string;
    username: string;
    password: string;
    role: string;
    lastConnected: Date | null;
    accountCreated: Date | null;
}

export async function getEmployee(client: Client, args: GetEmployeeArgs): Promise<GetEmployeeRow | null> {
    const result = await client.query({
        text: getEmployeeQuery,
        values: [args.idEmployee],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        idEmployee: row[0],
        firstname: row[1],
        lastname: row[2],
        socialSecurity: row[3],
        phoneNumber: row[4],
        address: row[5],
        hiringDate: row[6],
        currentHourlyPayRate: row[7],
        currentOvertimePayRate: row[8],
        employeeVacationCount: row[9],
        section: row[10],
        registrationNumber: row[11],
        userId: row[12],
        jobId: row[13],
        jobId_2: row[14],
        jobName: row[15],
        jobDescription: row[16],
        hourSalary: row[17],
        hourPayIncrease: row[18],
        userId_2: row[19],
        emailAddress: row[20],
        username: row[21],
        password: row[22],
        role: row[23],
        lastConnected: row[24],
        accountCreated: row[25]
    };
}

export const insertEmployeeQuery = `-- name: InsertEmployee :one
INSERT INTO Employee (
	firstname, lastname, social_security, phone_number,
	address, hiring_date, current_hourly_pay_rate,
	current_overtime_pay_rate, user_id, job_id)
VALUES (
	$1, $2, $3, $4, $5, $6,$7, $8, $9, $10
)
RETURNING id_employee, firstname, lastname, social_security, phone_number, address, hiring_date, current_hourly_pay_rate, current_overtime_pay_rate, employee_vacation_count, section, registration_number, user_id, job_id`;

export interface InsertEmployeeArgs {
    firstname: string;
    lastname: string;
    socialSecurity: string;
    phoneNumber: string | null;
    address: string | null;
    hiringDate: Date;
    currentHourlyPayRate: string;
    currentOvertimePayRate: string;
    userId: string | null;
    jobId: number | null;
}

export interface InsertEmployeeRow {
    idEmployee: string;
    firstname: string;
    lastname: string;
    socialSecurity: string;
    phoneNumber: string | null;
    address: string | null;
    hiringDate: Date;
    currentHourlyPayRate: string;
    currentOvertimePayRate: string;
    employeeVacationCount: number | null;
    section: string | null;
    registrationNumber: number | null;
    userId: string | null;
    jobId: number | null;
}

export async function insertEmployee(client: Client, args: InsertEmployeeArgs): Promise<InsertEmployeeRow | null> {
    const result = await client.query({
        text: insertEmployeeQuery,
        values: [args.firstname, args.lastname, args.socialSecurity, args.phoneNumber, args.address, args.hiringDate, args.currentHourlyPayRate, args.currentOvertimePayRate, args.userId, args.jobId],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        idEmployee: row[0],
        firstname: row[1],
        lastname: row[2],
        socialSecurity: row[3],
        phoneNumber: row[4],
        address: row[5],
        hiringDate: row[6],
        currentHourlyPayRate: row[7],
        currentOvertimePayRate: row[8],
        employeeVacationCount: row[9],
        section: row[10],
        registrationNumber: row[11],
        userId: row[12],
        jobId: row[13]
    };
}

