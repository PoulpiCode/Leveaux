import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/Pagination";

const posts = [
  {
    id: "post-1",
    title: "Gérico vous présente une réponse agile au enjeux industriels",
    summary:
      "Gérico propose des solutions sur mesure pour optimiser la logistique, améliorer la performance et répondre aux défis environnementaux des entreprises industrielles",
    label: "En vedette",
    href: "/actu1",
    image: "https://www.groupe-blondel.com/wp-content/uploads/2023/05/bandeau-cas-client-industrie.jpg",
  },
  {
    id: "post-2",
    title: "le défi chez Gérico de simplifier l'éxpérience des employés",
    summary:
      "Une solution logistique dédiée permet de gérer efficacement les commandes, les retours et le stockage tout en réduisant l’impact environnemental grâce à des emballages éco-responsables et un suivi en temps réel.",
    label: "En vedette",
    href: "/actu2",
    image: "https://www.groupe-blondel.com/wp-content/uploads/2023/05/Scan-entrepot-ecommerce-2.jpg",
  },
  {
    id: "post-3",
    title: "Cas client : Transport urbain et performance écologique",
    summary:
      "Grâce à des camions au bio Méthane et des remorques « city » équipées de chariots embarqués, les livraisons en centre-ville sont optimisées, avec une réduction de 80 % des émissions de CO2.",
    label: "En vedette",
    href: "/actu3",
    image: "https://www.groupe-blondel.com/wp-content/uploads/2023/04/cas-client-leroy-merlin.jpg",
  },
  {
    id: "post-4",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    author: "Jane Doe",
    published: "1 Jan 2024",
    href: "#",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
];

const Blog6 = () => {
  return (
    <section className="py-12 px-6">
      <div className="container">
        <div className="mb-8 md:mb-14 lg:mb-16">
          <h1 className="mb-4 w-full text-4xl font-semibold md:mb-5 md:text-5xl lg:mb-6 lg:text-6xl text-center">
            Actualités
          </h1>
            <p className="text-center lg:max-w-2xl mx-auto">Suivez les actualités de Gérico pour ne rien manquer des projets en cours, des événements à venir et des changements majeurs qui marquent notre évolution en continu.</p>
        </div>
        <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12 2xl:grid-cols-3">
          {posts.map((post) => (
            <a key={post.id} href={post.href} className="group flex flex-col">
              <div className="mb-4 flex overflow-clip rounded-xl md:mb-5">
                <div className="h-full w-full transition duration-300 group-hover:scale-105">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="aspect-[3/2] h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              <div>
                <Badge>{post.label}</Badge>
              </div>
              <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-2xl lg:pt-4 lg:text-3xl">
                {post.title}
              </div>
              <div className="mb-4 line-clamp-2 text-sm text-muted-foreground md:mb-5 md:text-base">
                {post.summary}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex flex-col gap-px">
                  <span className="text-xs font-medium">{post.author}</span>
                  <span className="text-xs text-muted-foreground">
                    {post.published}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 border-t border-border py-2 md:mt-10 lg:mt-12">
        </div>
      </div>
    </section>
  );
};

export default Blog6;
