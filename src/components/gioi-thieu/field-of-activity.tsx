import { COLOR_CODE } from "@/theme";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
interface FieldOfActivityProps {}

export const INFO_ID_ELEMENT = "field-of-activity";

const options = [
	{
		title: `Thi công Dân dụng và Công nghiệp`,
		img: `/img/gioi-thieu/field-of-activity/1.png`,
	},

	{
		title: `Thi công Hạ tầng Giao thông`,
		img: `/img/gioi-thieu/field-of-activity/2.png`,
	},
	{
		title: `Thi công Ốp lát Đá`,
		img: `/img/gioi-thieu/field-of-activity/3.png`,
	},
	{
		title: `Thi công Hệ thống Thông tin Viễn thông`,
		img: `/img/gioi-thieu/field-of-activity/4.png`,
	},
	{
		title: `Thi công Bảo dưỡng Sửa chữa`,
		img: `/img/gioi-thieu/field-of-activity/5.png`,
	},
];

const FieldOfActivity = ({}: FieldOfActivityProps) => {
	return (
		<Box component={"section"} bgcolor={COLOR_CODE.PRIMARY} py={8}>
			<Typography
				variant="h3"
				fontWeight={"bold"}
				color={"secondary.main"}
				textAlign={"center"}
				mb={4}
			>
				Lĩnh vực Hoạt động
			</Typography>
			<Container>
				<Grid container spacing={3} justifyContent={"center"}>
					{options.map((item, index) => (
						<Grid item xs={12} md={4} key={`${item.title}-${index}`}>
							<Box
								sx={{
									position: "relative",
									width: "100%",
									height: "248px",
									bgcolor: COLOR_CODE.TEXT_50,
								}}
							>
								<Image
									src={item.img}
									alt={`${index}`}
									fill
									style={{
										objectFit: "cover",
									}}
								/>
							</Box>
							<Typography
								mt={2}
								variant="h6"
								fontWeight={"bold"}
								textAlign={"center"}
								color={"white"}
							>
								{item.title}
							</Typography>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default FieldOfActivity;
