import { Box, Container, useMediaQuery } from "@mui/material";
import React from "react";

import Carousel from "@/components/carousel";
import { mediaBreakpoint } from "@/theme";
import Image from "next/image";

const options = [
	{
		url: "/img/home/highlight/1.png",
		id: "1",
	},
	{
		url: "/img/home/highlight/2.png",
		id: "2",
	},
	{
		url: "/img/home/highlight/3.png",
		id: "3",
	},
];

interface HighlightProps {}

const Highlight: React.FC<HighlightProps> = ({}) => {
	const isMobile = useMediaQuery(mediaBreakpoint.TABLET);
	return (
		<Box
			component={"section"}
			my={10}
			sx={{
				"& .carousel": {
					overflowY: "clip",

					"& .control-dots": {
						zIndex: 1,

						"& .dot": {
							border: "1px solid #4C545E",
							width: "12px !important",
							height: "12px !important",
						},
					},
				},
			}}
		>
			<Container>
				<Carousel
					centerSlidePercentage={isMobile ? 80 : 33.3}
					showIndicators
					swipeable={false}
				>
					{options.map((item, index) => {
						return (
							<Box
								sx={{
									width: "100%",
									height: {
										xs: "300px",
										md: "380px",
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
										objectFit: "contain",
									}}
									sizes=""
									alt={`Highlight-carousel-${index}`}
								/>
							</Box>
						);
					})}
				</Carousel>
			</Container>
		</Box>
	);
};

export default Highlight;
