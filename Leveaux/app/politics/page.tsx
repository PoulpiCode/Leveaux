import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-left">
          <h1 className="mb-3 text-5xl font-bold">Politique de Confidentialité</h1>
        </div>
        <div className="mt-12 max-w-screen-xl">
          <h2 className="text-3xl font-semibold py-2">Qui sommes-nous ?</h2>
          <p className="mb-4">
          Le site de Broderie Leveaux est une plateforme dédiée à la présentation de notre entreprise, de notre savoir-faire et de nos services en broderie. Vous pouvez consulter notre page <a href="/about" className="text-blue-500 hover:underline">à propos</a> pour en savoir plus sur notre histoire et nos engagements.
          </p>

          <h2 className="text-3xl font-semibold py-2">Nature des données collectées</h2>
          <p className="mb-4">
            Dans le cadre de l'utilisation des Sites, nous collectons les catégories de données suivantes concernant nos Utilisateurs :
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Données d’état-civil, d'identité, d'identification.</li>
            <li>Données relatives à la vie professionnelle (CV, scolarité, formation professionnelle, distinctions, etc.).</li>
            <li>Données de connexion (adresses IP, journaux d'événements, etc.).</li>
          </ul>

          <h2 className="text-3xl font-semibold py-2">Communication des données personnelles à des tiers</h2>
          <p className="mb-4">
            Nous ne partageons pas vos données avec des tiers, sauf en application d'une loi, d'un règlement ou en vertu d'une décision d’une autorité compétente.
          </p>

          <h2 className="text-3xl font-semibold py-2">Information préalable pour la communication des données personnelles à des tiers en cas de fusion/absorption</h2>
          <p className="mb-4">
            En cas de fusion, acquisition ou cession d'actifs, nous nous engageons à garantir la confidentialité de vos données et à vous informer avant que celles-ci ne soient transférées ou soumises à de nouvelles règles de confidentialité.
          </p>

          <h2 className="text-3xl font-semibold py-2">Finalité de la réutilisation des données personnelles collectées</h2>
          <p className="mb-4">
            Nous utilisons les données personnelles collectées pour :
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Effectuer des opérations relatives à la gestion des clients, y compris le traitement des bulletins de salaire et la gestion des demandes de congés.</li>
            <li>Faciliter la gestion administrative des employés et suivre la relation employé/employeur (enquêtes de satisfaction, réclamations, etc.).</li>
            <li>Effectuer des analyses statistiques anonymisées pour améliorer nos services.</li>
          </ul>

          <h2 className="text-3xl font-semibold py-2">Collecte des données d’identité et d’identification</h2>
          <p className="mb-4">
            La consultation de notre site ne nécessite pas d'inscription préalable. Nous utilisons les identifiants électroniques uniquement pour l’accès aux services pendant l’exécution du contrat.
          </p>

          <h2 className="text-3xl font-semibold py-2">Collecte des données du terminal</h2>
          <p className="mb-4">
            Nous ne collectons aucune donnée technique de votre appareil (adresse IP, fournisseur d’accès à Internet, etc.).
          </p>

          <h2 className="text-3xl font-semibold py-2">Cookies</h2>
          <p className="mb-4">
            Conformément aux recommandations de la CNIL, nous utilisons des cookies pour optimiser les services rendus. La durée de conservation des cookies est limitée à 13 mois après leur premier dépôt dans votre terminal.
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Finalité des cookies :</strong> Les cookies nous aident à améliorer l’expérience utilisateur en analysant la fréquence d'accès et les pages consultées.</li>
            <li><strong>Refus des cookies :</strong> Vous pouvez désactiver les cookies via les paramètres de votre navigateur.</li>
          </ul>

          <h2 className="text-3xl font-semibold py-2">Conservation des données techniques et personnelles</h2>
          <p className="mb-4">
            Nous ne conservons aucune donnée personnelle au-delà de la durée de connexion nécessaire aux finalités définies. En cas d'inactivité pendant trois ans, nous vous enverrons un e-mail vous invitant à vous reconnecter, sinon vos données seront supprimées. En cas de suppression de compte, toutes les données associées seront supprimées.
          </p>

          <h2 className="text-3xl font-semibold py-2">Vos droits</h2>
          <p className="mb-4">
            Vous disposez des droits suivants sur vos données personnelles :
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Droit d'accès et de rectification.</li>
            <li>Droit à la portabilité des données.</li>
            <li>Droit de suppression ou limitation des données.</li>
            <li>Droit d'opposition au traitement des données.</li>
          </ul>

          <h2 className="text-3xl font-semibold py-2">Sécurisation des données</h2>
          <p className="mb-4">
            Nous utilisons des technologies de cryptage avancées pour protéger les données transmises, avec des systèmes HTTPS et des pare-feu. L'accès à vos données est limité aux employés autorisés, et des audits réguliers sont effectués pour garantir la sécurité des informations.
          </p>

          <h2 className="text-3xl font-semibold py-2">Modifications de la politique de confidentialité</h2>
          <p className="mb-4">
            Nous nous réservons le droit de modifier cette politique à tout moment. En cas de modification importante, nous vous informerons par email ou via notre site web.
          </p>

          <h2 className="text-3xl font-semibold py-2">Informations de contact</h2>
          <p className="mb-4">
            Pour toute question, vous pouvez nous contacter :
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li className="py-1">Email : contact@broderies-leveaux.fr</li>
            <li className="py-1">Téléphone : +33 (0)327 700 900</li>
            <li className="py-1">Adresse : 100 bis rue Faidherbe, Walincourt-Selvigny, 59127 France.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;