import { user, auth } from "@gerico/database";
import { gericoResponse } from "@/lib/utils";

export async function POST(request: Request) {
	try {
		const data: user.GetUserArgs & { password: string } = await request.json();
		console.log(process.env);

		if (!(data.emailAddress && data.password))
			return gericoResponse(
				{ status: "Error", data: "No password or email were provided." },
				{ status: 400 },
			);

		const token = await auth.login(data);

		return gericoResponse(
			{ status: "Success", data: token },
			{
				status: 200,
			},
		);
	} catch (error) {
		return gericoResponse({ status: "Error", data: error }, { status: 400 });
	}
}
