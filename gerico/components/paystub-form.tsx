"use client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { format } from "date-fns";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";

const formSchema = z.object({
	sheetStartDate: z.coerce.date(),
	sheetEndDate: z.coerce.date(),
	monthlyHours: z.number(),
	overtimeHours: z.number(),
	ssSicknessMaternity: z.number(),
	ssComplementary: z.number(),
	workIncidents: z.number(),
	ssCapped: z.number(),
	ssUncapped: z.number(),
	complementarySlice1: z.number(),
	family: z.number(),
	unemployedInsurance: z.number(),
	contribReductionOvertimeRestDays: z.number(),
	otherEmployersContribution: z.number(),
	statesExoneration: z.number(),
	reboughtNonTaxableDays: z.number(),
	reboughtNonTaxableDaysNet: z.number(),
	salaryAdjustmentWithoutContributions: z.number(),
	totalExoneration: z.number(),
});

type FormSchema = z.infer<typeof formSchema>;

const PaystubForm: React.FC<{
	defaultValues?: Partial<FormSchema>;
	onChange: (values: Partial<FormSchema>) => void;
}> = ({
	defaultValues = { sheetStartDate: new Date(), sheetEndDate: new Date() },
	onChange,
}) => {
	const form = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues,
	});

	useEffect(() => {
		const subscription = form.watch((values) => {
			onChange(values); // Notify parent component whenever form values change
		});

		return () => subscription.unsubscribe(); // Clean up subscription on unmount
	}, [form, onChange]);

	function onSubmit(values: FormSchema) {
		try {
			console.log(values);
			toast(
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(values, null, 2)}</code>
				</pre>,
			);
		} catch (error) {
			console.error("Form submission error", error);
			toast.error("Failed to submit the form. Please try again.");
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8 max-w-3xl mx-auto py-10"
			>
				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-6">
						<FormField
							control={form.control}
							name="sheetStartDate"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel>Début</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant={"outline"}
													className={cn(
														"w-[240px] pl-3 text-left font-normal",
														!field.value && "text-muted-foreground",
													)}
												>
													{field.value ? (
														format(field.value, "PPP")
													) : (
														<span>Pick a date</span>
													)}
													<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<Calendar
												mode="single"
												selected={field.value}
												onSelect={field.onChange}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
									<FormDescription>
										Date du début de la fiche de paie
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="col-span-6">
						<FormField
							control={form.control}
							name="sheetEndDate"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel>Fin</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant={"outline"}
													className={cn(
														"w-[240px] pl-3 text-left font-normal",
														!field.value && "text-muted-foreground",
													)}
												>
													{field.value ? (
														format(field.value, "PPP")
													) : (
														<span>Pick a date</span>
													)}
													<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<Calendar
												mode="single"
												selected={field.value}
												onSelect={field.onChange}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
									<FormDescription>
										Date de fin de la fiche de paie
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>

				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-6">
						<FormField
							control={form.control}
							name="monthlyHours"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Heures mensuelles</FormLabel>
									<FormControl>
										<Input placeholder="140" type="number" {...field} />
									</FormControl>
									<FormDescription>Heures mensuelles réalisées</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="col-span-6">
						<FormField
							control={form.control}
							name="overtimeHours"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Heures supplémentaires</FormLabel>
									<FormControl>
										<Input placeholder="0" type="number" {...field} />
									</FormControl>
									<FormDescription>
										Heures supplémentaires réalisées
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>

				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-6">
						<FormField
							control={form.control}
							name="ssSicknessMaternity"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Sécurité Sociale - Maladie Maternité Invalidité Décès
									</FormLabel>
									<FormControl>
										<Input placeholder="151.54" type="number" {...field} />
									</FormControl>
									<FormDescription>Section employeur</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="col-span-6">
						<FormField
							control={form.control}
							name="ssComplementary"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Complémentaire Incapacité Invalidité Décès
									</FormLabel>
									<FormControl>
										<Input placeholder="43.30" type="number" {...field} />
									</FormControl>
									<FormDescription>Section employeur</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>

				<FormField
					control={form.control}
					name="workIncidents"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								ACCIDENTS DU TRAVAIL - MALADIES PROFESSIONNELLES
							</FormLabel>
							<FormControl>
								<Input placeholder="32.47" type="number" {...field} />
							</FormControl>
							<FormDescription>Section employeur</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-4">
						<FormField
							control={form.control}
							name="ssCapped"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Sécurité Sociale plafonnée</FormLabel>
									<FormControl>
										<Input placeholder="185.09" type="number" {...field} />
									</FormControl>
									<FormDescription>Section employeur</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="col-span-4">
						<FormField
							control={form.control}
							name="ssUncapped"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Sécurité Sociale déplafonnée</FormLabel>
									<FormControl>
										<Input placeholder="41.13" type="number" {...field} />
									</FormControl>
									<FormDescription>Section employeur</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="col-span-4">
						<FormField
							control={form.control}
							name="complementarySlice1"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Complémentaire Tranche 1</FormLabel>
									<FormControl>
										<Input placeholder="130.11" type="number" {...field} />
									</FormControl>
									<FormDescription>Section employeur</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>

				<FormField
					control={form.control}
					name="family"
					render={({ field }) => (
						<FormItem>
							<FormLabel>FAMILLE</FormLabel>
							<FormControl>
								<Input placeholder="74.69" type="number" {...field} />
							</FormControl>
							<FormDescription>Section employeur</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="unemployedInsurance"
					render={({ field }) => (
						<FormItem>
							<FormLabel>ASSURANCE CHOMAGE</FormLabel>
							<FormControl>
								<Input placeholder="68.19" type="number" {...field} />
							</FormControl>
							<FormDescription>Section employeur</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="contribReductionOvertimeRestDays"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Réduction Cotis. sur heures compl/suppl et rachat jours de repos
							</FormLabel>
							<FormControl>
								<Input placeholder="16.64" type="number" {...field} />
							</FormControl>
							<FormDescription>Section employé</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="otherEmployersContribution"
					render={({ field }) => (
						<FormItem>
							<FormLabel>AUTRES CONTRIBUTIONS DUES PAR L'EMPLOYEUR</FormLabel>
							<FormControl>
								<Input placeholder="346.80" type="number" {...field} />
							</FormControl>
							<FormDescription>Section employeur</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="statesExoneration"
					render={({ field }) => (
						<FormItem>
							<FormLabel>EXONERATIONS DE COTISATIONS EMPLOYEUR</FormLabel>
							<FormControl>
								<Input placeholder="409.17" type="number" {...field} />
							</FormControl>
							<FormDescription>Section employeur</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-6">
						<FormField
							control={form.control}
							name="reboughtNonTaxableDays"
							render={({ field }) => (
								<FormItem>
									<FormLabel>HC/HS/Rachat jours non imposable</FormLabel>
									<FormControl>
										<Input placeholder="164.63" type="number" {...field} />
									</FormControl>
									<FormDescription>Section employé</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="col-span-6">
						<FormField
							control={form.control}
							name="reboughtNonTaxableDaysNet"
							render={({ field }) => (
								<FormItem>
									<FormLabel>HC/HS/Rachat jours non imposable net</FormLabel>
									<FormControl>
										<Input placeholder="153.82" type="number" {...field} />
									</FormControl>
									<FormDescription>Section employé</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>

				<FormField
					control={form.control}
					name="salaryAdjustmentWithoutContributions"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Dont évolution de la rémunération liée à la suppression des
								cotisations chômage et maladie
							</FormLabel>
							<FormControl>
								<Input placeholder="34.06" type="number" {...field} />
							</FormControl>
							<FormDescription>Section unité</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="totalExoneration"
					render={({ field }) => (
						<FormItem>
							<FormLabel>ALLEGEMENT DE COTISATIONS EMPLOYEUR</FormLabel>
							<FormControl>
								<Input placeholder="578.03" type="number" {...field} />
							</FormControl>
							<FormDescription>Section unité</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Publier</Button>
			</form>
		</Form>
	);
};

export default PaystubForm;
