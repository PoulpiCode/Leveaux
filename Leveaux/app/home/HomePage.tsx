import { ArrowDownRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Hero1 = () => {
	return (
		<section className="w-full h-full">
			<div
				className="relative w-full flex flex-col h-screen bg-cover bg-center items-center justify-center shadow-lg"
				style={{
					backgroundImage:
						"url('1713224347_broderie-moderne-techniques-pour-personnaliser-vos-pieces.jpg')",
				}}
			>
				<div className=" z-10 flex w-full flex-col items-center">
					<h2 className="w-3/5 text-white text-wrap text-center text-8xl flex-col underline decoration-solid font-italiano">
						Broderie Leveaux
					</h2>
					<h2 className="w-3/5 text-wrap text-center font-bold text-6xl flex-col text-white">
						<br /> Votre spécialiste tricolore de la broderie, où savoir-faire
						artisanal et créativité moderne
					</h2>
					<div className="flex gap-7 pt-4">
						<Button className="text-lg" size="home_size">
							<Link href="/contact" className="text-base">
								Contactez-nous !
							</Link>
						</Button>
						<Button variant="outline" size="home_size">
							<Link href="/about" className="text-base">
								A Propos
							</Link>
						</Button>
					</div>
				</div>
			</div>
			<div className="py-4">
				<h2 className="flex justify-center text-cyan-900 decoration-solid font-italiano">
					De fil en aiguille
				</h2>
				<Separator className="my-4 bg-cyan-800" />
			</div>
			<div className="video-container flex justify-center">
				<iframe
					width="598"
					height="336"
					src="https://www.youtube.com/embed/0-Qn_07TpQo"
					title="Broderies Leveaux"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
			</div>
		</section>
	);
};

export default Hero1;
