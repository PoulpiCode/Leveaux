import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Card } from "@/components/ui/card";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
	return (
		<footer className="mt-8 border-t border-gray-300 py-8 dark:border-gray-700 m-4">
			<div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-4 ">
				{/* Section 1: À propos */}
				<div>
					<h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
						À propos
					</h3>
					<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
						Nous sommes une entreprise dédiée à offrir les meilleures solutions
						technologiques pour vos besoins.
					</p>
					<a
						href="/about"
						className="mt-2 inline-block text-sm font-medium underline underline-offset-4 text-blue-500"
					>
						En savoir plus
					</a>
				</div>

				{/* Section 2: Contact */}
				<div>
					<h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
						Contact
					</h3>
					<ul className="mt-2 space-y-2">
						<li className="text-sm text-gray-600 dark:text-gray-400">
							Email: gerico@u-picardie.fr
						</li>
						<li className="text-sm text-gray-600 dark:text-gray-400">
							Téléphone: 07 57 50 71 34
						</li>
						<li className="text-sm text-gray-600 dark:text-gray-400">
							Adresse: Avenue des Facultés 80480 Salouël
						</li>
					</ul>
				</div>

				{/* Section 3: Liens rapides */}
				<div>
					<h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
						Liens rapides
					</h3>
					<ul className="mt-2 space-y-2">
						<li>
							<a
								href="/"
								className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
							>
								Accueil
							</a>
						</li>
						<li>
							<a
								href="/contact"
								className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
							>
								Contact
							</a>
						</li>
						<li>
							<a
								href="/quote"
								className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
							>
								Devis
							</a>
						</li>
					</ul>
				</div>

				{/* Section 4: Réseaux sociaux */}
				<div>
					<h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
						Suivez-nous
					</h3>
					<div className="mt-2 flex space-x-4">
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noreferrer"
							aria-label="Facebook"
						>
							<img
								src="/facebook-logo.png"
								alt="Facebook"
								width="24"
								height="24"
							/>
						</a>
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noreferrer"
							aria-label="Twitter"
						>
							<img src="/x-logo.png" alt="Twitter" width="24" height="24" />
						</a>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noreferrer"
							aria-label="LinkedIn"
						>
							<img
								src="/linkedin-logo.png"
								alt="LinkedIn"
								width="24"
								height="24"
							/>
						</a>
					</div>
				</div>
			</div>

			{/* Footer bottom */}
			<div className="mt-8 border-t border-gray-300 pt-4 dark:border-gray-700">
				<p className="text-center text-sm text-gray-600 dark:text-gray-400">
					&copy; {new Date().getFullYear()} Gerico. Tous droits réservés.
				</p>
				<div className="text-center">
					<a
						href="/politics"
						className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
					>
						Politique de confidentialité
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
