import { client, user } from "./main.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY;
const EXPIRE_TIME = "1h";

export async function login(u: user.GetUserArgs & { password: string }) {
	if (!SECRET_KEY) throw new Error("Secret key is not defined");
	await client.connect();
	const _user = await user.getUser(client, u);

	if (!user) throw new Error("The email address given doesn't exist.");
	if (!(await bcrypt.compare(u.password, _user!.password)))
		throw new Error("The password given is incorrect.");

	const token = jwt.sign(
		{ userId: _user!.userId, username: _user!.username },
		SECRET_KEY,
		{
			expiresIn: EXPIRE_TIME,
		},
	);

	return token;
}

export async function register(u: user.InsertUserArgs) {
	await client.connect();
	const salt = await bcrypt.genSalt(10);
	u.password = await bcrypt.hash(u.password, salt);
	const _user = await user.insertUser(client, u);
	return _user;
}

export async function verify(token: string) {
	if (!SECRET_KEY) throw new Error("Secret key is not defined");
	jwt.verify(token, SECRET_KEY, (err, decoded) => {
		if (err) throw new Error(err.message);
	});
}
