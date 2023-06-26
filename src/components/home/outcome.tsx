import { COLOR_CODE } from "@/theme";
import { Phone } from "@mui/icons-material";
import {
	Box,
	Container,
	Grid,
	Link as MuiLink,
	Stack,
	Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface OutcomeProps {}

const Outcome: React.FC<OutcomeProps> = ({}) => {
	return (
		<Box
			component={"section"}
			bgcolor={COLOR_CODE.PRIMARY}
			py={{
				xs: 6,
				md: 18,
			}}
		>
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<Stack flexDirection={"column"} maxWidth={"450px"}>
							<Typography
								variant="h3"
								fontWeight={"bold"}
								color={"secondary.main"}
							>
								Tất cả vì những
								<br /> công trình bền đẹp
								<br /> cho tương lai
							</Typography>
							<Typography variant="body1" mt={3} color={COLOR_CODE.WHITE}>
								Trong những năm tới, Công ty Cổ phần Đầu tư Xây dựng Kiến trúc
								An Hưng đặt mục tiêu tăng trưởng và phát triển để trở thành công
								ty hàng đầu trong lĩnh vực xây dựng tại Việt Nam, đảm bảo tổ
								chức hoạt động vững mạnh và thương hiệu ngày càng nổi tiếng trên
								thị trường.
							</Typography>
							<Box>
								<Stack
									flexDirection={"row"}
									mt={3}
									sx={{
										"& svg": {
											color: "white",
										},
									}}
								>
									<Phone fontSize="medium" />
									<MuiLink
										sx={{
											ml: 2,
											fontWeight: "bold",
											fontSize: 16,
											"&:hover": {
												color: "secondary.main",
											},
											color: "white",
										}}
										href={`/lien-he`}
										component={Link}
										underline="none"
										className={``}
									>
										Liên Hệ Chúng Tôi
									</MuiLink>
								</Stack>
							</Box>
						</Stack>
					</Grid>
					<Grid item xs={12} md={6}>
						<Stack
							flexDirection={"row"}
							justifyContent={"center"}
							alignItems={"center"}
							height="100%"
						>
							<Box
								position={"relative"}
								sx={{
									display: {
										xs: "none",
										md: "block",
									},
								}}
							>
								<Box
									sx={{
										position: "absolute",
										left: "-150px",
										bottom: "-102px",
									}}
								>
									<Image
										unoptimized
										src={"/img/home/outcome/1.png"}
										alt="1"
										width={216}
										height={248}
										style={{ objectFit: "cover" }}
									/>
								</Box>
								<Box
									sx={{
										position: "absolute",
										right: "-156px",
										top: "-102px",
									}}
								>
									<Image
										unoptimized
										src={"/img/home/outcome/2.png"}
										alt="2"
										width={216}
										height={248}
										style={{ objectFit: "cover" }}
									/>
								</Box>
								<Box
									sx={{
										position: "relative",
									}}
								>
									<Image
										unoptimized
										src={"/img/home/outcome/3.png"}
										alt="3"
										width={250}
										height={250}
										style={{ objectFit: "cover" }}
									/>
								</Box>
							</Box>
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Outcome;
