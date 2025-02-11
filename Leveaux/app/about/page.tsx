"use client";
import { MessagesSquare, Play } from "lucide-react";
import { Fragment, useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Hero135 = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <Fragment>
      <section className="py-2">
        <div className="grid gap-14 lg:grid-cols-4 xl:grid-cols-5">
          <div className="md:col-span-2 xl:col-span-3">
            <h2 className="mb-10 text-4xl font-medium pl-4">A Propos de Nous</h2>
            <p className="text-lg px-3">
            Chez Broderie Leveaux, nous perpétuons un savoir-faire familial transmis depuis la fin du XVIIIe siècle. Installés à Walincourt, dans le Nord-Pas-de-Calais, nous allions tradition et innovation pour sublimer l’art de la broderie. Plus qu’un simple procédé, la broderie est un art vivant qui exige précision et adaptation.
              <br />
              <br />
              Chaque année, nos artisans conçoivent plus de 700 motifs, en s’inspirant des archives de la maison et des tendances actuelles. Qu’il s’agisse de lingerie, de prêt-à-porter, de haute couture ou d’ameublement, chaque création est pensée pour créer une harmonie visuelle et sublimer les textiles. Si nos machines sont toujours plus performantes, l’œil et la main de l’artisan restent essentiels, car le textile est un matériau vivant qui évolue au fil du travail.
              <br />
              <br />
              Chez les Leveaux, on est brodeur depuis plus de quatre générations. Benjamin perpétue cette tradition en puisant son inspiration dans de véritables grimoires, feuilletant les pages, réactualisant d’anciens dessins pour les remettre en production.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6 text-center">
              <div className="flex flex-col items-center justify-center gap-2 rounded-xl border bg-background p-6">
            <span className="text-2xl md:text-4xl">2024</span>
            <span className="text-sm text-muted-foreground md:text-lg">
              Launched
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 rounded-xl border bg-background p-6">
            <span className="text-2xl md:text-4xl">$2.2M</span>
            <span className="text-sm text-muted-foreground md:text-lg">
              Pre-Seed Round
            </span>
          </div>
            </div>
          </div>
          <img
            src="/Broderie_Leveaux_A_Propos.png"
            alt="placeholder"
            className="rounded-xl md:col-span-2 ml-[-20px] w-full h-4/6"
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Hero135;
