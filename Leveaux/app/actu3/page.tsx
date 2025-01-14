import { CircleArrowRight, Files, Settings } from "lucide-react";

const About1 = () => {
  return (
    <section className="py-12 px-4">
      <div className="container flex flex-col gap-12">
        <div className="flex flex-col gap-7">
          <h1 className="text-4xl font-semibold lg:text-7xl background">
          Optimisation des Livraisons Urbaines et Réduction de l'Impact Écologique grâce à une Logistique Innovante
          </h1>
          <p className="max-w-xl text-lg">
          Le transport urbain représente un défi majeur pour les entreprises de logistique, en raison de la congestion des centres-villes et des exigences environnementales croissantes. Dans ce contexte, le Groupe Gérico a proposé des solutions sur mesure pour améliorer les processus logistiques et réduire l'empreinte écologique.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <img
            src="https://www.groupe-blondel.com/wp-content/uploads/2023/04/leroy-merlin-remorque-768x512.jpeg"
            alt="placeholder"
            className="size-full max-h-96 rounded-2xl object-cover"
          />
          <div className="flex flex-col gap-10 rounded-2xl bg-muted p-10">
            <p className="text-sm text-muted-foreground">A Propos</p>
            <p className="text-lg font-medium">
            À travers l'utilisation de véhicules roulant au bio Méthane et de remorques "city" équipées de chariots embarqués, Gérico optimise les livraisons en milieu urbain, tout en minimisant l'impact environnemental. Cette solution permet de réduire les émissions de CO2 et d'améliorer la flexibilité des livraisons. Les clients bénéficient ainsi de services plus rapides et écologiques, avec une gestion optimale des contraintes liées à la circulation et aux réglementations environnementales.
            </p>
          </div>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
              
            Engagement Environnemental : Vers une Logistique Durable et Responsable
            </h2>
            <p className="text-muted-foreground text-xl">
            Chez Gérico, la réduction de l'impact écologique est au cœur de notre stratégie logistique. Nous comprenons que la croissance des activités e-commerce et industrielles doit être accompagnée d’une gestion responsable des ressources et de l’environnement. Pour cela, nous avons mis en place des solutions logistiques innovantes et éco-responsables, qui permettent à nos partenaires de réduire leur empreinte carbone tout en optimisant leur efficacité opérationnelle.

Nos choix en matière de transport sont orientés vers l’utilisation de véhicules à biocarburants et l’adoption de matériaux recyclables pour l’emballage des produits. De plus, notre plateforme assure une traçabilité complète de la chaîne logistique, permettant ainsi un suivi en temps réel et une gestion optimale des flux de commande, de la réception à l'expédition. Cette approche permet de limiter les déplacements inutiles et de réduire les coûts liés à la consommation énergétique.

En intégrant des solutions écologiques dans tous les aspects de nos opérations, nous contribuons activement à un avenir plus durable tout en offrant à nos clients une logistique plus rapide, flexible et respectueuse de l’environnement.
            </p>
          </div>
          <div>
            <img
              src="https://www.groupe-blondel.com/wp-content/uploads/2023/04/remorque-avec-chariot-embarque-768x768.jpeg"
              alt="placeholder"
              className="w-5/6 rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
