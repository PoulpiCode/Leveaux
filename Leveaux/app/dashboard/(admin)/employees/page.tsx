"use server";

import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { client, employee } from "@gerico/database";
import Link from "next/link";

export default async function Employees() {
	const employees = await employee.getAllEmployeesInfo(client);
	return (
		<>
			<Button>
				<Link href="/dashboard/employees/new">Ajouter un employé</Link>
			</Button>
			<div className="flex items-center">
				<Table className="container w-screen shadow rounded-2xl">
					<TableCaption>Liste des employés</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead>Prénom</TableHead>
							<TableHead>Nom de famille</TableHead>
							<TableHead>Numéro de téléphone</TableHead>
							<TableHead>Poste</TableHead>
							<TableHead>Rôle</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{employees.map((e) => (
							<TableRow key={e.idEmployee}>
								<TableCell>{e.firstname}</TableCell>
								<TableCell>{e.lastname}</TableCell>
								<TableCell>{e.phoneNumber ?? "Numéro non indiqué"}</TableCell>
								<TableCell>{e.jobName}</TableCell>
								<TableCell>{e.role}</TableCell>
								<Link href={`/dashboard/employees/${e.idEmployee}`}>
									Détails
								</Link>
							</TableRow>
						))}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TableCell colSpan={5}>Total:</TableCell>
							<TableCell>{employees.length}</TableCell>
						</TableRow>
					</TableFooter>
				</Table>
			</div>
		</>
	);
}
