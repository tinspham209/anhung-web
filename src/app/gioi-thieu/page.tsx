"use client";

import { Hero } from "@/components/common";
import {
	FieldOfActivity,
	Introduction,
	Profile,
	TypicalMachinery,
	Vision,
} from "@/components/gioi-thieu";
import { CoreValue, Outcome, TypicalCustomers } from "@/components/home";
import ClientOnly from "@/components/providers/clientOnly";
import { COLOR_CODE } from "@/theme";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";

export default function GioiThieu() {
	return (
		<ClientOnly>
			<Box component={"main"}>
				<Hero
					bgImg="/img/member-1.webp"
					title="Giới thiệu"
					description="Công ty Cổ phần Đầu tư Xây dựng Kiến trúc An Hưng được thành lập ngày 19/12/2016, là một doanh nghiệp trẻ, hoạt động chính trong ngành xây dựng hạ tầng giao thông, dân dụng, công nghiệp, dịch vụ bảo dưỡng, bảo trì đường cao tốc và cảnh quan đô thị."
				/>
				<Introduction />
				<Outcome bgColor={COLOR_CODE.BACKGROUND_DARK} />
				<Vision />
				<CoreValue />
				<FieldOfActivity />
				<TypicalCustomers />
				<TypicalMachinery />
				<Profile />
			</Box>
		</ClientOnly>
	);
}
