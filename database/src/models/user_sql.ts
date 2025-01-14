import { QueryArrayConfig, QueryArrayResult } from "pg";

interface Client {
    query: (config: QueryArrayConfig) => Promise<QueryArrayResult>;
}

export const getAllUsersQuery = `-- name: GetAllUsers :many
SELECT user_id, email_address, username, password, role, last_connected, account_created FROM "User"`;

export interface GetAllUsersRow {
    userId: string;
    emailAddress: string;
    username: string;
    password: string;
    role: string;
    lastConnected: Date | null;
    accountCreated: Date | null;
}

export async function getAllUsers(client: Client): Promise<GetAllUsersRow[]> {
    const result = await client.query({
        text: getAllUsersQuery,
        values: [],
        rowMode: "array"
    });
    return result.rows.map(row => {
        return {
            userId: row[0],
            emailAddress: row[1],
            username: row[2],
            password: row[3],
            role: row[4],
            lastConnected: row[5],
            accountCreated: row[6]
        };
    });
}

export const getUserQuery = `-- name: GetUser :one
SELECT user_id, email_address, username, password, role, last_connected, account_created FROM "User" WHERE email_address=$1`;

export interface GetUserArgs {
    emailAddress: string;
}

export interface GetUserRow {
    userId: string;
    emailAddress: string;
    username: string;
    password: string;
    role: string;
    lastConnected: Date | null;
    accountCreated: Date | null;
}

export async function getUser(client: Client, args: GetUserArgs): Promise<GetUserRow | null> {
    const result = await client.query({
        text: getUserQuery,
        values: [args.emailAddress],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        userId: row[0],
        emailAddress: row[1],
        username: row[2],
        password: row[3],
        role: row[4],
        lastConnected: row[5],
        accountCreated: row[6]
    };
}

export const getEmployeFromUSerQuery = `-- name: GetEmployeFromUSer :one
SELECT id_employee, firstname, lastname, social_security, phone_number, address, hiring_date, current_hourly_pay_rate, current_overtime_pay_rate, employee_vacation_count, section, registration_number, user_id, job_id FROM employee WHERE employee.user_id=$1`;

export interface GetEmployeFromUSerArgs {
    userId: string | null;
}

export interface GetEmployeFromUSerRow {
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

export async function getEmployeFromUSer(client: Client, args: GetEmployeFromUSerArgs): Promise<GetEmployeFromUSerRow | null> {
    const result = await client.query({
        text: getEmployeFromUSerQuery,
        values: [args.userId],
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

export const insertUserQuery = `-- name: InsertUser :one
INSERT INTO "User" (
    email_address, username, password, role
) VALUES (
	$1, $2, $3, $4
) RETURNING user_id, email_address, username, password, role, last_connected, account_created`;

export interface InsertUserArgs {
    emailAddress: string;
    username: string;
    password: string;
    role: string;
}

export interface InsertUserRow {
    userId: string;
    emailAddress: string;
    username: string;
    password: string;
    role: string;
    lastConnected: Date | null;
    accountCreated: Date | null;
}

export async function insertUser(client: Client, args: InsertUserArgs): Promise<InsertUserRow | null> {
    const result = await client.query({
        text: insertUserQuery,
        values: [args.emailAddress, args.username, args.password, args.role],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        userId: row[0],
        emailAddress: row[1],
        username: row[2],
        password: row[3],
        role: row[4],
        lastConnected: row[5],
        accountCreated: row[6]
    };
}

export const getRolesQuery = `-- name: GetRoles :many
SELECT unnest(enum_range(NULL::Role)) as name`;

export interface GetRolesRow {
    name: string;
}

export async function getRoles(client: Client): Promise<GetRolesRow[]> {
    const result = await client.query({
        text: getRolesQuery,
        values: [],
        rowMode: "array"
    });
    return result.rows.map(row => {
        return {
            name: row[0]
        };
    });
}

