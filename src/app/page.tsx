"use client";

import ClientOnly from "@/components/providers/clientOnly";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default function Home() {
	return (
		<ClientOnly>
			<Box>
				<Typography
					sx={{
						mb: 2,
					}}
				>
					Hello world
				</Typography>

				<Card>
					<CardContent>
						<Typography>aaaa</Typography>
					</CardContent>
				</Card>
			</Box>
		</ClientOnly>
	);
}
