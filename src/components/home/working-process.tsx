import { COLOR_CODE } from "@/theme";
import { isOdd } from "@/utils";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
interface OutcomeProps {}

const WorkingProcess: React.FC<OutcomeProps> = ({}) => {
	return (
		<Box
			component={"section"}
			bgcolor={COLOR_CODE.TEXT_50}
			py={{
				xs: 6,
				md: 8,
			}}
		>
			<Container>
				<Typography
					variant="h3"
					fontWeight={"bold"}
					color={"primary.main"}
					mb={6}
				>
					Quy trình làm việc
				</Typography>
				<Stack
					flexDirection={"row"}
					flexWrap={"wrap"}
					gap={{
						xs: 3,
						md: 4,
					}}
				>
					{[
						{
							img: "/img/home/working-process/1.png",
							description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
						},
						{
							img: "/img/home/working-process/2.png",
							description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
						},
						{
							img: "/img/home/working-process/3.png",
							description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
						},
						{
							img: "/img/home/working-process/4.png",
							description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
						},
						{
							img: "/img/home/working-process/5.png",
							description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
						},
					].map((item, index) => {
						return (
							<Stack
								key={index}
								flexDirection={{
									xs: "column",
									md: "row",
								}}
								flexBasis={{
									xs: "auto",
									md: "calc(50% - 32px)",
								}}
								mb={{
									xs: 4,
									md: 0,
								}}
								mt={{
									xs: 0,
									md: isOdd(index) ? 16 : 0,
								}}
							>
								<Stack
									flexDirection={"row"}
									justifyContent={{
										xs: "center",
										md: "flex-start",
									}}
								>
									<Image
										unoptimized
										src={item.img}
										alt={`working-process-${index + 1}`}
										width={248}
										height={248}
									/>
								</Stack>

								<Box
									ml={{
										xs: 0,
										md: 2,
									}}
									mt={{
										xs: 2,
										md: isOdd(index) ? "auto" : "164px",
									}}
								>
									<Typography
										variant="h6"
										fontWeight={"bold"}
										color="secondary.main"
										textAlign={{
											xs: "center",
											md: "start",
										}}
									>
										Bước {index + 1}
									</Typography>
									<Typography variant="body1">{item.description}</Typography>
								</Box>
							</Stack>
						);
					})}
				</Stack>
			</Container>
		</Box>
	);
};

export default WorkingProcess;
