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
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { job, user } from "@gerico/database";

const formSchema = z.object({
	lastname: z.string(),
	firstname: z.string(),
	jobId: z.string(),
	role: z.string(),
	socialSecurity: z.string(),
	phoneNumber: z.string().optional(),
	street: z.string(),
	city: z.string(),
	postalCode: z.string(),
	hiringDate: z.coerce.date(),
	currentHourlyPayRate: z.number(),
	currentOvertimePayRate: z.number(),
});

export type NewEmployeeFormSchema = z.infer<typeof formSchema>;

const NewEmployee: React.FC = () => {
	const [jobs, setJobs] = useState<job.GetAllJobsRow[]>([]);
	const [roles, setRoles] = useState<user.GetRolesRow[]>([]);
	useEffect(() => {
		fetch("/api/jobs/").then((res) =>
			res.json().then(({ data }) => setJobs(data)),
		);
	}, [setJobs]);

	useEffect(() => {
		fetch("/api/users/roles/").then((res) =>
			res.json().then(({ data }) => setRoles(data)),
		);
	}, [setRoles]);

	const form = useForm<NewEmployeeFormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			hiringDate: new Date(),
		},
	});

	const jobSub = form.watch("jobId");
	useEffect(() => {
		if (jobSub) {
			const j = jobs.find((_j) => _j.jobName === jobSub);
			const values = form.getValues();
			if (!values.currentHourlyPayRate)
				form.setValue("currentHourlyPayRate", parseFloat(j!.hourSalary));
			if (!values.currentOvertimePayRate)
				form.setValue("currentOvertimePayRate", parseFloat(j!.hourPayIncrease));
		}
	}, [jobSub, form.setValue]);

	async function onSubmit(values: NewEmployeeFormSchema) {
		try {
			values.jobId = jobs
				.find((j) => j.jobName === values.jobId)!
				.jobId.toString();
			console.log(values);
			await fetch("/api/employees/new", {
				method: "POST",
				body: JSON.stringify(values),
			});
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
							name="lastname"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nom de famille</FormLabel>
									<FormControl>
										<Input placeholder="Dupont" type="text" {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="col-span-6">
						<FormField
							control={form.control}
							name="firstname"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Prénom</FormLabel>
									<FormControl>
										<Input placeholder="Jean" type="text" {...field} />
									</FormControl>

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
							name="jobId"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Métier</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Choississez un métier" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{jobs.map((job) => (
												<SelectItem key={job.jobId} value={job.jobName}>
													{job.jobName}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormDescription>Métier de l'employé</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="col-span-6">
						<FormField
							control={form.control}
							name="role"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Rôle</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Choississez un rôle" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{roles.map((role) => (
												<SelectItem key={role.name} value={role.name}>
													{role.name}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormDescription>Le rôle de l'employé</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>

				<FormField
					control={form.control}
					name="socialSecurity"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Numéro de sécurité sociale</FormLabel>
							<FormControl>
								<Input placeholder="144067511301625" type="text" {...field} />
							</FormControl>
							<FormDescription>
								Numéro de sécurité sociale de l'employé
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="phoneNumber"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Numéro de téléphone</FormLabel>
							<FormControl>
								<Input placeholder="0757760112" type="text" {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-4">
						<FormField
							control={form.control}
							name="street"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Rue</FormLabel>
									<FormControl>
										<Input
											placeholder="2 Rue des pigeons"
											type="text"
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="col-span-4">
						<FormField
							control={form.control}
							name="city"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Ville</FormLabel>
									<FormControl>
										<Input placeholder="Amiens" type="text" {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="col-span-4">
						<FormField
							control={form.control}
							name="postalCode"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Code postal</FormLabel>
									<FormControl>
										<Input placeholder="80000" type="text" {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>

				<FormField
					control={form.control}
					name="hiringDate"
					render={({ field }) => (
						<FormItem className="flex flex-col">
							<FormLabel>Date d'embauche</FormLabel>
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

							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-6">
						<FormField
							control={form.control}
							name="currentHourlyPayRate"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Taux horraire</FormLabel>
									<FormControl>
										<Input placeholder="13.49" type="number" {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="col-span-6">
						<FormField
							control={form.control}
							name="currentOvertimePayRate"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Taux heures supplémentaires</FormLabel>
									<FormControl>
										<Input placeholder="1.25" type="number" {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>
				<Button type="submit">Créer</Button>
			</form>
		</Form>
	);
};

export default NewEmployee;
