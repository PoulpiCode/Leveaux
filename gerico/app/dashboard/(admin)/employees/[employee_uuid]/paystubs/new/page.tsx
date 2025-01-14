"use client";
import Paystub from "@/components/paystub";
import PaystubForm from "@/components/paystub-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tabs } from "@radix-ui/react-tabs";
import dynamic from "next/dynamic";
import React from "react";

const PDFViewer = dynamic(
	() => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
	{
		ssr: false,
	},
);

export default async function NewPaystub({
	params,
}: {
	params: Promise<{ employee_uuid: string }>;
}) {
	const employee_uuid = (await params).employee_uuid;
	// TODO: Handle errors
	// const employeeInfo: employee.GetEmployeeRow = await (
	// 	await fetch(`/api/employees/${employee_uuid}/`)
	// ).json();

	const employeeInfo = {
		firstname: "Cédric",
		lastname: "Mas",
		address: "2 rue des pigeons, 80000, Amiens",
		socialSecurity: 12898493849394,
		registrationNumber: 20,
		hiringDate: new Date("10-11-2018"),
		jobName: "Développeur",
		section: "IMHFKJE",
	};
	return (
		<section className="mt-4">
			<Tabs defaultValue="form" className="w-full">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="form">Formulaire</TabsTrigger>
					<TabsTrigger value="preview">Prévisualisation</TabsTrigger>
				</TabsList>
				<TabsContent value="form">
					<Card>
						<CardHeader>
							<CardTitle>Informations sur l'employé</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="divide-y divide-solid">
								<section>
									<p>
										{employeeInfo.lastname} {employeeInfo.firstname}
									</p>
									<p>{employeeInfo.address}</p>
								</section>
								<section>
									<p>
										Numéro de sécurité sociale: {employeeInfo.socialSecurity}
									</p>
									<p>Matricule: {employeeInfo.registrationNumber}</p>
									<p>
										Date d'entrée:{" "}
										{employeeInfo.hiringDate as unknown as string}
									</p>
									<p>Statut: Employé</p>
									<p>Emploi: {employeeInfo.jobName}</p>
									<p>Section: {employeeInfo.section}</p>
								</section>
							</div>
						</CardContent>
					</Card>

					<PaystubForm onChange={(values) => console.log(values)} />
				</TabsContent>
				<TabsContent value="preview">
					<PDFViewer width="150%" height="150%">
						<Paystub />
					</PDFViewer>
				</TabsContent>
			</Tabs>
		</section>
	);
}
