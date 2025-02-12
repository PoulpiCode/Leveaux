"use client";

import { Lightbulb } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Blog15 = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement>>({});

  useEffect(() => {
    const sections = Object.keys(sectionRefs.current);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    let observer: IntersectionObserver | null = new IntersectionObserver(
      observerCallback,
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      },
    );

    sections.forEach((sectionId) => {
      const element = sectionRefs.current[sectionId];
      if (element) {
        observer?.observe(element);
      }
    });

    return () => {
      observer?.disconnect();
      observer = null;
    };
  }, []);

  const addSectionRef = (id: string, ref: HTMLElement | null) => {
    if (ref) {
      sectionRefs.current[id] = ref;
    }
  };
  return (
    <section className="py-12">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-5">
          <h1 className="mb-3 text-5xl font-bold">
          À Propos de Nous
          </h1>
          <p className="text-center text-muted-foreground lg:text-lg">
          Découvrez l’héritage et le savoir-faire de Broderie Leveaux, où tradition et innovation se rencontrent. Depuis plusieurs générations, nous sublimons le textile avec des motifs uniques, alliant précision artisanale et techniques modernes pour créer des broderies d’exception.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-6xl rounded-lg border p-2">
          <img
            src="Broderie_Leveaux_A_Propos.png"
            alt="placeholder"
            className="aspect-video rounded-lg object-cover"
          />
        </div>
        <div className="relative mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-4">
          <div className="sticky top-8 hidden h-fit lg:block">
            <span className="mb-6 text-lg">L'art de la Broderie</span>
            <nav className="mt-2">
              <ul className="space-y-2">
                <li>
                  <p
                    className={cn(
                      "block py-1 transition-colors duration-100",
                      activeSection === "section1"
                        ? "font-medium text-primary"
                        : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    Le Savoir-Faire
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      "block py-1 transition-colors duration-100",
                      activeSection === "section2"
                        ? "font-medium text-primary"
                        : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    L’Atelier et la Création
                  </p>
                </li>
                <li>
                  <p
                    className={cn(
                      "block py-1 transition-colors duration-100",
                      activeSection === "section3"
                        ? "font-medium text-primary"
                        : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    L’Héritage et la Passion
                  </p>
                </li>
              </ul>
            </nav>
          </div>
            <div className="lg:col-span-3">
            <div className="lg:col-span-3">
              <div>
              <h1 className="text-3xl font-extrabold">L’Art de la Broderie</h1>
              <p className="mt-2 text-lg text-muted-foreground">
              Dans le Nord de la France, à Walincourt, se perpétue un savoir-faire ancestral. Un métier d’art, un héritage familial, une passion qui se transmet de génération en génération : la broderie.
              </p>
              <img
                src="Aubade_Leveaux_v3.png"
                alt="placeholder"
                className="my-8 aspect-video w-full rounded-md object-cover"
              />
              </div>
              <section
              id="section1"
              ref={(ref) => addSectionRef("section1", ref)}
              className="prose mb-8"
              >
              <h2>Le Savoir-Faire</h2>
              <p>
              Depuis la fin du XVIIIe siècle, la famille Leveaux a consacré sa vie au textile. La broderie n’est pas qu’un simple ornement, c’est un art vivant qui exige précision et adaptation. Si les machines sont devenues plus performantes, l’homme reste au cœur du processus : le fileur, l’artisan, celui qui donne vie aux motifs et sublime la matière.
              </p>
              </section>

              <section
              id="section2"
              ref={(ref) => addSectionRef("section2", ref)}
              className="prose mb-8"
              >
              <h2>L’Atelier et la Création</h2>
              <p>
              Chaque année, plus de 700 motifs sont créés, inspirés aussi bien des archives familiales que des tendances actuelles. Des motifs floraux pour le printemps, des textures raffinées pour la haute couture, des broderies élégantes pour l’ameublement… Chaque pièce est pensée pour s’harmoniser parfaitement avec son support.
              <br />
              <br />
              <strong> Les collections en évolution :</strong><br /><br />
              </p>
              <div>
                <table>
                <thead>
                  <tr>
                  <th>  Style&nbsp;</th>
                  <th>	Inspiration&nbsp;</th>
                  <th>	Technique</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td>Lingerie&nbsp;</td>
                  <td>	Délicatesse & finesse&nbsp;</td>
                  <td>	Dentelle brodée</td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                  <td>Prêt-à-porter&nbsp;</td>
                  <td>Élégance et modernité&nbsp;</td>
                  <td>	Motifs textiles complexes</td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                  <td>Haute couture&nbsp;</td>
                  <td>	Exclusivité et prestige&nbsp;</td>
                  <td>	Broderies d’exception</td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                  <td>Ameublement&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>Raffinement intérieur&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>	Fils et textures sophistiquées</td>
                  </tr>
                </tbody>
                </table>
              </div>
              </section>

              <section
                id="section3"
                ref={(ref) => addSectionRef("section3", ref)}
                className="prose mb-8"
              >
                <h2>L’Héritage et la Passion</h2>
                <p>
                Chez les Leveaux, on est brodeur depuis plus de quatre générations. Benjamin perpétue cet héritage en plongeant dans de véritables grimoires, feuilletant les pages du passé pour réactualiser des motifs et leur donner une nouvelle vie. <br />
                </p>
                <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-700 font font-bold">
                « Ce qui nous plaît, c’est ce savoir-faire vivant, transmis de génération en génération, que nous faisons grandir et évoluer. » – Benjamin Leveaux
      </blockquote> <br />
                <p>
                Ainsi, entre tradition et modernité, Broderie Leveaux continue de faire rayonner l’art textile, façonnant avec passion des pièces uniques qui traversent le temps.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog15 ;
