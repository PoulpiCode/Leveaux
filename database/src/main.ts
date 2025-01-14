import { Pool } from "pg";
import * as job from "./models/job_sql.js";
import * as employee from "./models/employee_sql.js";
import * as user from "./models/user_sql.js";
import * as sheet from "./models/sheet_sql.js";
import * as vacation from "./models/vacation_sql.js";
import * as empToJob from "./models/employee_to_job_sql.js";
import * as auth from "./authentification.js";

export const client = new Pool({
	host: process.env.POSTGRES_HOST,
	port: parseInt(process.env.POSTGRES_PORT ?? "5432"),
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DB,
});

export { job, user, sheet, vacation, empToJob, auth, employee };

// Testing purposes
// (async () => {
// 	let t = await auth.login({
// 		emailAddress: "cedric.mas.83@gmail.com",
// 		password: "Bonsoir",
// 	});
// 	console.log(t);
// 	// t = await login({
// 	// 	emailAddress: "cedric.mas.83@gmail.com",
// 	// 	password: "bonsoir",
// 	// });
// 	// console.log(t);
// 	// t = await login({
// 	// 	emailAddress: "cedric.mas.83@gm.com",
// 	// 	password: "bonsoir",
// 	// });
// 	// console.log(t);
// })();
