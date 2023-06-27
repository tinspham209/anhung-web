"use client";

import {
	CoreValue,
	CustomerSays,
	Hero,
	Highlight,
	Member,
	Outcome,
	TypicalCustomers,
	TypicalProjects,
	WorkingProcess,
} from "@/components/home";

import ClientOnly from "@/components/providers/clientOnly";
import { Box } from "@mui/material";

export default function Home() {
	return (
		<ClientOnly>
			<Box component="main">
				<Hero />
				<Member />
				<Highlight />
				<Outcome />
				<CoreValue />
				<WorkingProcess />
				<TypicalProjects />
				<TypicalCustomers />
				<CustomerSays />
			</Box>
		</ClientOnly>
	);
}
