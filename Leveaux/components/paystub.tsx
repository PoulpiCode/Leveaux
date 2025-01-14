// https://www.cegedim-business-services.com/ressources-humaines/exemple-fiche-de-paie/?location=employerIdentity
import React from "react";
import {
	Page,
	Text,
	View,
	Document,
	StyleSheet,
	Font,
} from "@react-pdf/renderer";

import { Style } from "@react-pdf/types/style";

const styles = StyleSheet.create({
	document: {
		fontFamily: "Open Sans",
		fontSize: 10,
	},
	section: {
		border: "2px solid black",
		padding: 2,
	},
	page: {
		padding: 10,
		display: "flex",
		gap: 5,
	},
	tableRow: {
		display: "flex",
		flexDirection: "row",
	},
	paystubColumnHeader: {
		flex: 1,
		border: "1px solid black",
		textAlign: "center",
	},
	paystubColumn: {
		border: "1px solid black",
		borderTop: "0px transparent",
		borderBottom: "0px transparent",
		flex: 1,
		textAlign: "center",
	},
});

Font.register({
	family: "Open Sans",
	fonts: [
		{
			src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
		},
		{
			src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
			fontWeight: 600,
		},
	],
});

const data = {
	employeeInfo: {
		firstname: "Cédric",
		lastname: "MAS",
		ss: 144067511301625,
		registrationNumber: 20,
		hiredDate: "11-01-2018",
		status: "Employé",
		job: "Développeur",
		section: "1030-MIS",
		address: {
			street: "2 Rue des Coquelicots",
			cp: "80000",
			city: "Amiens",
		},
		hourlyPayRate: 13.1065,
		overtimePayRate: 1.25,
	},
	sheetStartDate: "01-11-2024",
	sheetEndDate: "31-11-2024",
	monthlyHours: 151.67,
	overtimeHours: 10,
	contribReductionOvertimeRestDays: 16.64,
	csgUnit: 161.95,
	reboughtNonTaxableDays: 164.63,
	netTax: 1637.24,
	reboughtNonTaxableDaysNet: 153.82,
	salaryAdjustmentWithoutContributions: 34.06,
	// Employer's input
	employer: {
		ssSicknessMaternity: 151.54,
		ssComplementary: 43.3,
		workIncidents: 32.47,
		ssCapped: 185.09,
		ssUncapped: 41.13,
		complementarySlice1: 130.11,
		family: 74.69,
		unemployedInsurance: 68.19,
		otherEmployersContribution: 346.8,
		statesExoneration: 409.17,
		totalExoneration: 578.03,
	},
	computed: {
		grossSalary: 0,
		baseSalary: 0,
		netSalary: 0,
		supHours: 0,
		csgUnit: 0,
		totalEmployeeContribution: 0,
		totalEmployerContribution: 0,
	},
};

const EmployerIdentity: React.FC = () => {
	return (
		<View id="employer_identity" style={[{ width: "45vw" }]}>
			<Text id="company_name" style={{ fontWeight: "bold", fontSize: 12 }}>
				GERICO
			</Text>
			<View
				id="company_address"
				style={{ display: "flex", gap: 10, marginVertical: 10 }}
			>
				<Text id="company_street">10 AVENUE DES FACULTÉS</Text>
				<View
					id="company_cp_city"
					style={{ display: "flex", flexDirection: "row", gap: 10 }}
				>
					<Text id="company_cp">80025</Text>
					<Text id="company_city">Amiens</Text>
				</View>
			</View>
			<View id="company_identity">
				<View
					id="company_identifiers"
					style={{ display: "flex", flexDirection: "row", gap: 10 }}
				>
					<Text id="company_siret">Siret: 40325694400014</Text>
					<Text id="company_ape">APE: 5813Z</Text>
				</View>
				<Text id="company_cc">Convention Collective: </Text>
			</View>
		</View>
	);
};

const PaystubPeriod: React.FC = () => {
	return (
		<View
			style={[
				styles.section,
				{
					display: "flex",
					width: "25vw",
					height: 30,
					justifyContent: "center",
					alignItems: "center",
				},
			]}
		>
			<Text style={{ fontWeight: "heavy" }}>BULLETIN DE PAIE</Text>
			<Text>
				Du {data.sheetStartDate} au {data.sheetEndDate}
			</Text>
		</View>
	);
};

const EmployeeInfo: React.FC = () => {
	const TableRowEmployeeInfo: React.FC<{ _key: string; value: string }> = ({
		_key,
		value,
	}) => {
		return (
			<View style={styles.tableRow}>
				<Text style={{ flex: 1 }}>{_key}</Text>
				<Text>:</Text>
				<Text style={{ flex: 2 }}>{value}</Text>
			</View>
		);
	};
	return (
		<View style={[styles.section, { width: "50vw" }]}>
			<View
				style={[
					styles.section,
					{ backgroundColor: "transparent", borderStyle: "dotted" },
				]}
			>
				<TableRowEmployeeInfo
					_key="N°S.S."
					value={data.employeeInfo.ss.toString()}
				/>
				<TableRowEmployeeInfo
					_key="Matricule"
					value={data.employeeInfo.registrationNumber.toString()}
				/>
				<TableRowEmployeeInfo
					_key="Date d'entrée"
					value={data.employeeInfo.hiredDate}
				/>
			</View>
			<View
				style={[
					styles.section,
					{ backgroundColor: "transparent", borderStyle: "dotted" },
				]}
			>
				<View style={{ marginBottom: 20 }}>
					<TableRowEmployeeInfo
						_key="Statut"
						value={data.employeeInfo.status}
					/>
				</View>
				<TableRowEmployeeInfo _key="Emploi" value={data.employeeInfo.job} />
				<TableRowEmployeeInfo
					_key="Section"
					value={data.employeeInfo.section}
				/>
				<TableRowEmployeeInfo
					_key="Hor. mensuel"
					value={`${data.monthlyHours} heures`}
				/>
			</View>
		</View>
	);
};

const EmployeeAddress: React.FC = () => {
	return (
		<View style={[{ width: "45vw", marginVertical: 20 }]}>
			<Text style={{ fontWeight: "bold" }}>MAS Cédric</Text>
			<View style={{ display: "flex", gap: 10, marginVertical: 10 }}>
				<Text>2 RUE DES COQUELICOTS</Text>
				<View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
					<Text>80000</Text>
					<Text>Amiens</Text>
				</View>
			</View>
		</View>
	);
};

const PaystubContent: React.FC = () => {
	const PaystubRow: React.FC<{
		label: string | { text: string; style: Style };
		unit?: string;
		rate?: string;
		toRemain?: string;
		toPay?: string | { text: string; style: Style };
		ammount?: string;
	}> = ({ label, unit, rate, toRemain, toPay, ammount }) => {
		return (
			<View style={[{ display: "flex", flexDirection: "row" }]}>
				<Text
					style={[
						styles.paystubColumn,
						{ flex: 3, textAlign: "left", paddingLeft: "1px" },
						typeof label === "object" ? label.style : {},
					]}
				>
					{typeof label === "string" ? label : label.text}
				</Text>
				<Text style={styles.paystubColumn}>{unit}</Text>
				<Text style={styles.paystubColumn}>{rate}</Text>
				<Text style={styles.paystubColumn}>{toRemain}</Text>
				<Text
					style={[
						styles.paystubColumn,
						typeof toPay === "object" ? toPay.style : {},
					]}
				>
					{typeof toPay === "object" ? toPay.text : (toPay ?? "")}
				</Text>
				<Text style={styles.paystubColumn}>{ammount}</Text>
			</View>
		);
	};

	const SpacerRow: React.FC = () => {
		return <PaystubRow label=" " />;
	};

	return (
		<View style={{ display: "flex", fontSize: 8 }}>
			<View style={{ display: "flex", flexDirection: "row" }}>
				<Text style={{ flex: 4 }}>
					Pour d'avantage d'informations, voir la rubrique dédiée au bulletin de
					paie sur www.service-public.fr
				</Text>
				<Text
					style={[styles.paystubColumnHeader, { flex: 3, fontWeight: "bold" }]}
				>
					SALARIE
				</Text>
				<Text style={[styles.paystubColumnHeader, { fontWeight: "bold" }]}>
					EMPLOYEUR
				</Text>
			</View>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
				}}
			>
				<Text style={[styles.paystubColumnHeader, { flex: 3 }]}>Libellé</Text>
				<Text style={styles.paystubColumnHeader}>Unité / Base</Text>
				<Text style={styles.paystubColumnHeader}>Taux</Text>
				<Text style={styles.paystubColumnHeader}>À retenir</Text>
				<Text style={styles.paystubColumnHeader}>À payer</Text>
				<Text style={styles.paystubColumnHeader}>Montant</Text>
			</View>
			<PaystubRow
				label="Salaire de base"
				unit={data.monthlyHours.toString()}
				rate={data.employeeInfo.hourlyPayRate.toString()}
				toPay={(data.computed.baseSalary =
					data.monthlyHours * data.employeeInfo.hourlyPayRate).toFixed(2)}
			/>
			<PaystubRow
				label="Heures supplémentaires à 125%"
				unit={data.overtimeHours.toString()}
				rate={(
					data.employeeInfo.hourlyPayRate * data.employeeInfo.overtimePayRate
				).toFixed(4)}
				toPay={(data.computed.supHours =
					data.overtimeHours *
					data.employeeInfo.hourlyPayRate *
					data.employeeInfo.overtimePayRate).toFixed(2)}
			/>
			<SpacerRow />
			<PaystubRow
				label={{ text: "**** BRUT FISCAL ****", style: { fontWeight: "bold" } }}
				toPay={(data.computed.grossSalary =
					data.computed.baseSalary + data.computed.supHours).toFixed(2)}
			/>
			<SpacerRow />
			<PaystubRow label={{ text: "SANTE", style: { fontWeight: "bold" } }} />
			<PaystubRow
				label="Sécurité Sociale - Maladie Maternité Invalidité Décès"
				unit={data.computed.grossSalary.toFixed(2)}
				ammount={(() => {
					const ss = data.employer.ssSicknessMaternity;
					data.computed.totalEmployerContribution += ss;
					return ss.toFixed(2);
				})()}
			/>
			<PaystubRow
				label="Complémentaire Incapacité Invalidité Décès"
				unit={data.computed.grossSalary.toFixed(2)}
				ammount={(() => {
					const ss = data.employer.ssComplementary;
					data.computed.totalEmployerContribution += ss;
					return ss.toFixed(2);
				})()}
			/>
			<PaystubRow
				label={{
					text: "ACCIDENTS DU TRAVAIL - MALADIES PROFESSIONNELLES",
					style: { fontWeight: "bold" },
				}}
				unit={data.computed.grossSalary.toFixed(2)}
				ammount={(() => {
					const wi = data.employer.workIncidents;
					data.computed.totalEmployerContribution += wi;
					return wi.toFixed(2);
				})()}
			/>
			<PaystubRow label={{ text: "RETRAITE", style: { fontWeight: "bold" } }} />
			<PaystubRow
				label="Sécurité Sociale plafonnée"
				unit={data.computed.grossSalary.toFixed(2)}
				rate="6.90%"
				toRemain={(() => {
					const ssEmployeeCapped = data.computed.grossSalary * 0.069;
					data.computed.totalEmployeeContribution += ssEmployeeCapped;
					return ssEmployeeCapped.toFixed(2);
				})()}
				ammount={(() => {
					const ss = data.employer.ssCapped;
					data.computed.totalEmployerContribution += ss;
					return ss.toFixed(2);
				})()}
			/>
			<PaystubRow
				label="Sécurité Sociale déplafonnée"
				unit={data.computed.grossSalary.toFixed(2)}
				rate="0,40%"
				toRemain={(() => {
					const ssEmployeeUncapped = data.computed.grossSalary * 0.004;
					data.computed.totalEmployeeContribution += ssEmployeeUncapped;
					return ssEmployeeUncapped.toFixed(2);
				})()}
				ammount={(() => {
					const ss = data.employer.ssUncapped;
					data.computed.totalEmployerContribution += ss;
					return ss.toFixed(2);
				})()}
			/>
			<PaystubRow
				label="Complémentaire Tranche 1"
				unit={data.computed.grossSalary.toFixed(2)}
				rate="4,01%"
				toRemain={(() => {
					const complementarySlice1 = data.computed.grossSalary * 0.0401;
					data.computed.totalEmployeeContribution += complementarySlice1;
					return complementarySlice1.toFixed(2);
				})()}
				ammount={(() => {
					const cs = data.employer.complementarySlice1;
					data.computed.totalEmployerContribution += cs;
					return cs.toFixed(2);
				})()}
			/>
			<PaystubRow
				label={{ text: "FAMILLE", style: { fontWeight: "bold" } }}
				unit={data.computed.grossSalary.toFixed(2)}
				ammount={(() => {
					const fam = data.employer.family;
					data.computed.totalEmployerContribution += fam;
					return fam.toFixed(2);
				})()}
			/>
			<PaystubRow
				label={{ text: "ASSURANCE CHOMAGE", style: { fontWeight: "bold" } }}
				unit={data.computed.grossSalary.toFixed(2)}
				ammount={(() => {
					const ui = data.employer.unemployedInsurance;
					data.computed.totalEmployerContribution += ui;
					return ui.toFixed(2);
				})()}
			/>
			<PaystubRow
				label={{
					text: "Réduction Cotis. sur heures compl/suppl et rachat jours de repos",
					style: { fontWeight: "bold" },
				}}
				toRemain={(() => {
					const contribReductionOvertimeRestDays =
						-data.contribReductionOvertimeRestDays;
					data.computed.totalEmployeeContribution +=
						contribReductionOvertimeRestDays;
					return contribReductionOvertimeRestDays.toFixed(2);
				})()}
			/>

			<PaystubRow
				label={{
					text: "AUTRES CONTRIBUTIONS DUES PAR L'EMPLOYEUR",
					style: { fontWeight: "bold" },
				}}
				ammount={(() => {
					const c = data.employer.otherEmployersContribution;
					data.computed.totalEmployerContribution += c;
					return c.toFixed(2);
				})()}
			/>
			<PaystubRow
				label="CSG déductible de l'impôt sur le revenu"
				unit={`${(data.computed.csgUnit = data.computed.grossSalary * 0.9825).toFixed(2)}`}
				rate="6,80%"
				toRemain={(() => {
					const csgDed = data.computed.csgUnit * 0.068;
					data.computed.totalEmployeeContribution += csgDed;
					return csgDed.toFixed(2);
				})()}
			/>
			<PaystubRow
				label={{
					text: "CSG/CSRS non déductible de l'impôt sur le revenu",
					style: { fontWeight: "bold" },
				}}
			/>
			<PaystubRow
				label="CSG/CSRS imposable à l'impôt sur le revenu"
				unit={`${data.computed.csgUnit.toFixed(2)}`}
				rate="2,90%"
				toRemain={(() => {
					const csgTaxable = data.computed.csgUnit * 0.029;
					data.computed.totalEmployeeContribution += csgTaxable;
					return csgTaxable.toFixed(2);
				})()}
			/>
			<PaystubRow
				label="CSG/CSRS imposable à l'impôt sur le revenu hres suppl et rachats jours repos"
				unit={data.csgUnit.toFixed(2)}
				rate="9,70%"
				toRemain={(() => {
					const csgTaxableOnRestDays = data.csgUnit * 0.097;
					data.computed.totalEmployeeContribution += csgTaxableOnRestDays;
					return csgTaxableOnRestDays.toFixed(2);
				})()}
			/>
			<PaystubRow
				label={{
					text: "EXONERATIONS DE COTISATIONS EMPLOYEUR",
					style: { fontWeight: "bold" },
				}}
				ammount={(() => {
					const exo = -data.employer.statesExoneration;
					data.computed.totalEmployerContribution += exo;
					return exo.toFixed(2);
				})()}
			/>
			<PaystubRow
				label={{
					text: "TOTAL DES COTISATIONS ET CONTRIBUTIONS",
					style: { fontWeight: "bold" },
				}}
				// WARNING: The result is somehow multiplied by 2
				toRemain={(data.computed.totalEmployeeContribution / 2).toFixed(2)}
				ammount={(data.computed.totalEmployerContribution / 2).toFixed(2)}
			/>
			<PaystubRow
				label="HC/HS/Rachat jours non imposable"
				toRemain={data.reboughtNonTaxableDays.toFixed(2)}
			/>
			<PaystubRow label="Net fiscal" toPay={data.netTax.toFixed(2)} />
			<PaystubRow
				label="HC/HS/Rachat jours non imposable net"
				toPay={data.reboughtNonTaxableDaysNet.toFixed(2)}
			/>
			<PaystubRow
				label={{
					text: "NET A PAYER AVANT IMPOT SUR LE REVENU",
					style: { fontWeight: "bold", fontSize: 14 },
				}}
				toPay={{
					text: `${(data.computed.netSalary = data.computed.grossSalary - data.computed.totalEmployeeContribution / 2).toFixed(2)}`,
					style: { fontWeight: "bold", fontSize: 14 },
				}}
			/>
			<PaystubRow
				label={{
					text: "Dont évolution de la rémunération liée à la suppression des cotisations chômage et maladie",
					style: { fontWeight: "bold" },
				}}
				unit={data.salaryAdjustmentWithoutContributions.toFixed(2)}
			/>
			<PaystubRow
				label="Impôt sur le revenu prélevé à la source [taux non personnalisé]"
				unit={data.netTax.toFixed(2)}
				rate="1.30%"
				toRemain={(data.netTax * 0.013).toFixed(2)}
			/>
			<SpacerRow />
			<PaystubRow
				label={{ text: "NET PAYE EN EUROS", style: { fontWeight: "bold" } }}
				toPay={(data.computed.netSalary - data.netTax * 0.013).toFixed(2)}
			/>
			<SpacerRow />
			<SpacerRow />
			<PaystubRow
				label={{
					text: "ALLEGEMENT DE COTISATIONS EMPLOYEUR",
					style: { fontWeight: "bold" },
				}}
				unit={data.employer.totalExoneration.toFixed(2)}
			/>
			<PaystubRow
				label={{
					text: "TOTAL VERSE PAR L'EMPLOYEUR",
					style: { fontWeight: "bold" },
				}}
				unit={(
					data.computed.grossSalary +
					data.computed.totalEmployerContribution / 2
				).toFixed(2)}
			/>
			<SpacerRow />
			<PaystubRow
				label="Cumul impôt sur le revenu prélevé à la source"
				unit={(data.netTax * 0.013).toFixed(2)}
			/>
			<View style={{ borderBottom: "1px solid black" }}>
				<PaystubRow
					label="Cumul annuel montant net HC/HS/RJ défiscalisés"
					unit={data.reboughtNonTaxableDaysNet.toFixed(2)}
				/>
			</View>
		</View>
	);
};

const Paystub: React.FC = () => {
	return (
		<Document style={styles.document}>
			<Page wrap size="A4" style={styles.page}>
				<View style={{ display: "flex", gap: 10 }}>
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<EmployerIdentity />
						<PaystubPeriod />
					</View>
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<EmployeeInfo />
						<EmployeeAddress />
					</View>
				</View>
				<View style={{ transform: "scale(0.7)", transformOriginY: 0 }}>
					<PaystubContent />
				</View>
			</Page>
		</Document>
	);
};

export default Paystub;
