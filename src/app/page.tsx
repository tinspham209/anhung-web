"use client";

import {
	CoreValue,
	Hero,
	Highlight,
	Member,
	Outcome,
	WorkingProcess,
	TypicalProjects,
	TypicalCustomers,
	CustomerSays,
} from "@/components/home";

import ClientOnly from "@/components/providers/clientOnly";
import {
	Box,
	Card,
	CardContent,
	Container,
	Divider,
	Typography,
} from "@mui/material";

export default function Home() {
	return (
		<ClientOnly>
			<Hero />
			<Member />
			<Highlight />
			<Outcome />
			<CoreValue />
			<WorkingProcess />
			<TypicalProjects />
			<TypicalCustomers />
			<CustomerSays />
		</ClientOnly>
	);
}
