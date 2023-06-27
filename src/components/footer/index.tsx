"use client";

import { COLOR_CODE } from "@/theme";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import {
	Box,
	Container,
	Divider,
	Grid,
	Link as MuiLink,
	Stack,
	Typography,
} from "@mui/material";
import clsx from "clsx";
import { format } from "date-fns";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ROUTE_LIST } from "../header/routes";
import { Logo, LogoWhite } from "../icons";
interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
	const pathname = usePathname();
	return (
		<Box>
			<Divider />
			<Box component={"footer"} bgcolor={COLOR_CODE.PRIMARY} pt={4} pb={3}>
				<Container>
					<Grid container spacing={3}>
						<Grid item xs={12} md={6}>
							<Stack
								flexDirection={"column"}
								justifyContent={"space-between"}
								height="100%"
								pb={2}
							>
								<LogoWhite width="205px" height="56px" />

								<Box
									sx={{
										mt: {
											xs: 3,
											md: 0,
										},
									}}
								>
									{[
										{
											label: `Địa chỉ: Số 24 ngõ 5 ngách 1, tổ 1, Phường La Khê, Quận Hà Đông,Hà Nội`,
										},
										{
											label: `Điện thoại: 024 2214 7788`,
										},
										{
											label: `Email: anhungjsc.@gmail.com`,
										},
									].map((item) => (
										<Typography
											variant="body1"
											key={item.label}
											mb={1}
											color="white"
										>
											{item.label}
										</Typography>
									))}
								</Box>
							</Stack>
						</Grid>
						<Grid item xs={12} md={4}>
							<Stack flexDirection={"column"}>
								{ROUTE_LIST.map((route) => (
									<MuiLink
										sx={{
											color: "white",
											mb: 1,
											fontWeight: "bold",
											fontSize: 16,
											textTransform: "uppercase",
											"&:hover": {
												color: "secondary.main",
											},
										}}
										key={`${route.path}`}
										href={route.path}
										component={Link}
										underline="none"
										className={clsx({ active: pathname === route.path })}
									>
										{route.label}
									</MuiLink>
								))}
							</Stack>
						</Grid>
						<Grid item xs={12} md={2}>
							<Stack
								flexDirection={"row"}
								sx={{
									"& svg": {
										color: "white",
										cursor: "pointer",

										"&:hover": {
											color: COLOR_CODE.SECONDARY,
										},
									},
								}}
							>
								<Facebook
									fontSize="large"
									sx={{
										mr: 2,
									}}
								/>
								<Instagram
									fontSize="large"
									sx={{
										mr: 2,
									}}
								/>
								<YouTube fontSize="large" />
							</Stack>
						</Grid>
					</Grid>
					<Stack
						mt={2}
						flexDirection={"row"}
						justifyContent={{
							xs: "flex-start",
							md: "center",
						}}
					>
						<Typography color="white">
							© Copyright 2016-{format(new Date(), "yyyy")}. Bản quyền nội dung
							thuộc An Hưng.
						</Typography>
					</Stack>
				</Container>
			</Box>
		</Box>
	);
};

export default Footer;
