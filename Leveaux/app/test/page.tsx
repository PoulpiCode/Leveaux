import React from "react";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const About: React.FC = () => {
	return (
		<Card className="container bg-card py-3 px-4 border-0 flex items-center justify-between gap-6 rounded-2xl mt-5">
			<div className="mt-4 flex flex-col gap-10">
				<section>
					<h1>Test</h1>
				</section>
			</div>
		</Card>
	);
};

export default About;
