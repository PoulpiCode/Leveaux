"use server";
export async function getJobs() {
	return await (await fetch("/api/jobs/")).json();
}
