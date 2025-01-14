import { CircleArrowRight, Files, Settings } from "lucide-react";

const About1 = () => {
  return (
    <section className="py-12 px-4">
      <div className="container flex flex-col gap-12">
        <div className="flex flex-col gap-7">
          <h1 className="text-4xl font-semibold lg:text-7xl background">
          Gérico vous présente une réponse agile au enjeux des industriels
          </h1>
          <p className="max-w-xl text-lg">
            Gérico propose des solutions sur mesure pour optimiser la logistique, améliorer la performance et répondre aux défis environnementaux des entreprises industrielles.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <img
            src="https://www.groupe-blondel.com/wp-content/uploads/2024/11/BB19062704.jpg"
            alt="placeholder"
            className="size-full max-h-96 rounded-2xl object-cover"
          />
          <div className="flex flex-col gap-10 rounded-2xl bg-muted p-10">
            <p className="text-sm text-muted-foreground">A Propos</p>
            <p className="text-lg font-medium">
            Dans un contexte où la protection des données sensibles est cruciale, Gérico met l'accent sur la sécurité. Des protocoles avancés, tels que le chiffrement des données et des connexions sécurisées, sont intégrés dès la conception pour garantir une confidentialité optimale. De plus, le projet repose sur une architecture robuste permettant une performance optimale même en cas de forte charge. Grâce à des tests rigoureux et des mises à jour régulières, Gérico assure une expérience utilisateur fluide et fiable.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-2">
          <div className="">
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
            Une logistique à la carte pour une industrialisation performante et responsable !
            </h2>
            <p className="text-muted-foreground py-6">
            Chez Gérico, nous croyons en l’importance de la collaboration et de l’entraide pour atteindre des objectifs communs. Chaque membre de l’équipe est encouragé à partager ses idées, donner et recevoir des retours constructifs. Cette approche collaborative garantit que les flux de travail sont continuellement optimisés pour répondre aux besoins des utilisateurs et offrir des solutions efficaces et intuitives.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="flex flex-col">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                <Files className="size-5" />
              </div>
              <h3 className="mb-3 mt-2 text-lg font-semibold">
                Flux Optimisé
              </h3>
              <p className="text-muted-foreground">
              Chez Gérico, nous croyons en l’importance de la collaboration et de l’entraide pour atteindre des objectifs communs. Chaque membre de l’équipe est encouragé à partager ses idées, donner et recevoir des retours constructifs. Cette approche collaborative garantit que les flux de travail sont continuellement optimisés pour répondre aux besoins des utilisateurs et offrir des solutions efficaces et intuitives.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                <CircleArrowRight className="size-5" />
              </div>
              <h3 className="mb-3 mt-2 text-lg font-semibold">
                Performance en évolution
              </h3>
              <p className="text-muted-foreground">
              Dans un monde en constante évolution, Gérico s’engage à rechercher activement les grandes opportunités pour améliorer ses fonctionnalités. Nous agissons avec audace et clarté pour doubler nos efforts sur ce qui compte le plus, en veillant à ce que chaque mise à jour ou amélioration réponde aux attentes des utilisateurs tout en anticipant les défis futurs du secteur.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                <Settings className="size-5" />
              </div>
              <h3 className="mb-3 mt-2 text-lg font-semibold">
                Solutions industrielle
              </h3>
              <p className="text-muted-foreground">
              Nous croyons fermement que chaque utilisateur doit être en mesure de prendre des décisions en toute autonomie pour le bénéfice de son entreprise. Gérico offre des outils flexibles et personnalisables, permettant aux entreprises de s’adapter à leurs spécificités et d’intégrer la plateforme dans leur écosystème existant. Grâce à cette adaptabilité, Gérico devient un partenaire stratégique pour répondre aux enjeux modernes des industries.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
Une Interface Moderne et en Évolution
            </h2>
            <p className="text-muted-foreground py-6 text-xl">
            Gérico propose une plateforme intuitive et évolutive qui répond aux besoins des employés et des gestionnaires RH. Grâce à une interface claire et ergonomique, les utilisateurs peuvent consulter leurs fiches de paie ou soumettre des demandes de congés en toute simplicité, tandis que les administrateurs bénéficient de tableaux de bord dynamiques pour gérer les équipes en temps réel. En intégrant les technologies les plus récentes et en tenant compte des retours utilisateurs, Gérico évolue constamment pour offrir de nouvelles fonctionnalités et s’adapter aux attentes du marché. La plateforme favorise également une collaboration fluide entre les employés et les ressources humaines, renforçant ainsi son rôle de partenaire indispensable dans la gestion des ressources humaines.
            </p>
          </div>
          <div>
            <img
              src="https://www.groupe-blondel.com/wp-content/uploads/2024/11/DSC5968-768x512.jpg"
              alt="placeholder"
              className=" w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
