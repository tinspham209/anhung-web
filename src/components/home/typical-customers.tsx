"use client";

import { COLOR_CODE, mediaBreakpoint } from "@/theme";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";

interface TypicalCustomersProps {}

const options = [
	{
		img: "/img/home/typical-customers/mbbank.png",
	},
	{
		img: "/img/home/typical-customers/abbank.png",
	},
	{
		img: "/img/home/typical-customers/hdbank.png",
	},
	{
		img: "/img/home/typical-customers/nitto.png",
	},
	{
		img: "/img/home/typical-customers/keangnam.png",
	},
	{
		img: "/img/home/typical-customers/techcombank.png",
	},
	{
		img: "/img/home/typical-customers/vingroup.png",
	},
	{
		img: "/img/home/typical-customers/ecopark.png",
	},
	{
		img: "/img/home/typical-customers/posco.png",
	},
	{
		img: "/img/home/typical-customers/vinaconex.png",
	},
	{
		img: "/img/home/typical-customers/hyundai.png",
	},
	{
		img: "/img/home/typical-customers/bodoibienphong.png",
	},
	{
		img: "/img/home/typical-customers/truongson.png",
	},
	{
		img: "/img/home/typical-customers/hoabinh.png",
	},
	{
		img: "/img/home/typical-customers/flcgroup.png",
	},
	{
		img: "/img/home/typical-customers/evn.png",
	},
];

const TypicalCustomers: React.FC<TypicalCustomersProps> = ({}) => {
	const isTablet = useMediaQuery(mediaBreakpoint.TABLET);
	return (
		<Box component={"section"} bgcolor={COLOR_CODE.TEXT_50} py={8}>
			<Container>
				<Typography
					variant="h3"
					fontWeight={"bold"}
					color={"secondary.main"}
					textAlign={"center"}
					mb={4}
				>
					Khách Hàng Tiêu Biển
				</Typography>

				<Grid container spacing={6}>
					{options.map((item, index) => (
						<Grid key={index} item xs={4} md={2}>
							<Box
								sx={{
									position: "relative",
									"&::before": {
										content: '""',
										display: "block",
										position: "relative",
										paddingTop: "56%",
									},
								}}
							>
								<Box
									sx={{
										position: "absolute",
										top: 0,
										left: 0,
										right: 0,
										bottom: 0,
										backgroundImage: `url(${item.img})`,
										backgroundRepeat: "no-repeat",
										backgroundPosition: "50%",
										backgroundSize: "contain",
										zIndex: 1,
										borderRadius: "8px 8px 0 0",
									}}
								/>
							</Box>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default TypicalCustomers;
