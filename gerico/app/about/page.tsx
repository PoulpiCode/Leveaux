import React from "react";
import { Card } from "@/components/ui/card";
const About: React.FC = () => {
	return (
		<Card className="container bg-card py-3 px-4 border-0 flex flex-col gap-6 rounded-2xl mt-5">
			<section>
				<h1>À Propos de Gerico</h1>
				<p className="text-xl">
					Depuis 1999, Gerico est un acteur clé du transport routier en France
					et en Europe. Nous offrons des solutions personnalisées pour les
					entreprises et les événements, avec un engagement envers la fiabilité,
					l’expertise, et un service client exemplaire.
				</p>
			</section>

			<section>
				<h3 className="text-2xl font-semibold">Notre Mission</h3>
				<p>
					Proposer des services de transport sûrs, fiables et respectueux de
					l’environnement, tout en répondant aux besoins spécifiques de chaque
					client avec les plus hauts standards de sécurité et d’efficacité.
				</p>
			</section>

			<section>
				<h3 className="text-2xl font-semibold">Nos Valeurs</h3>
				<ul className="list-disc list-inside">
					<li>
						<strong>Excellence</strong> : Aller au-delà des attentes avec des
						services de qualité.
					</li>
					<li>
						<strong>Innovation</strong> : Intégrer technologies modernes et
						pratiques durables.
					</li>
					<li>
						<strong>Responsabilité environnementale</strong> : Réduire notre
						empreinte carbone via des véhicules moins polluants et une
						planification optimisée.
					</li>
					<li>
						<strong>Sécurité</strong> : Priorité absolue grâce à la formation
						des chauffeurs et une maintenance rigoureuse.
					</li>
				</ul>
			</section>

			<section>
				<h3 className="text-2xl font-semibold">Pourquoi Choisir Gerico ?</h3>
				<ul className="list-disc list-inside">
					<li>
						20+ ans d'expertise dans la gestion de projets complexes et la
						logistique.
					</li>
					<li>Solutions sur mesure adaptées à chaque client.</li>
					<li>Réseau fiable garantissant efficacité et ponctualité.</li>
					<li>
						Accompagnement complet, de la demande initiale à la livraison
						finale.
					</li>
				</ul>
			</section>

			<section>
				<h3 className="text-2xl font-semibold">Nos Engagements</h3>
				<p>
					Gerico s'engage pour un avenir durable avec des pratiques
					écoresponsables : électrification de notre flotte, carburants
					alternatifs, et innovations technologiques. Avec Gerico, optez pour un
					partenaire engagé et tourné vers l'avenir du transport.
				</p>
			</section>
		</Card>
	);
};

export default About;
