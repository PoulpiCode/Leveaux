import { gericoResponse } from "@/lib/utils";
import { employee, client } from "@gerico/database/";

export async function GET(
	request: Request,
	{ params }: { params: { employee_uuid: string } },
) {
	const { employee_uuid } = params;
	const employeeInfo = await employee.getEmployee(client, {
		idEmployee: employee_uuid,
	});

	if (!employeeInfo)
		return gericoResponse(
			{ status: "Error", data: "Employee doesn't exist." },
			{ status: 404 },
		);

	return gericoResponse(
		{ status: "Success", data: employeeInfo },
		{ status: 200 },
	);
}
