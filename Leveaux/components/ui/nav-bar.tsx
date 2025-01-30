import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const Navbar1 = () => {
	return (
		<section className="py-3 sticky">
			<div className="container">
				<nav className="hidden justify-between lg:flex">
					<div className="flex items-center gap-8">
						<div className="flex items-center gap-2 ml-4">
							<img src="/file.jpg" className="w-8" alt="logo" />
							<span className="text-2xl font-bold text-cyan-800">
								Broderie Leveaux
							</span>
						</div>
						<div className="flex items-center">
							<a
								className={cn(
									"text-black",
									"text-3xl",
									navigationMenuTriggerStyle,
									buttonVariants({
										variant: "ghost",
									}),
									"hover:text-cyan-700",
								)}
								href="/"
							>
								Accueil
							</a>
							<a
								className={cn(
									"text-black",
									"text-3xl",
									navigationMenuTriggerStyle,
									buttonVariants({
										variant: "ghost",
									}),
									"hover:text-cyan-700",
								)}
								href="/about"
							>
								A Propos
							</a>
							<a
								className={cn(
									"text-black",
									navigationMenuTriggerStyle,
									buttonVariants({
										variant: "ghost",
									}),
									"hover:text-cyan-700",
								)}
								href="/test"
							>
								Test
							</a>

							<a
								className={cn(
									"text-black",
									navigationMenuTriggerStyle,
									buttonVariants({
										variant: "ghost",
									}),
									"hover:text-cyan-700",
								)}
								href="/contact"
							>
								Contact
							</a>
							<a
								className={cn(
									"text-black",
									navigationMenuTriggerStyle,
									buttonVariants({
										variant: "ghost",
									}),
									"hover:text-cyan-700",
								)}
								href="/crea"
							>
								Création
							</a>
						</div>
					</div>
				</nav>
				<div className="block lg:hidden">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2 ml-4">
							<img src="/file.jpg" className="w-10" alt="logo" />
							<span className="text-xl font-bold text-cyan-800">
								Broderie Leveaux
							</span>
						</div>
						<Sheet>
							<SheetTrigger asChild>
								<Button variant={"outline"} size={"icon"} className="ml-4">
									<Menu className="size-4" />
								</Button>
							</SheetTrigger>
							<SheetContent className="overflow-y-auto">
								<SheetHeader>
									<SheetTitle>
										<div className="flex items-center gap-2">
											<img src="/file.jpg" className="w-8" alt="logo" />
											<span className="text-xl font-bold">
												Broderie Leveaux
											</span>
										</div>
									</SheetTitle>
								</SheetHeader>
								<div className="my-8 flex flex-col gap-4">
									<a href="/" className="font-semibold">
										Accueil
									</a>
									<a href="/about" className="font-semibold">
										A Propos
									</a>
									<a href="/test" className="font-semibold">
										Test
									</a>
									<a href="/contact" className="font-semibold">
										Contacte
									</a>
									<a href="/join" className="font-semibold">
										Nous Rejoindre
									</a>
									<a href="/actuglobal" className="font-semibold">
										Actualités
									</a>
								</div>
								<div className="border-t pt-4">
									<div className="grid grid-cols-3 justify-center">
										<a
											className={cn(
												buttonVariants({
													variant: "ghost",
												}),
												"justify-start text-muted-foreground",
											)}
											href="/politics"
										>
											Politique de confidentialité
										</a>
									</div>
									<div className="mt-2 flex flex-col gap-3">
										<Button variant={"outline"}>Log in</Button>
										<Button>Sign up</Button>
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Navbar1;
