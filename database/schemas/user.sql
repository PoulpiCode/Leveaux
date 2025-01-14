CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TYPE Role AS ENUM ('Employee', 'Admin');

CREATE TABLE IF NOT EXISTS "User" (
	user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	email_address VARCHAR(100) NOT NULL UNIQUE,
	username VARCHAR(50) NOT NULL UNIQUE,
	password TEXT NOT NULL,
	role Role NOT NULL DEFAULT 'Employee',
	last_connected TIMESTAMP,
	account_created TIMESTAMP DEFAULT NOW()
);
