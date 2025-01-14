import { QueryArrayConfig, QueryArrayResult } from "pg";

interface Client {
    query: (config: QueryArrayConfig) => Promise<QueryArrayResult>;
}

export const getAllEmployeeJobQuery = `-- name: GetAllEmployeeJob :many
SELECT id_employee, job_id, job_start_date, job_end_date FROM employee_to_job`;

export interface GetAllEmployeeJobRow {
    idEmployee: string;
    jobId: number;
    jobStartDate: Date;
    jobEndDate: Date | null;
}

export async function getAllEmployeeJob(client: Client): Promise<GetAllEmployeeJobRow[]> {
    const result = await client.query({
        text: getAllEmployeeJobQuery,
        values: [],
        rowMode: "array"
    });
    return result.rows.map(row => {
        return {
            idEmployee: row[0],
            jobId: row[1],
            jobStartDate: row[2],
            jobEndDate: row[3]
        };
    });
}

export const getEmployeeJobQuery = `-- name: GetEmployeeJob :one
SELECT id_employee, job_id, job_start_date, job_end_date FROM employee_to_job WHERE id_employee=$1`;

export interface GetEmployeeJobArgs {
    idEmployee: string;
}

export interface GetEmployeeJobRow {
    idEmployee: string;
    jobId: number;
    jobStartDate: Date;
    jobEndDate: Date | null;
}

export async function getEmployeeJob(client: Client, args: GetEmployeeJobArgs): Promise<GetEmployeeJobRow | null> {
    const result = await client.query({
        text: getEmployeeJobQuery,
        values: [args.idEmployee],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        idEmployee: row[0],
        jobId: row[1],
        jobStartDate: row[2],
        jobEndDate: row[3]
    };
}

export const getEmployeeJobStartDateQuery = `-- name: GetEmployeeJobStartDate :one
SELECT job_start_date FROM employee_to_job WHERE id_employee=$1`;

export interface GetEmployeeJobStartDateArgs {
    idEmployee: string;
}

export interface GetEmployeeJobStartDateRow {
    jobStartDate: Date;
}

export async function getEmployeeJobStartDate(client: Client, args: GetEmployeeJobStartDateArgs): Promise<GetEmployeeJobStartDateRow | null> {
    const result = await client.query({
        text: getEmployeeJobStartDateQuery,
        values: [args.idEmployee],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        jobStartDate: row[0]
    };
}

