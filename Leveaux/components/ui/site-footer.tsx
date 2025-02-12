import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
	return (
		<footer className="w-full bg-white py-6">
			<div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
				{/* Branding */}
				<div className="flex items-center gap-4">
					<img src="/file.jpg" className="w-10" alt="logo" />
					<div>
						<h2 className="text-lg font-bold text-cyan-800">Broderie Leveaux</h2>
						<p className="text-sm text-gray-600">
							Votre partenaire de confiance pour des broderies uniques.
						</p>
						<a
							href="/about"
							className="text-cyan-800 text-sm font-medium hover:underline"
						>
							En savoir plus
						</a>
					</div>
				</div>

				{/* Contact */}
				<div className="mt-4 lg:mt-0 text-center lg:text-left space-y-2">
					<h3 className="text-md font-semibold text-cyan-800">Contact</h3>
					<p className="text-sm text-gray-600">Adresse : 100 bis rue Faidherbe, Walincourt</p>
					<p className="text-sm text-gray-600">Téléphone : +33 (0)327 700 900</p>
					<p className="text-sm text-gray-600">Email : contact@broderies-leveaux.fr</p>
				</div>

				{/* Social Media */}
				<div className="mt-4 lg:mt-0 text-center lg:text-right">
					<h3 className="text-md font-semibold text-cyan-800 ">Suivez-nous</h3>
					<div className="flex justify-center lg:justify-end gap-4 mt-2">
						<a href="https://www.instagram.com/broderiesleveaux/" target="_blank" rel="noopener noreferrer">
							<Instagram className="w-5 h-5 text-gray-700 hover:text-cyan-800" />
						</a>
						<a href="https://www.linkedin.com/company/broderies-leveaux/" target="_blank" rel="noopener noreferrer">
							<Linkedin className="w-5 h-5 text-gray-700 hover:text-cyan-800" />
						</a>
					</div>
				</div>
			</div>

			{/* Bottom Line */}
			<div className="border-t mt-6 pt-4 text-center text-sm text-gray-500">
				<p>&copy; {new Date().getFullYear()} Broderie Leveaux. Tous droits réservés.</p>
				<a
					href="/politics"
					className="text-cyan-800 hover:underline"
				>
					Politique de confidentialité
				</a>
			</div>
		</footer>
	);
};

export default Footer;
