"use client";
import Link from "next/link";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, MessagesSquare, Phone } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function ContactForm() {
    // Initialize form with react-hook-form
    const form = useForm({
        defaultValues: {
            phone: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    // Handle form submission
    const onSubmit = (data: any) => {
        console.log("Form Data:", data);
        // Handle form submission (e.g., send data to an API)
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 p-6 bg-white rounded-lg shadow-md"
            >
                <CardTitle className="text-4xl">Nous contacter</CardTitle>
                {/* Numéro de téléphone */}
                <FormField
                    name="phone"
                    control={form.control}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Numéro de téléphone</FormLabel>
                                <FormControl>
                                    <Input
                                        type="tel"
                                        placeholder="Votre numéro de téléphone"
                                        {...form.register("phone", {
                                            required: "Ce champ est requis",
                                        })}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />
                {/* Adresse mail */}
                <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Adresse mail</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Votre adresse mail"
                                        {...form.register("email", {
                                            required: "Ce champ est requis",
                                            pattern: {
                                                value: /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/,
                                                message: "Adresse mail invalide",
                                            },
                                        })}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />
                {/* Objet */}
                <FormField
                    name="subject"
                    control={form.control}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Objet</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        placeholder="Objet de votre message"
                                        {...form.register("subject", {
                                            required: "Ce champ est requis",
                                        })}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />
                {/* Message */}
                <FormField
                    name="message"
                    control={form.control}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Votre message..."
                                        {...form.register("message", {
                                            required: "Ce champ est requis",
                                        })}
                                        rows={6}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />
                {/* Bouton Envoyer */}
                <Button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                    Envoyer
                </Button>
            </form>
        </Form>
    );
}

const Contact: React.FC = () => {
    return (
        
        <div className="flex flex-col items-center justify-center bg-card border-0 rounded-2xl">
            <Separator className="my-2" />
            <section className='py-16'>
                <div className='container'>
                    <div className='mb-14'>
                        <h1 className='mb-3 mt-1 text-balance text-3xl font-semibold md:text-4xl'>
                            Pour nous contacter :
                        </h1>
                        <p className='text-lg text-muted-foreground'>
                            Nous serions ravis de vous aider. Remplissez le formulaire ou envoyez-nous un email.
                        </p>
                    </div>
                    <div className='grid gap-10 md:grid-cols-3'>
                        <div>
                            <span className='mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent'>
                                <Mail className='h-6 w-auto' />
                            </span>
                            <p className='mb-2 text-lg font-semibold'>Email</p>
                            <p className='mb-3 text-muted-foreground'>
                                Notre équipe est prête a vous assisté tout de suite.
                            </p>
                            <a href='#' className='font-semibold hover:underline'>
                                Leveaux@u-picardie.fr
                            </a>
                        </div>
                        <div>
                            <span className='mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent'>
                                <MapPin className='h-6 w-auto' />
                            </span>
                            <p className='mb-2 text-lg font-semibold'>Rendez nous visite</p>
                            <p className='mb-3 text-muted-foreground'>
                                Passez nous voir à notre bureau pour discuter.
                            </p>
                            <a href='#' className='font-semibold hover:underline'>
                                Avenue des Facultés, Le Bailly,  Amiens
                            </a>
                        </div>
                        <div>
                            <span className='mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent'>
                                <Phone className='h-6 w-auto' />
                            </span>
                            <p className='mb-2 text-lg font-semibold'>Appelez-nous</p>
                            <p className='mb-3 text-muted-foreground'>
                                Nous sommes disponibles pour votre appel
                            </p>
                            <a href='#' className='font-semibold hover:underline'>
                                +33 07 57 50 71 34
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Separator className="my-2" />
            <div className="container mx-auto mt-4 grid gap-10 md:grid-cols-2">
                <section>
                    <Card className="rounded-xl border bg-card text-card-foreground shadow h-full">
                        <CardHeader>
                            <CardTitle className="text-4xl">Retrouvez-nous</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-row gap-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28977.20301339372!2d3.3293907512416165!3d50.06293396943577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c298af4168052d%3A0x77a41d4be091860c!2sBroderies%20Leveaux!5e0!3m2!1sfr!2sfr!4v1738067622454!5m2!1sfr!2sfr" 
                         width="600" 
                         height="450" 
                         style={{ border: 0 }} 
                         allowFullScreen={true} 
                         loading="lazy" 
                         referrerPolicy="no-referrer-when-downgrade">
                         </iframe>
                            <div className="flex flex-col justify-center gap-10">
                                <div className="flex flex-col text-2xl">
                                    <h2>Adresse: </h2>
                                    <p>Avenue des Facultés</p>
                                    <p>80480</p>
                                    <p>Salouël</p>
                                </div>
                                <div className="text-2xl">
                                    <h2>Téléphone:</h2>
                                    <p>07 57 50 71 34</p>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <small>
                                <a href="https://www.openstreetmap.org/?mlat=49.870834&amp;mlon=2.263985#map=18/49.870834/2.263985">
                                    Afficher une carte plus grande
                                </a>
                            </small>
                        </CardFooter>
                    </Card>
                </section>
                <section>
                    <Card className="rounded-xl border bg-card text-card-foreground shadow h-full">
                        <ContactForm />
                    </Card>
                </section>
            </div>
        </div>
    );
};

export default Contact;