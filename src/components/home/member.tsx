import { Box } from "@mui/material";
import React from "react";

import Carousel from "@/components/carousel";
import Image from "next/image";

const options = [
	{
		url: "/img/member-1.webp",
		id: "1",
	},
	{
		url: "/img/member-2.jpg",
		id: "2",
	},
	{
		url: "/img/member-3.webp",
		id: "3",
	},
];

interface MemberProps {}

const Member: React.FC<MemberProps> = ({}) => {
	return (
		<Box component={"section"}>
			<Carousel swipeable={false} isFade>
				{options.map((item, index) => {
					return (
						<Box
							sx={{
								width: "100%",
								height: {
									xs: "40vh",
									md: "80vh",
								},
								position: "relative",
							}}
							key={`${item.id}-${index}`}
						>
							<Image
								unoptimized
								key={item.id}
								src={item.url}
								fill
								style={{
									objectFit: "cover",
								}}
								sizes=""
								alt={`member-carousel-${index}`}
							/>
						</Box>
					);
				})}
			</Carousel>
		</Box>
	);
};

export default Member;
