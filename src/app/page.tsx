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
