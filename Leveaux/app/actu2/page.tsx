import { CircleArrowRight, Files, Settings } from "lucide-react";

const About1 = () => {
  return (
    <section className="py-12 px-4">
      <div className="container flex flex-col gap-12">
        <div className="flex flex-col gap-7">
          <h1 className="text-4xl font-semibold lg:text-7xl background">
          Digitalisation RH : Gérico, une solution innovante pour optimiser la gestion des ressources humaines
          </h1>
          <p className="max-w-xl text-lg">
          Dans un contexte où la digitalisation s’impose comme un levier clé pour améliorer la performance des entreprises, la gestion des ressources humaines évolue vers des solutions toujours plus modernes et efficaces. La plateforme Gérico s’inscrit dans cette dynamique en proposant une solution complète pour simplifier les processus RH, notamment grâce à son générateur de fiches de paie en PDF directement accessible en ligne.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <img
            src="https://www.groupe-blondel.com/wp-content/uploads/2023/04/Scan-entrepot-ecommerce-768x675.jpg"
            alt="placeholder"
            className="size-full max-h-96 rounded-2xl object-cover"
          />
          <div className="flex flex-col gap-10 rounded-2xl bg-muted p-10">
            <p className="text-sm text-muted-foreground">A Propos</p>
            <p className="text-lg font-medium">
            Cette fonctionnalité permet aux employés de consulter et de télécharger leurs fiches de paie de manière sécurisée, à tout moment et depuis n’importe quel appareil. Les responsables RH, quant à eux, bénéficient d’une interface intuitive leur permettant de générer rapidement des documents conformes aux réglementations en vigueur, tout en réduisant les erreurs administratives.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-2">
          <div className="">
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
            
Gérico : une gestion RH simplifiée et responsable
            </h2>
            <p className="text-muted-foreground py-6">
            Gérico facilite la gestion des fiches de paie en ligne avec des PDF sécurisés, offrant une solution intuitive et éco-responsable. Nous valorisons la collaboration au sein de notre équipe, encourageant l'échange d'idées et les retours constructifs pour améliorer continuellement nos services. Avec Gérico, la gestion des ressources humaines devient plus simple, efficace et respectueuse de l’environnement.
            </p>
          </div>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
              
            Une équipe collaborative pour des solutions RH performantes
            </h2>
            <p className="text-muted-foreground py-6 text-xl">
            Chez Gérico, nous croyons fermement à l’importance de la collaboration pour atteindre des objectifs communs. Chaque membre de notre équipe contribue activement à l’amélioration continue de nos services, en partageant des idées et en offrant des retours constructifs. Cette approche favorise l’optimisation constante de nos flux de travail, garantissant ainsi des solutions RH toujours plus efficaces et adaptées aux besoins de nos utilisateurs.
            </p>
          </div>
          <div>
            <img
              src="data:image/jpeg;base64,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"
              alt="placeholder"
              className="w-8/12 rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
