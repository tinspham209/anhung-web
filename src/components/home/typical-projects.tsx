import Houses from "@/components/house";
import { mediaBreakpoint } from "@/theme";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
interface TypicalProjectsProps {}

const projects = [
	{
		img: "/img/home/typical-projects/1.jpg",
		url: "/du-an/1",
		title: "M’s House – Vẻ đẹp tinh tế và sang trọng của nhà phố hiện đại",
		description:
			"Vẻ đẹp trong kiến trúc hiện đại M’s House được gói gọn trong những đường nét, kiểu dáng thiết kế, vật liệu và nội thất trang trí. Sự giản...",
	},
	{
		img: "/img/home/typical-projects/2.jpg",
		url: "/du-an/2",
		title: "Nhà là nơi khởi nguồn hạnh phúc",
		description:
			"L’s House là một trong những công trình thực tế được An Hưng hoàn thiện vào đầu năm 2023. Căn nhà có 4 tầng 1 tum, kết hợp 2...",
	},
	{
		img: "/img/home/typical-projects/3.jpg",
		url: "/du-an/3",
		title:
			"H’s House – Bản hòa ca giữa Hiện đại và Tân cổ điển – Công trình thực tế",
		description:
			"Với mong muốn mang đến cho khách hàng không gian sống hoàn mỹ nhất, An Hưng không chỉ dừng lại ở việc thiết kế mà còn hỗ trợ khách...",
	},
];

const TypicalProjects: React.FC<TypicalProjectsProps> = ({}) => {
	const isTablet = useMediaQuery(mediaBreakpoint.TABLET);
	return (
		<Box component={"section"} bgcolor={"white"} py={8}>
			<Container>
				<Typography
					variant="h3"
					fontWeight={"bold"}
					color={"primary.main"}
					textAlign={"center"}
					mb={4}
				>
					Công Trình Tiêu Biểu
				</Typography>
				<Houses projects={projects} />
			</Container>
		</Box>
	);
};

export default TypicalProjects;
