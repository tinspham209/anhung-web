import { mediaBreakpoint } from "@/theme";
import {
	Box,
	Container,
	Grid,
	Stack,
	Typography,
	useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React from "react";
interface OutcomeProps {}

const CoreValue: React.FC<OutcomeProps> = ({}) => {
	const isTablet = useMediaQuery(mediaBreakpoint.TABLET);
	return (
		<Box component={"section"} bgcolor={"white"} py={8}>
			<Container>
				<Grid
					container
					spacing={{
						xs: 0,
						md: 2,
					}}
					sx={{
						ml: {
							xs: 0,
							md: 8,
						},
					}}
				>
					<Grid item xs={12} md={6}>
						<Stack flexDirection={"column"}>
							<Typography
								variant="h3"
								fontWeight={"bold"}
								color={"primary.main"}
								sx={{
									ml: {
										xs: 0,
										md: -10,
									},
								}}
							>
								Giá trị Cốt lõi
							</Typography>

							<Box mt={3}>
								<Box>
									<Image
										src={`/img/home/core-value/1.png`}
										alt="core-value-1"
										width={"382"}
										height={"248"}
										style={{
											objectFit: "cover",
										}}
										unoptimized
									/>
								</Box>
								<Typography
									mt={2}
									variant="h6"
									fontWeight={"bold"}
									color={"secondary.main"}
								>
									Làm việc nhóm
								</Typography>
								<Typography variant="body1" mt={1} maxWidth={"382px"}>
									Thấu hiểu giá trị làm việc nhóm, cung nhau động viên khích lệ
									nhau vượt qua khó khăn và hướng đến mục tiêu chung.
								</Typography>
							</Box>
							<Box mt={3}>
								<Box>
									<Image
										unoptimized
										src={`/img/home/core-value/2.png`}
										alt="core-value-2"
										width={isTablet ? "382" : "336"}
										height={"248"}
										style={{
											objectFit: "cover",
										}}
									/>
								</Box>
								<Typography
									mt={2}
									variant="h6"
									fontWeight={"bold"}
									color={"secondary.main"}
								>
									Tin cậy
								</Typography>
								<Typography variant="body1" mt={1} maxWidth={"336px"}>
									Là nền tảng để xây dựng mối quan hệ bền chặt dài lâu, là kim
									chỉ nam cho mọi hoạt động của doanh nghiệp.
								</Typography>
							</Box>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						sx={{
							mt: {
								xs: 0,
								md: "-24px",
							},
						}}
					>
						<Stack flexDirection={"column"}>
							<Box
								mt={3}
								ml={{
									xs: 0,
									md: 6,
								}}
							>
								<Box>
									<Image
										unoptimized
										src={`/img/home/core-value/3.png`}
										alt="core-value-3"
										width={isTablet ? "382" : "336"}
										height={"248"}
										style={{
											objectFit: "cover",
										}}
									/>
								</Box>
								<Typography
									mt={2}
									variant="h6"
									fontWeight={"bold"}
									color={"secondary.main"}
								>
									Tôn trọng
								</Typography>
								<Typography variant="body1" mt={1} maxWidth={"336px"}>
									Tôn trọng đối tác, tôn trọng khách hàng, tôn trọng cổ đông và
									nhân viên
								</Typography>
							</Box>

							<Box mt={3}>
								<Box>
									<Image
										unoptimized
										src={`/img/home/core-value/4.png`}
										alt="core-value-4"
										width={"382"}
										height={"248"}
										style={{
											objectFit: "cover",
										}}
									/>
								</Box>
								<Typography
									mt={2}
									variant="h6"
									fontWeight={"bold"}
									color={"secondary.main"}
								>
									An toàn lao động
								</Typography>
								<Typography variant="body1" mt={1} maxWidth={"382px"}>
									Mọi rủi ro tiềm ẩn có thể ngăn chặn được tại dự án. Thực hiện
									an toàn lao động mọi lúc mọi nơi đảm bảo trách nhiệm với cộng
									đồng.
								</Typography>
							</Box>
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default CoreValue;
