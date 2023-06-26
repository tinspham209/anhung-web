import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
interface HeroProps {}

export const INFO_ID_ELEMENT = "hero";

const Hero: React.FC<HeroProps> = ({}) => {
	return (
		<Box
			component={"section"}
			sx={{
				minHeight: "85vh",
				position: "relative",
				"&:before": {
					content: '""',
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					zIndex: "-1",
					backgroundImage: `url(/img/hero.webp)`,

					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",

					backgroundColor: "rgba(0,0,0,0.5)",
					backgroundAttachment: "fixed",
				},
			}}
		>
			<Container>
				<Stack
					flexDirection={{
						xs: "column",
						md: "row",
					}}
					pt={{
						xs: 12,
						md: 14,
					}}
					justifyContent={"space-between"}
				>
					<Box />
					<Stack maxWidth={"550px"}>
						<Typography
							variant="h2"
							textAlign={"end"}
							fontWeight={"bold"}
							color="secondary.main"
						>
							Trụ cột nâng bước,
							<br />
							vững tương lai.
						</Typography>
						<Typography variant="h6" mt={3} textAlign={"end"} color="white">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</Typography>
						<Box>
							<Stack flexDirection={"row"} justifyContent={"flex-end"}>
								<Button
									sx={{
										mt: 3,
									}}
									variant="contained"
									fullWidth={false}
								>
									Tìm hiểu thêm
								</Button>
							</Stack>
						</Box>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};

export default Hero;
