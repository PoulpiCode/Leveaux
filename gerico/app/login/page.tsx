"use client";
import React, { useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState();

	const submit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsPending(true);
		try {
			const res = await fetch("/api/users/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ emailAddress, password }),
			});

			const data = await res.json();
			console.log(data);
		} catch (e) {
			console.log(e);
			// setError(e)
		}
		setIsPending(false);
	};

	return (
		<>
			{isPending ? "Loading" : ""}
			<form
				onSubmit={submit}
				className="w-full h-screen flex items-center justify-center"
			>
				<Card className="w-1/2">
					<div className="relative flex flex-col items-center overflow-hidden pb-2 pt-14">
						<img src="/logo.png" alt="logo" className="mb-4 h-16 w-auto" />
					</div>
					<CardHeader className="text-center">
						<CardTitle>Connexion</CardTitle>
						<CardDescription>
							Entrez votre adresse email et votre mot de passe
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
							<Label htmlFor="email" className="text-center w-full">
								Email
							</Label>
							<Input
								type="email"
								name="emailAddress"
								id="email"
								placeholder="Email"
								value={emailAddress}
								onChange={(e) => setEmailAddress(e.currentTarget.value)}
								required
								className="text-center"
							/>
						</div>
						<br />
						<div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
							<Label htmlFor="password" className="text-center w-full">
								Mot de passe
							</Label>
							<Input
								type="password"
								name="password"
								id="password"
								placeholder="Enter your password"
								value={password}
								onChange={(e) => setPassword(e.currentTarget.value)}
								required
								className="text-center"
							/>
						</div>
					</CardContent>
					<CardFooter className="flex flex-col gap-4">
						<Button type="submit" size="connexion_size">
							Se connecter
						</Button>
						<p className="text-center">
							Pas de compte ? <a href="/register">Créer en un</a>{" "}
						</p>
					</CardFooter>
				</Card>
			</form>
			<div className="mx-auto mt-3 flex justify-center gap-1 text-sm text-muted-foreground">
				<a href="/register" className="font-medium text-primary">
					Sign up
				</a>
				<span> - </span>
				<a href="/reset-password" className="font-medium text-primary">
					Reset Password
				</a>
			</div>
		</>
	);
}
