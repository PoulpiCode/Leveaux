import React from "react";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDownRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Envi: React.FC = () => {
    return (
        <>
            <section className="py-24">
                <div className="container">
                    <div className="grid items-center gap-8 lg:grid-cols-2">
                        <div className="flex flex-col items-center text-center lg:items-start lg:text-left px-4">
                            <Badge variant="outline">
                                Nouvelle version
                                <ArrowDownRight className="ml-2 size-4" />
                            </Badge>
                            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-5xl">
                            ENVIRONNEMENT & ÉNERGIE
                            </h1>
                            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
                            Avec Gérico, notre ambition est de simplifier la gestion RH des entreprises grâce à une plateforme intuitive et sécurisée,
                            qui facilite l'accès aux fiches de paie et la gestion des demandes de congés.
                            Nous sommes motivés par l'envie d'apporter une solution moderne et pratique,
                            tout en mettant l'utilisateur au centre de nos priorités.
                            </p>
                        </div>
                        <img
                            src="https://www.econonord.com/wp-content/uploads/2020/03/Transport-De-Marchandises-Ecologique-2.jpeg"
                            alt="placeholder hero"
                            className="max-h-96 w-full rounded-md object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="w-full h-full">
                <div
                    className="relative w-full flex flex-col h-72 bg-lime-400 items-center justify-center"
                >
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="relative z-10 flex w-full flex-col items-center justify-center">
                        <h2 className="w-3/5 text-white text-wrap text-center text-xl flex-col py-4">
                            ENVIRONNEMENT & ÉNERGIE
                        </h2>
                        <h3 className="w-3/5 text-white text-wrap text-center text-5xl flex-col font-bold">
                            GREEN
                            <br />
                        </h3>
                        <h3 className="w-3/5 text-white text-wrap text-center text-xl flex-col py-4">
                            Aujourd’hui toute énergie renouvelable a un rôle à jouer. Notre
                            responsabilité est de contribuer activement au déploiement de
                            solutions durables.
                        </h3>
                        <div className="py-4">
                        </div>
                        <div className="flex gap-7 pt-4"></div>
                    </div>
                </div>
            </section>
            
        </>
    );
};

export default Envi;