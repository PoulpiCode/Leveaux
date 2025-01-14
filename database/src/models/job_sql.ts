import { QueryArrayConfig, QueryArrayResult } from "pg";

interface Client {
    query: (config: QueryArrayConfig) => Promise<QueryArrayResult>;
}

export const getAllJobsQuery = `-- name: GetAllJobs :many
SELECT job_id, job_name, job_description, hour_salary, hour_pay_increase FROM job`;

export interface GetAllJobsRow {
    jobId: number;
    jobName: string;
    jobDescription: string;
    hourSalary: string;
    hourPayIncrease: string;
}

export async function getAllJobs(client: Client): Promise<GetAllJobsRow[]> {
    const result = await client.query({
        text: getAllJobsQuery,
        values: [],
        rowMode: "array"
    });
    return result.rows.map(row => {
        return {
            jobId: row[0],
            jobName: row[1],
            jobDescription: row[2],
            hourSalary: row[3],
            hourPayIncrease: row[4]
        };
    });
}

export const getJobQuery = `-- name: GetJob :one
SELECT job_id, job_name, job_description, hour_salary, hour_pay_increase FROM job WHERE job_id=$1`;

export interface GetJobArgs {
    jobId: number;
}

export interface GetJobRow {
    jobId: number;
    jobName: string;
    jobDescription: string;
    hourSalary: string;
    hourPayIncrease: string;
}

export async function getJob(client: Client, args: GetJobArgs): Promise<GetJobRow | null> {
    const result = await client.query({
        text: getJobQuery,
        values: [args.jobId],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        jobId: row[0],
        jobName: row[1],
        jobDescription: row[2],
        hourSalary: row[3],
        hourPayIncrease: row[4]
    };
}

export const getJobEmployeesQuery = `-- name: GetJobEmployees :many
SELECT id_employee, firstname, lastname, social_security, phone_number, address, hiring_date, current_hourly_pay_rate, current_overtime_pay_rate, employee_vacation_count, section, registration_number, user_id, job_id FROM employee WHERE employee.job_id=job.job_id`;

export interface GetJobEmployeesRow {
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

export async function getJobEmployees(client: Client): Promise<GetJobEmployeesRow[]> {
    const result = await client.query({
        text: getJobEmployeesQuery,
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

export const getJobSalaryQuery = `-- name: GetJobSalary :one
SELECT hour_salary FROM job WHERE job_id=$1`;

export interface GetJobSalaryArgs {
    jobId: number;
}

export interface GetJobSalaryRow {
    hourSalary: string;
}

export async function getJobSalary(client: Client, args: GetJobSalaryArgs): Promise<GetJobSalaryRow | null> {
    const result = await client.query({
        text: getJobSalaryQuery,
        values: [args.jobId],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        hourSalary: row[0]
    };
}

export const insertJobQuery = `-- name: InsertJob :one
INSERT INTO job (
    job_name, job_description, hour_salary, hour_pay_increase
) VALUES (
    $1, $2, $3, $4
) RETURNING job_id, job_name, job_description, hour_salary, hour_pay_increase`;

export interface InsertJobArgs {
    jobName: string;
    jobDescription: string;
    hourSalary: string;
    hourPayIncrease: string;
}

export interface InsertJobRow {
    jobId: number;
    jobName: string;
    jobDescription: string;
    hourSalary: string;
    hourPayIncrease: string;
}

export async function insertJob(client: Client, args: InsertJobArgs): Promise<InsertJobRow | null> {
    const result = await client.query({
        text: insertJobQuery,
        values: [args.jobName, args.jobDescription, args.hourSalary, args.hourPayIncrease],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        jobId: row[0],
        jobName: row[1],
        jobDescription: row[2],
        hourSalary: row[3],
        hourPayIncrease: row[4]
    };
}

