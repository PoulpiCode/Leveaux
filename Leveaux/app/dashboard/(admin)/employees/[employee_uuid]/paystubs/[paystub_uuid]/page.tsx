"use client";
import Paystub from "@/components/paystub";
import dynamic from "next/dynamic";
import React from "react";

const PDFViewer = dynamic(
	() => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
	{
		ssr: false,
	},
);
const PaystubDetails: React.FC<{
	params: Promise<{ employee_uuid: string; paystub_uuid: string }>;
}> = async ({ params }) => {
	const { employee_uuid, paystub_uuid } = await params;
	return (
		<PDFViewer width="100%" height="100%">
			<Paystub />
		</PDFViewer>
	);
};

export default PaystubDetails;
