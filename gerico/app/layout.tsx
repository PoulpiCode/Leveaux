import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/ui/nav-bar";
import LayoutProvider from "@/components/layout-provider";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Gerico",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} w-full items-center flex flex-col`}
			>
				<LayoutProvider>{children}</LayoutProvider>
			</body>
		</html>
	);
}
