"use server";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { client, employee } from "@gerico/database";
import { Label } from "@radix-ui/react-label";
import { Bold, Link } from "lucide-react";

export default async function EmployeeDetails({
	params,
}: {
	params: Promise<{ employee_uuid: string }>;
}) {
	const { employee_uuid } = await params;
	const employeeInfo = await employee.getEmployee(client, {
		idEmployee: employee_uuid,
	});
	// const adresse = employeeInfo.address?.split(";");
	return (
		<>
			{!employeeInfo ? (
				<p>Employé non trouvé</p>
			) : (
				<Card className="p-4">
					<CardHeader>
						<CardTitle>
							<h2>
								{employeeInfo.firstname} {employeeInfo.lastname}
							</h2>
						</CardTitle>
						<CardDescription>Informations de l'employé</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-2">
							<h3 className="text-lg font-bold">
								Informations professionnelles
							</h3>
							<p>
								Métier : {employeeInfo.jobName}
								<br />
								Salaire horaire : {employeeInfo.hourSalary} €
								<br />
								Date d'embauche : {employeeInfo.hiringDate.toLocaleDateString()}
								<br />
								Adresse e-mail : {employeeInfo.emailAddress}
							</p>
						</div>
						<br />
						<div className="space-y-2">
							<h3 className="text-lg font-bold">Informations personnelles</h3>
							<p>
								Adresse : {employeeInfo.address?.split(";")[0]}
								<br />
								Code postal : {employeeInfo.address
									?.split(";")[1]
									.slice(0, 2)}{" "}
								{employeeInfo.address?.split(";")[1].slice(2, 5)}
								<br />
								Ville : {employeeInfo.address?.split(";")[2]}
								<br />
								Numéro de téléphone : {employeeInfo.phoneNumber}
							</p>
						</div>
					</CardContent>
					<CardFooter>
						<Button variant="outline">Voir les congés / vacances</Button>
					</CardFooter>
				</Card>
			)}
		</>
	);
}
