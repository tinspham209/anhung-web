"use client";

import { COLOR_CODE } from "@/theme";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const options = [
	{
		img: "/img/home/customer-says/1.png",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		personName: "Anh Nguyễn Văn A",
		personTitle: "CEO, Techcombank",
	},
	{
		img: "/img/home/customer-says/2.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		personName: "Anh Phan Mạnh B",
		personTitle: "CEO, MBBank",
	},
];

interface CustomerSaysProps {}

const CustomerSays: React.FC<CustomerSaysProps> = ({}) => {
	const [current, setCurrent] = React.useState(0);

	const handleChangeCurrent = React.useCallback((index: number) => {
		setCurrent(index);
	}, []);

	return (
		<Box component={"section"} bgcolor={"white"} py={8}>
			<Container maxWidth="md">
				<Typography
					variant="h3"
					fontWeight={"bold"}
					color={"primary.main"}
					textAlign={"center"}
					mb={4}
				>
					Khách Hàng nói gì về An Hưng?
				</Typography>

				<AutoPlaySwipeableViews
					index={current}
					onChangeIndex={handleChangeCurrent}
				>
					{options.map((item, index) => (
						<Grid
							container
							spacing={2}
							key={`${item.description}-${item.personName}-${index}`}
						>
							<Grid item xs={12} sm={6}>
								<Box
									sx={{
										width: "100%",
										height: {
											xs: "300px",
											md: "380px",
										},
										position: "relative",
									}}
								>
									<Image
										unoptimized
										src={item.img}
										fill
										style={{
											objectFit: "contain",
										}}
										sizes=""
										alt={`customer-say-${index + 1}`}
									/>
								</Box>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Stack
									height={"100%"}
									flexDirection={"column"}
									justifyContent={"center"}
								>
									<Box>
										<Typography variant="body1" mb={3}>
											{item.description}
										</Typography>
										<Typography variant="h6" mb={1} color="secondary.main">
											{item.personName}
										</Typography>
										<Typography variant="body1">{item.personTitle}</Typography>
									</Box>
								</Stack>
							</Grid>
						</Grid>
					))}
				</AutoPlaySwipeableViews>

				<Stack flexDirection={"row"} justifyContent={"center"}>
					{Array.from({ length: options.length }).map((item, index) => (
						<Box
							key={index}
							sx={{
								mt: 3,
								width: 12,
								height: 12,
								border: `1px solid ${COLOR_CODE.TEXT_600}`,
								borderRadius: "50%",
								mr: 1,
								backgroundColor:
									index === current ? COLOR_CODE.TEXT_600 : "transparent",
								cursor: "pointer",
							}}
							onClick={() => {
								setCurrent(index);
							}}
						/>
					))}
				</Stack>
			</Container>
		</Box>
	);
};

export default CustomerSays;
