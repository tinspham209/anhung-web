"use client";

import ClientOnly from "@/components/providers/clientOnly";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default function GioiThieu() {
	return (
		<ClientOnly>
			<Box>
				<Typography
					sx={{
						mb: 2,
					}}
					variant="h1"
				>
					Giới Thiệu
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
