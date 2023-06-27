import { COLOR_CODE } from "@/theme";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
interface IntroductionProps {}

export const INFO_ID_ELEMENT = "introduction";

const Introduction = ({}: IntroductionProps) => {
	return (
		<Box component={"section"} bgcolor={COLOR_CODE.PRIMARY} py={6}>
			<Container>
				<Box>
					<Grid
						container
						spacing={{
							xs: 3,
							md: 5,
						}}
					>
						<Grid item xs={12} md={4}>
							<Typography variant="h6" color="white">
								Được áp dụng mô hình quản lý tiên tiến, cùng đội ngũ cán bộ công
								nhân viên trẻ, năng động được đào tạo bài bản qua các trường lớp
								và được trải nghiệm qua các dự án, An Hưng đang dần khẳng định
								tên tuổi và vị thế của mình với khách hàng, chủ đầu tư, nhà tư
								vấn trong và ngoài nước.
							</Typography>
						</Grid>
						<Grid item xs={12} md={8}>
							<Box
								sx={{
									position: "relative",
									height: "300px",
									width: "100%",
									bgcolor: COLOR_CODE.TEXT_50,
								}}
							>
								<Image src={``} alt="" fill />
							</Box>
						</Grid>
					</Grid>
				</Box>
				<Box mt={5}>
					<Grid
						container
						flexDirection={{
							xs: "column-reverse",
							md: "row",
						}}
						spacing={{
							xs: 3,
							md: 5,
						}}
					>
						<Grid item xs={12} md={6}>
							<Box
								sx={{
									position: "relative",
									height: {
										xs: "300px",
										md: "480px",
									},
									width: "100%",
									bgcolor: COLOR_CODE.TEXT_50,
								}}
							>
								<Image src={``} alt="" fill />
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Typography
								variant="h3"
								color="secondary.main"
								fontWeight={"bold"}
								mb={{
									xs: 3,
									md: 5,
								}}
							>
								“Sự hài lòng của khách hàng là sứ mệnh của chúng tôi”
							</Typography>
							<Typography variant="h6" color="white">
								Công ty An Hưng vẫn không ngừng nỗ lực, cải tiến, xây dựng và
								phát triển đội ngũ nhân sự ngày càng giỏi về chuyên môn, vững
								vàng về phẩm chất, có đầy đủ năng lực quản lý để mang đến khách
								hàng những sản phẩm dịch vụ tốt nhất. Đến với Công ty chúng tôi,
								Quý khách hàng không chỉ yên tâm về chất lượng của sản phẩm mà
								còn cảm nhận sự chân thành, tin cậy.
							</Typography>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};

export default Introduction;
