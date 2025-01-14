import { QueryArrayConfig, QueryArrayResult } from "pg";

interface Client {
    query: (config: QueryArrayConfig) => Promise<QueryArrayResult>;
}

export const getAllVacationsQuery = `-- name: GetAllVacations :many
SELECT vacation_id, starting_date, final_date, vacation_status, request_date, id_employee FROM vacation`;

export interface GetAllVacationsRow {
    vacationId: string;
    startingDate: Date;
    finalDate: Date;
    vacationStatus: string;
    requestDate: Date;
    idEmployee: string;
}

export async function getAllVacations(client: Client): Promise<GetAllVacationsRow[]> {
    const result = await client.query({
        text: getAllVacationsQuery,
        values: [],
        rowMode: "array"
    });
    return result.rows.map(row => {
        return {
            vacationId: row[0],
            startingDate: row[1],
            finalDate: row[2],
            vacationStatus: row[3],
            requestDate: row[4],
            idEmployee: row[5]
        };
    });
}

export const getEmployeVacationsQuery = `-- name: GetEmployeVacations :many
SELECT vacation_id, starting_date, final_date, vacation_status, request_date, id_employee FROM vacation WHERE id_employee=$1`;

export interface GetEmployeVacationsArgs {
    idEmployee: string;
}

export interface GetEmployeVacationsRow {
    vacationId: string;
    startingDate: Date;
    finalDate: Date;
    vacationStatus: string;
    requestDate: Date;
    idEmployee: string;
}

export async function getEmployeVacations(client: Client, args: GetEmployeVacationsArgs): Promise<GetEmployeVacationsRow[]> {
    const result = await client.query({
        text: getEmployeVacationsQuery,
        values: [args.idEmployee],
        rowMode: "array"
    });
    return result.rows.map(row => {
        return {
            vacationId: row[0],
            startingDate: row[1],
            finalDate: row[2],
            vacationStatus: row[3],
            requestDate: row[4],
            idEmployee: row[5]
        };
    });
}

export const getEmployeeValidatedVacationsQuery = `-- name: GetEmployeeValidatedVacations :many
SELECT vacation_id, starting_date, final_date, vacation_status, request_date, id_employee FROM vacation WHERE request_status="validated" and id_employee=$1`;

export interface GetEmployeeValidatedVacationsArgs {
    idEmployee: string;
}

export interface GetEmployeeValidatedVacationsRow {
    vacationId: string;
    startingDate: Date;
    finalDate: Date;
    vacationStatus: string;
    requestDate: Date;
    idEmployee: string;
}

export async function getEmployeeValidatedVacations(client: Client, args: GetEmployeeValidatedVacationsArgs): Promise<GetEmployeeValidatedVacationsRow[]> {
    const result = await client.query({
        text: getEmployeeValidatedVacationsQuery,
        values: [args.idEmployee],
        rowMode: "array"
    });
    return result.rows.map(row => {
        return {
            vacationId: row[0],
            startingDate: row[1],
            finalDate: row[2],
            vacationStatus: row[3],
            requestDate: row[4],
            idEmployee: row[5]
        };
    });
}

export const getEmployeePendingVacationsQuery = `-- name: GetEmployeePendingVacations :many
SELECT vacation_id, starting_date, final_date, vacation_status, request_date, id_employee FROM vacation WHERE request_status="pending" and id_employee=$1`;

export interface GetEmployeePendingVacationsArgs {
    idEmployee: string;
}

export interface GetEmployeePendingVacationsRow {
    vacationId: string;
    startingDate: Date;
    finalDate: Date;
    vacationStatus: string;
    requestDate: Date;
    idEmployee: string;
}

export async function getEmployeePendingVacations(client: Client, args: GetEmployeePendingVacationsArgs): Promise<GetEmployeePendingVacationsRow[]> {
    const result = await client.query({
        text: getEmployeePendingVacationsQuery,
        values: [args.idEmployee],
        rowMode: "array"
    });
    return result.rows.map(row => {
        return {
            vacationId: row[0],
            startingDate: row[1],
            finalDate: row[2],
            vacationStatus: row[3],
            requestDate: row[4],
            idEmployee: row[5]
        };
    });
}

export const getEmployeeVacationsQuery = `-- name: GetEmployeeVacations :many
SELECT vacation_id, starting_date, final_date, vacation_status, request_date, id_employee FROM vacation WHERE id_employee=$1`;

export interface GetEmployeeVacationsArgs {
    idEmployee: string;
}

export interface GetEmployeeVacationsRow {
    vacationId: string;
    startingDate: Date;
    finalDate: Date;
    vacationStatus: string;
    requestDate: Date;
    idEmployee: string;
}

export async function getEmployeeVacations(client: Client, args: GetEmployeeVacationsArgs): Promise<GetEmployeeVacationsRow[]> {
    const result = await client.query({
        text: getEmployeeVacationsQuery,
        values: [args.idEmployee],
        rowMode: "array"
    });
    return result.rows.map(row => {
        return {
            vacationId: row[0],
            startingDate: row[1],
            finalDate: row[2],
            vacationStatus: row[3],
            requestDate: row[4],
            idEmployee: row[5]
        };
    });
}

export const getVacationDaysQuery = `-- name: GetVacationDays :one
SELECT (final_date - starting_date) AS vacation_days
FROM vacation WHERE id_employee = $1`;

export interface GetVacationDaysArgs {
    idEmployee: string;
}

export interface GetVacationDaysRow {
    vacationDays: string;
}

export async function getVacationDays(client: Client, args: GetVacationDaysArgs): Promise<GetVacationDaysRow | null> {
    const result = await client.query({
        text: getVacationDaysQuery,
        values: [args.idEmployee],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        vacationDays: row[0]
    };
}

export const getFutureVacationsQuery = `-- name: GetFutureVacations :many
SELECT vacation_id, starting_date, final_date, vacation_status, request_date, id_employee
FROM vacation
WHERE starting_date > $1`;

export interface GetFutureVacationsArgs {
    startingDate: Date;
}

export interface GetFutureVacationsRow {
    vacationId: string;
    startingDate: Date;
    finalDate: Date;
    vacationStatus: string;
    requestDate: Date;
    idEmployee: string;
}

export async function getFutureVacations(client: Client, args: GetFutureVacationsArgs): Promise<GetFutureVacationsRow[]> {
    const result = await client.query({
        text: getFutureVacationsQuery,
        values: [args.startingDate],
        rowMode: "array"
    });
    return result.rows.map(row => {
        return {
            vacationId: row[0],
            startingDate: row[1],
            finalDate: row[2],
            vacationStatus: row[3],
            requestDate: row[4],
            idEmployee: row[5]
        };
    });
}

