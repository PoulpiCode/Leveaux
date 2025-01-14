import { NewEmployeeFormSchema } from "@/app/dashboard/employees/new/page";
import { Characters, generatePassword, gericoResponse } from "@/lib/utils";
import { auth, client, employee, user } from "@gerico/database";

export async function POST(request: Request) {
	const data: NewEmployeeFormSchema & { address: string; userId: string } =
		await request.json();
	data.address = `${data.street};${data.postalCode};${data.city}`;

	let emailAddress =
		`${data.lastname}.${data.firstname}@gerico.fr`.toLowerCase();
	let i = 2;
	while (await user.getUser(client, { emailAddress }))
		emailAddress =
			`${data.lastname}.${data.firstname}${i++}@gerico.fr`.toLowerCase();

	const password = generatePassword(8, [
		Characters.alpha,
		Characters.numbers,
		Characters.symbols,
	]);

	const insertedUser = await auth.register({
		role: data.role,
		password,
		username:
			`${data.lastname[0]}${data.firstname.substring(5)}${data.lastname.substring(5)}`.toLowerCase(),
		emailAddress,
	});

	if (!insertedUser)
		return gericoResponse(
			{
				status: "Error",
				data: "Couldn't create a user from the new Employee.",
			},
			{ status: 406 },
		);

	data.userId = insertedUser.userId;

	const inserted = await employee.insertEmployee(
		client,
		data as unknown as employee.InsertEmployeeArgs,
	);

	if (!inserted)
		return gericoResponse(
			{ status: "Error", data: "Couldn't add the new employee." },
			{ status: 406 },
		);

	return gericoResponse(
		{ status: "Success", data: { ...inserted, ...insertedUser, password } },
		{ status: 201 },
	);
}
