import { gericoResponse } from "@/lib/utils";
import { client, user } from "@gerico/database";

export async function GET() {
	const roles = await user.getRoles(client);

	return gericoResponse({ status: "Success", data: roles }, { status: 200 });
}
