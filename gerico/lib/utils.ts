import { clsx, type ClassValue } from "clsx";
import { NextResponse } from "next/server";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export interface GericoResponseBody {
	status: "Success" | "Error";
	data: any;
}

export function gericoResponse(body: GericoResponseBody, init?: ResponseInit) {
	return NextResponse.json(body, init);
}

export enum Characters {
	alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
	numbers = "0123456789",
	symbols = "!@#$%^&*_-+=",
}

export function generatePassword(
	length: number,
	characters: Characters | Characters[],
) {
	const _char = Array.isArray(characters) ? characters.join() : characters;
	let password = "";
	for (let i = 0; i < length; i++) {
		password += _char.charAt(Math.floor(Math.random() * characters.length));
	}
	return password;
}
