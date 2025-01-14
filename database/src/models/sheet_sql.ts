import { QueryArrayConfig, QueryArrayResult } from "pg";

interface Client {
    query: (config: QueryArrayConfig) => Promise<QueryArrayResult>;
}

export const getAllSheetsQuery = `-- name: GetAllSheets :many
SELECT id_sheet, start_date, end_date, version, working_hours, overtime_hours, contrib_reduction_overtime_rest_day, csg_unit, rebought_non_taxable_days, net_tax, rebought_non_taxable_days_net, ss_sickness_maternity, ss_complementary, work_incidents, ss_capped, ss_uncapped, complementary_slice_1, family, unemployed_insurance, other_employer_contribution, states_exoneration, total_exoneration, generated_pdf, sheet_status, id_employee FROM sheet`;

export interface GetAllSheetsRow {
    idSheet: string;
    startDate: Date;
    endDate: Date;
    version: number;
    workingHours: string;
    overtimeHours: string;
    contribReductionOvertimeRestDay: string;
    csgUnit: string;
    reboughtNonTaxableDays: string;
    netTax: string;
    reboughtNonTaxableDaysNet: string;
    ssSicknessMaternity: string;
    ssComplementary: string;
    workIncidents: string;
    ssCapped: string;
    ssUncapped: string;
    complementarySlice_1: string;
    family: string;
    unemployedInsurance: string;
    otherEmployerContribution: string;
    statesExoneration: string;
    totalExoneration: string;
    generatedPdf: Buffer | null;
    sheetStatus: string;
    idEmployee: string | null;
}

export async function getAllSheets(client: Client): Promise<GetAllSheetsRow[]> {
    const result = await client.query({
        text: getAllSheetsQuery,
        values: [],
        rowMode: "array"
    });
    return result.rows.map(row => {
        return {
            idSheet: row[0],
            startDate: row[1],
            endDate: row[2],
            version: row[3],
            workingHours: row[4],
            overtimeHours: row[5],
            contribReductionOvertimeRestDay: row[6],
            csgUnit: row[7],
            reboughtNonTaxableDays: row[8],
            netTax: row[9],
            reboughtNonTaxableDaysNet: row[10],
            ssSicknessMaternity: row[11],
            ssComplementary: row[12],
            workIncidents: row[13],
            ssCapped: row[14],
            ssUncapped: row[15],
            complementarySlice_1: row[16],
            family: row[17],
            unemployedInsurance: row[18],
            otherEmployerContribution: row[19],
            statesExoneration: row[20],
            totalExoneration: row[21],
            generatedPdf: row[22],
            sheetStatus: row[23],
            idEmployee: row[24]
        };
    });
}

export const getSheetQuery = `-- name: GetSheet :one
SELECT id_sheet, start_date, end_date, version, working_hours, overtime_hours, contrib_reduction_overtime_rest_day, csg_unit, rebought_non_taxable_days, net_tax, rebought_non_taxable_days_net, ss_sickness_maternity, ss_complementary, work_incidents, ss_capped, ss_uncapped, complementary_slice_1, family, unemployed_insurance, other_employer_contribution, states_exoneration, total_exoneration, generated_pdf, sheet_status, id_employee FROM sheet WHERE id_sheet=$1`;

export interface GetSheetArgs {
    idSheet: string;
}

export interface GetSheetRow {
    idSheet: string;
    startDate: Date;
    endDate: Date;
    version: number;
    workingHours: string;
    overtimeHours: string;
    contribReductionOvertimeRestDay: string;
    csgUnit: string;
    reboughtNonTaxableDays: string;
    netTax: string;
    reboughtNonTaxableDaysNet: string;
    ssSicknessMaternity: string;
    ssComplementary: string;
    workIncidents: string;
    ssCapped: string;
    ssUncapped: string;
    complementarySlice_1: string;
    family: string;
    unemployedInsurance: string;
    otherEmployerContribution: string;
    statesExoneration: string;
    totalExoneration: string;
    generatedPdf: Buffer | null;
    sheetStatus: string;
    idEmployee: string | null;
}

export async function getSheet(client: Client, args: GetSheetArgs): Promise<GetSheetRow | null> {
    const result = await client.query({
        text: getSheetQuery,
        values: [args.idSheet],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        idSheet: row[0],
        startDate: row[1],
        endDate: row[2],
        version: row[3],
        workingHours: row[4],
        overtimeHours: row[5],
        contribReductionOvertimeRestDay: row[6],
        csgUnit: row[7],
        reboughtNonTaxableDays: row[8],
        netTax: row[9],
        reboughtNonTaxableDaysNet: row[10],
        ssSicknessMaternity: row[11],
        ssComplementary: row[12],
        workIncidents: row[13],
        ssCapped: row[14],
        ssUncapped: row[15],
        complementarySlice_1: row[16],
        family: row[17],
        unemployedInsurance: row[18],
        otherEmployerContribution: row[19],
        statesExoneration: row[20],
        totalExoneration: row[21],
        generatedPdf: row[22],
        sheetStatus: row[23],
        idEmployee: row[24]
    };
}

export const getMostRecentSheetQuery = `-- name: GetMostRecentSheet :one
SELECT id_sheet, start_date, end_date, version, working_hours, overtime_hours, contrib_reduction_overtime_rest_day, csg_unit, rebought_non_taxable_days, net_tax, rebought_non_taxable_days_net, ss_sickness_maternity, ss_complementary, work_incidents, ss_capped, ss_uncapped, complementary_slice_1, family, unemployed_insurance, other_employer_contribution, states_exoneration, total_exoneration, generated_pdf, sheet_status, id_employee
FROM sheet
ORDER BY start_date DESC
LIMIT 1`;

export interface GetMostRecentSheetRow {
    idSheet: string;
    startDate: Date;
    endDate: Date;
    version: number;
    workingHours: string;
    overtimeHours: string;
    contribReductionOvertimeRestDay: string;
    csgUnit: string;
    reboughtNonTaxableDays: string;
    netTax: string;
    reboughtNonTaxableDaysNet: string;
    ssSicknessMaternity: string;
    ssComplementary: string;
    workIncidents: string;
    ssCapped: string;
    ssUncapped: string;
    complementarySlice_1: string;
    family: string;
    unemployedInsurance: string;
    otherEmployerContribution: string;
    statesExoneration: string;
    totalExoneration: string;
    generatedPdf: Buffer | null;
    sheetStatus: string;
    idEmployee: string | null;
}

export async function getMostRecentSheet(client: Client): Promise<GetMostRecentSheetRow | null> {
    const result = await client.query({
        text: getMostRecentSheetQuery,
        values: [],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        idSheet: row[0],
        startDate: row[1],
        endDate: row[2],
        version: row[3],
        workingHours: row[4],
        overtimeHours: row[5],
        contribReductionOvertimeRestDay: row[6],
        csgUnit: row[7],
        reboughtNonTaxableDays: row[8],
        netTax: row[9],
        reboughtNonTaxableDaysNet: row[10],
        ssSicknessMaternity: row[11],
        ssComplementary: row[12],
        workIncidents: row[13],
        ssCapped: row[14],
        ssUncapped: row[15],
        complementarySlice_1: row[16],
        family: row[17],
        unemployedInsurance: row[18],
        otherEmployerContribution: row[19],
        statesExoneration: row[20],
        totalExoneration: row[21],
        generatedPdf: row[22],
        sheetStatus: row[23],
        idEmployee: row[24]
    };
}

export const getAllSheetsOrderedByDateQuery = `-- name: GetAllSheetsOrderedByDate :many
SELECT id_sheet, start_date, end_date, version, working_hours, overtime_hours, contrib_reduction_overtime_rest_day, csg_unit, rebought_non_taxable_days, net_tax, rebought_non_taxable_days_net, ss_sickness_maternity, ss_complementary, work_incidents, ss_capped, ss_uncapped, complementary_slice_1, family, unemployed_insurance, other_employer_contribution, states_exoneration, total_exoneration, generated_pdf, sheet_status, id_employee
FROM Sheet
ORDER BY start_date DESC`;

export interface GetAllSheetsOrderedByDateRow {
    idSheet: string;
    startDate: Date;
    endDate: Date;
    version: number;
    workingHours: string;
    overtimeHours: string;
    contribReductionOvertimeRestDay: string;
    csgUnit: string;
    reboughtNonTaxableDays: string;
    netTax: string;
    reboughtNonTaxableDaysNet: string;
    ssSicknessMaternity: string;
    ssComplementary: string;
    workIncidents: string;
    ssCapped: string;
    ssUncapped: string;
    complementarySlice_1: string;
    family: string;
    unemployedInsurance: string;
    otherEmployerContribution: string;
    statesExoneration: string;
    totalExoneration: string;
    generatedPdf: Buffer | null;
    sheetStatus: string;
    idEmployee: string | null;
}

export async function getAllSheetsOrderedByDate(client: Client): Promise<GetAllSheetsOrderedByDateRow[]> {
    const result = await client.query({
        text: getAllSheetsOrderedByDateQuery,
        values: [],
        rowMode: "array"
    });
    return result.rows.map(row => {
        return {
            idSheet: row[0],
            startDate: row[1],
            endDate: row[2],
            version: row[3],
            workingHours: row[4],
            overtimeHours: row[5],
            contribReductionOvertimeRestDay: row[6],
            csgUnit: row[7],
            reboughtNonTaxableDays: row[8],
            netTax: row[9],
            reboughtNonTaxableDaysNet: row[10],
            ssSicknessMaternity: row[11],
            ssComplementary: row[12],
            workIncidents: row[13],
            ssCapped: row[14],
            ssUncapped: row[15],
            complementarySlice_1: row[16],
            family: row[17],
            unemployedInsurance: row[18],
            otherEmployerContribution: row[19],
            statesExoneration: row[20],
            totalExoneration: row[21],
            generatedPdf: row[22],
            sheetStatus: row[23],
            idEmployee: row[24]
        };
    });
}

