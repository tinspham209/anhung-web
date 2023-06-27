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
		img: "/img/gioi-thieu/typical-machinery/1.webp",
		title: "Hệ thống giàn giáo thi công",
		unit: "cái",
		quantity: "3000",
		description: "",
	},
	{
		img: "/img/gioi-thieu/typical-machinery/1.webp",
		title: "Ván khuôn",
		unit: "m2",
		quantity: "5000",
		description: "",
	},
	{
		img: "/img/gioi-thieu/typical-machinery/1.webp",
		title: "Máy cắt đá tự động CNC KETE KTY1",
		unit: "cái",
		quantity: "01",
		description: "",
	},
	{
		img: "/img/gioi-thieu/typical-machinery/1.webp",
		title: "Máy phát điện ",
		unit: "cái",
		quantity: "03",
		description: "",
	},
	{
		img: "/img/gioi-thieu/typical-machinery/1.webp",
		title: "Máy toàn đạc",
		unit: "bộ",
		quantity: "02",
		description: "",
	},
	{
		img: "/img/gioi-thieu/typical-machinery/1.webp",
		title: "Máy thủy bình",
		unit: "bộ",
		quantity: "03",
		description: "",
	},
	{
		img: "/img/gioi-thieu/typical-machinery/1.webp",
		title: "Máy định vị GPS",
		unit: "bộ",
		quantity: "05",
		description: "",
	},
	{
		img: "/img/gioi-thieu/typical-machinery/1.webp",
		title: "Xe hút bụi",
		unit: "cái",
		quantity: "01",
		description: "",
	},
];

interface TypicalMachineryProps {}

const TypicalMachinery: React.FC<TypicalMachineryProps> = ({}) => {
	const [current, setCurrent] = React.useState(0);

	const handleChangeCurrent = React.useCallback((index: number) => {
		setCurrent(index);
	}, []);

	return (
		<Box component={"section"} bgcolor={COLOR_CODE.BACKGROUND_DARK} py={8}>
			<Container maxWidth="md">
				<Typography
					variant="h3"
					fontWeight={"bold"}
					color={"secondary.main"}
					textAlign={"center"}
					mb={4}
				>
					Máy móc Tiêu biểu
				</Typography>

				<AutoPlaySwipeableViews
					index={current}
					onChangeIndex={handleChangeCurrent}
				>
					{options.map((item, index) => (
						<Grid container spacing={2} key={`${item.title}-${index}`}>
							<Grid item xs={12} sm={6}>
								<Box
									sx={{
										width: "100%",
										height: {
											xs: "300px",
											md: "380px",
										},
										backgroundColor: COLOR_CODE.TEXT_50,
										position: "relative",
										mr: 1,
									}}
								>
									<Image
										unoptimized
										src={item.img}
										fill
										style={{
											objectFit: "cover",
										}}
										sizes=""
										alt={`typical-machinery-${index + 1}`}
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
										<Typography
											variant="h5"
											mb={1}
											color="secondary.main"
											fontWeight={"bold"}
										>
											{item.title}
										</Typography>
										<Typography variant="h6" mb={3} color="white">
											Số lượng: {item.quantity} ({item.unit})
										</Typography>
										<Typography variant="body1" color="white">
											{item.description ||
												"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
										</Typography>
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

export default TypicalMachinery;
