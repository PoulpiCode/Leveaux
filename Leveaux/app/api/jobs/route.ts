import { gericoResponse } from "@/lib/utils";
import { client, job } from "@gerico/database";

export async function GET(_: Request) {
	const jobs = await job.getAllJobs(client);

	return gericoResponse({ status: "Success", data: jobs }, { status: 200 });
}
