"use client";

import { Hero } from "@/components/common";
import { Profile } from "@/components/gioi-thieu";
import ClientOnly from "@/components/providers/clientOnly";
import { Box } from "@mui/material";

export default function ProfileCtn() {
	return (
		<ClientOnly>
			<Box component={"main"}>
				<Hero
					bgImg="/img/member-1.webp"
					title="Giới thiệu"
					description="Công ty Cổ phần Đầu tư Xây dựng Kiến trúc An Hưng được thành lập ngày 19/12/2016, là một doanh nghiệp trẻ, hoạt động chính trong ngành xây dựng hạ tầng giao thông, dân dụng, công nghiệp, dịch vụ bảo dưỡng, bảo trì đường cao tốc và cảnh quan đô thị."
				/>

				<Profile />
			</Box>
		</ClientOnly>
	);
}
