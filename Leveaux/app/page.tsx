"use client";
import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./home/HomePage";
import Paystub from "@/components/paystub";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(
	() => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
	{
		ssr: false,
	},
);

export default function Home() {
	return (
		<div>
			<HomePage />
			{/* <PDFViewer width="100%" height="100%">
				<Paystub />
			</PDFViewer> */}
		</div>
	);
}
