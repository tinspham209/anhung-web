import { COLOR_CODE } from "@/theme";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
interface VisionProps {}

export const INFO_ID_ELEMENT = "vision";

const Vision = ({}: VisionProps) => {
	return (
		<Box component={"section"} bgcolor={COLOR_CODE.PRIMARY} py={8}>
			<Container>
				<Grid
					container
					spacing={{
						xs: 3,
						md: 5,
					}}
				>
					<Grid item xs={12} md={6}>
						<Box
							sx={{
								position: "relative",
								width: "100%",
								height: "300px",
							}}
						>
							<Image
								src={`/img/gioi-thieu/vision/1.webp`}
								alt="vision-1"
								fill
								style={{
									objectFit: "cover",
								}}
							/>
						</Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography
							variant="h3"
							color="secondary.main"
							fontWeight={"bold"}
							mb={{
								xs: 2,
								md: 4,
							}}
						>
							Tầm nhìn
						</Typography>
						<Typography variant="h5" color="white" fontWeight={"bold"}>
							“Từng bước trở thành đơn vị hàng đầu về xây dựng, vững mạnh về tổ
							chức và lớn mạnh về thương hiệu”
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Vision;
