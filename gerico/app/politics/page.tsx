import React from "react";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const Politics: React.FC = () => {
	return (
		<Card className="container bg-card py-3 px-4 border-0 flex items-center justify-between gap-6 rounded-2xl mt-5">
			<div className="mt-4 flex flex-col gap-7">
				<section>
					<h1 className="text-6xl ml-8">Politique de confidentialité</h1>
				</section>
				<h2 className="ml-4">Qui somme nous ?</h2>
				<p className="ml-5">
					conçu pour la gestion des bulletins de salaire et des demandes de
					congés pour les employés, l'adresse de notre page :{" "}
					<a
						href="/about"
						className="text-gray-600 dark:text-gray-400 hover:underline"
					>
						A Propos
					</a>
				</p>
				<h2 className="ml-4">Nature des données collectées</h2>
				<p className="ml-5">
					Dans le cadre de l'utilisation des Sites, l'Éditeur est susceptible de
					collecter les catégories de données suivantes concernant ses
					Utilisateurs : <br />
					Données d'état-civil, d'identité, d'identification… <br />
					Données relatives à la vie professionnelle (CV, scolarité, formation
					professionnelle, distinctions…) <br />
					Données de connexion (adresses IP, journaux d'événements…)
				</p>
				<h2 className="ml-4">
					Communication des données personnelles à des tiers
				</h2>
				<p className="ml-4">
					<strong>Pas de communication à des tiers</strong> <br /> Vos données
					ne font l'objet d'aucune communication à des tiers. Vous êtes
					toutefois informés qu'elles pourront être divulguées en application
					d'une loi, d'un règlement ou en vertu d'une décision d'une autorité
					réglementaire ou judiciaire compétente.
				</p>
				<p className="ml-4">
					<p>
						Information préalable pour la communication des données personnelles
						à des tiers en cas de fusion / absorption <br />
						Information préalable et possibilité d'opt-out avant et après la
						fusion / acquisition Dans le cas où nous prendrions part à une
						opération de fusion, d'acquisition ou à toute autre forme de cession
						d'actifs, nous nous engageons à garantir la confidentialité de vos
						données personnelles et à vous informer avant que celles-ci ne
						soient transférées ou soumises à de nouvelles règles de
						confidentialité.
						<br />
						Finalité de la réutilisation des données personnelles collectées
					</p>
				</p>
				<h2 className="ml-4">
					Effectuer les opérations relatives à la gestion des clients concernant
				</h2>
				<p className="ml-5">
					<strong>Traitement des données relatives aux employés</strong>
					<p>
						Dans le cadre de son fonctionnement, Gérico collecte et utilise des
						données personnelles pour gérer efficacement les documents
						administratifs des employés. Ces données servent à traiter les
						bulletins de salaire, gérer les soldes et les demandes de congés, et
						faciliter les processus liés aux ressources humaines. De plus,
						Gérico permet le suivi de la relation entre l’employé et l’employeur
						à travers des enquêtes de satisfaction, la gestion des réclamations
						et l’amélioration continue des processus administratifs. <br />
						<strong>Gérico</strong> peut également utiliser les données
						collectées pour effectuer des analyses statistiques internes. Ces
						analyses, effectuées de manière anonyme, visent à identifier des
						tendances générales afin d’optimiser les services offerts, tels que
						la gestion des congés ou l’amélioration des conditions de travail.
						Ces opérations respectent strictement la confidentialité des
						employés et ne permettent pas d’identifier individuellement une
						personne.
					</p>
				</p>
				<p className="ml-5">
					<strong>Agrégation des données</strong> <br />
					Gérico procède à l’agrégation de données non personnelles pour des
					besoins statistiques et d’analyse. Par exemple, les informations sur
					l’utilisation des congés ou le volume de documents administratifs
					traités peuvent être combinées afin d’améliorer les performances du
					système. Ces informations sont traitées de manière anonyme pour
					garantir qu’aucun utilisateur individuel ne puisse être identifié.{" "}
					<br />
					Dans certains cas, si le système est connecté à d’autres plateformes
					autorisées par l’entreprise (comme un portail RH global), certaines
					informations personnelles, telles que les données de profil ou les
					historiques de demandes de congés, peuvent être partagées. Cela se
					fait uniquement dans un cadre sécurisé, strictement limité aux besoins
					opérationnels, et après avoir obtenu les autorisations nécessaires.
				</p>
				<h2 className="ml-4">Collecte des données d’identité</h2>
				<p className="ml-5">
					<strong>Consultation libre</strong>
					<p>
						La consultation du Site ne nécessite pas d’inscription ni
						d’identification préalable. Elle peut s’effectuer sans que vous ne
						communiquiez de données nominatives vous concernant (nom, prénom,
						adresse, etc). Nous ne procédons à aucun enregistrement de données
						nominatives pour la simple consultation du Site.
					</p>
				</p>
				<h2 className="ml-4">Collecte des données d'identification</h2>
				<p className="ml-5">
					Utilisation de l’identifiant de l’utilisateur uniquement pour l’accès
					aux services <br /> Nous utilisons vos identifiants électroniques
					seulement pour et pendant l’exécution du contrat.
				</p>
				<h2 className="ml-4">Collecte des données du terminal</h2>
				<p className="ml-5">
					Aucune collecte des données techniques <br />
					Nous ne collectons et ne conservons aucune donnée technique de votre
					appareil (adresse IP, fournisseur d’accès à Internet…).
				</p>
				<h2 className="ml-4">Cookies</h2>
				<p className="ml-5">
					<strong>Durée de conservation des cookies</strong> <br />
					Conformément aux recommandations de la CNIL, la durée maximale de
					conservation des cookies est de 13 mois au maximum après leur premier
					dépôt dans le terminal de l’Utilisateur, tout comme la durée de la
					validité du consentement de l’Utilisateur à l’utilisation de ces
					cookies. La durée de vie des cookies n’est pas prolongée à chaque
					visite. Le consentement de l’Utilisateur devra donc être renouvelé à
					l’issue de ce délai.
				</p>
				<p className="ml-5">
					<strong>Finalité cookies</strong> <br />
					Les cookies peuvent être utilisés pour des fins statistiques notamment
					pour optimiser les services rendus à l’Utilisateur, à partir du
					traitement des informations concernant la fréquence d’accès, la
					personnalisation des pages ainsi que les opérations réalisées et les
					informations consultées. Vous êtes informé que l’Éditeur est
					susceptible de déposer des cookies sur votre terminal. Le cookie
					enregistre des informations relatives à la navigation sur le service
					(les pages que vous avez consultées, la date et l’heure de la
					consultation…) que nous pourrons lire lors de vos visites ultérieures.
				</p>
				<p className="ml-5">
					Droit de l’Utilisateur de refuser les cookies <br />
					Vous reconnaissez avoir été informé que l’Éditeur peut avoir recours à
					des cookies. Si vous ne souhaitez pas que des cookies soient utilisés
					sur votre terminal, la plupart des navigateurs vous permettent de
					désactiver les cookies en passant par les options de réglage.
				</p>
				<h2 className="ml-4">Conservation des données techniques</h2>
				<p className="ml-5">
					Durée de conservation des données techniques <br />
					Les données techniques sont conservées pour la durée strictement
					nécessaire à la réalisation des finalités visées ci-avant.
				</p>
				<h2 className="ml-4">
					Délai de conservation de données personelles et d'anonymisation
				</h2>
				<p className="ml-5">
					Pas de conservation de données <br /> Nous ne conservons aucune donnée
					personnelle au delà de votre durée de connexion au service pour les
					finalités décrites dans les présentes CGU.
				</p>
				<p className="ml-5">
					Suppression des données après suppression du compte <br /> Des moyens
					de purge de données sont mis en place afin d’en prévoir la suppression
					effective dès lors que la durée de conservation ou d’archivage
					nécessaire à l’accomplissement des finalités déterminées ou imposées
					est atteinte. Conformément à la loi n°78-17 du 6 janvier 1978 relative
					à l’informatique, aux fichiers et aux libertés, vous disposez par
					ailleurs d’un droit de suppression sur vos données que vous pouvez
					exercer à tout moment en prenant contact avec l’Éditeur.
				</p>
				<p className="ml-5">
					Suppression des données après 3 ans d’inactivité <br />
					Pour des raisons de sécurité, si vous ne vous êtes pas authentifié sur
					le Site pendant une période de trois ans, vous recevrez un e-mail vous
					invitant à vous connecter dans les plus brefs délais, sans quoi vos
					données seront supprimées de nos bases de données.
				</p>
				<h2 className="ml-4">Suppression du compte</h2>
				<p className="ml-5">
					Suppression du compte en cas de violation des CGU <br />
					L’Utilisateur a la possibilité de supprimer son Compte à tout moment,
					par simple demande à l’Éditeur OU par le menu de suppression de Compte
					présent dans les paramètres du Compte le cas échéant.
				</p>
				<h2 className="ml-4">Vos droits</h2>
				<p className="ml-5">
					<strong>Droit d'accès et de rectification</strong> <br />
					Vous avez le droit de demander l’accès aux données personnelles que
					nous détenons à votre sujet. Si ces informations sont incorrectes ou
					incomplètes, vous pouvez en demander la rectification. <br />
					<strong>Droit à la portabilité des données</strong> <br />
					Vous pouvez demander la suppression de vos données personnelles
					lorsque celles-ci ne sont plus nécessaires au regard des finalités
					pour lesquelles elles ont été collectées ou traitées. <br />
					<strong>Droit à la limitation et à l’opposition</strong> <br />
					Vous avez le droit de recevoir vos données personnelles dans un format
					structuré, couramment utilisé et lisible par machine, afin de pouvoir
					les transmettre à un autre responsable de traitement. <br />
					<strong>Droit à la limitation et à l’opposition</strong>
					<p>
						Vous pouvez limiter le traitement de vos données dans certains cas
						ou vous opposer à leur traitement pour des raisons légitimes. Pour
						toute demande concernant vos droits, contactez-nous via les
						coordonnées fournies dans la section "Contact".
					</p>
				</p>
				<h2 className="ml-4">Sécurisation des données</h2>
				<p className="ml-5">
					<strong>Mesures de protection techniques</strong>
					<p>
						Nous utilisons des technologies de cryptage avancées pour protéger
						les données transmises sur notre site. Cela inclut des protocoles
						HTTPS, des pare-feu, et des systèmes de détection des intrusions.
					</p>
					<p>
						<strong>Constrôle des accès</strong>
						<br />
						L’accès à vos données est strictement limité aux employés autorisés,
						qui sont tenus par des obligations de confidentialité rigoureuses.
					</p>
					<p>
						<strong>Mise à jour continue</strong>
						<p>
							Nous effectuons régulièrement des audits et des mises à jour de
							nos systèmes de sécurité pour rester conformes aux normes en
							vigueur et prévenir tout risque de fuite ou d’accès non autorisé.
						</p>
					</p>
				</p>
				<h2 className="ml-4">Modifications</h2>
				<p className="ml-5">
					<strong>Mises à jour de la politique</strong>
					<p>
						Nous nous réservons le droit d’apporter des modifications à cette
						politique de confidentialité à tout moment. Ces modifications
						peuvent être nécessaires pour intégrer des évolutions légales,
						techniques ou organisationnelles. <br />{" "}
						<strong>Notification des changements</strong> <br />
						En cas de modification significative, nous vous informerons par le
						biais de notre site web ou par e-mail. Nous vous recommandons de
						consulter régulièrement cette page pour vous tenir au courant des
						mises à jour.
					</p>
				</p>
				<h2 className="ml-4">Informations de contact</h2>
				<p className="ml-5">
					<a
						href="/about"
						className="text-gray-600 dark:text-gray-400 hover:underline"
					>
						A Propos
					</a>{" "}
					<br />
					Email: gerico@u-picardie.fr <br />
					Téléphone: 07 57 50 71 34 <br />
					Adresse: Avenue des Facultés 80480 Salouël
				</p>
			</div>
		</Card>
	);
};

export default Politics;
