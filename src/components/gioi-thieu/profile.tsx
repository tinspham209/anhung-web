import { COLOR_CODE } from "@/theme";
import { Box, Container, Typography } from "@mui/material";
import dynamic from "next/dynamic";
interface ProfileProps {}

const FlipBook = dynamic(() => import("../flipbook"), {
	ssr: false,
});

export const INFO_ID_ELEMENT = "profile";

const Profile = ({}: ProfileProps) => {
	return (
		<Box component={"section"} bgcolor={COLOR_CODE.PRIMARY} py={8}>
			<Typography
				variant="h3"
				fontWeight={"bold"}
				color={"secondary.main"}
				textAlign={"center"}
			>
				An Hưng Profile
			</Typography>
			<Container>
				<FlipBook pdfUrl="/profile.pdf" />
			</Container>
		</Box>
	);
};

export default Profile;
