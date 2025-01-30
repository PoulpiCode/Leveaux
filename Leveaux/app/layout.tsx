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
	title: "Broderie Leveaux",
	description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="fr">
			<body className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen`}>
				<LayoutProvider>
					
					<main className="flex-1 w-full max-w-full mx-auto px-0">{children}</main>  {/* ✅ flex-1 pour pousser le footer en bas */}
				</LayoutProvider>
			</body>
		</html>
	);
}
