import { Metadata } from "next";

export const DOMAIN_PRODUCT = "https://anhung.tinspham.dev";

type SafeMetaData = {
	title?: string;
	description?: string;
	url?: string;
};

export const getMetaData = ({
	title = "An Hưng - Công Ty CP Đầu tư Xây Dựng Kiến Trúc An Hưng",
	description = "Công Ty CP Đầu tư Xây Dựng Kiến Trúc An Hưng",
	url = DOMAIN_PRODUCT,
}: SafeMetaData): Metadata => {
	return {
		title: `${title}`,
		description: description,

		twitter: {
			card: "summary_large_image",
			title: `${title}`,
			description: description,
			creator: "@tinspham209",
			images: {
				url: "/cover.webp",
				alt: `${title}`,
			},
		},
		metadataBase: new URL(url),
		openGraph: {
			title: `${title}`,
			description: description,
			url: DOMAIN_PRODUCT,
			images: "/cover.webp",
			siteName: `${title}`,
			type: "website",
			locale: "vi_VN",
		},
		themeColor: "#0B2C59",
	};
};
