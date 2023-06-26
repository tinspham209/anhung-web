import { COLOR_CODE } from "@/theme";
import { Box, Container, Link as MuiLink, Stack } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { ROUTE_LIST } from "./routes";
import { Logo, LogoWhite } from "../icons";

type Props = {};

export function HeaderDesktop({}: Props) {
	const router = useRouter();
	const pathname = usePathname();

	const routeList = React.useMemo(() => {
		return ROUTE_LIST;
	}, []);

	return (
		<Box
			component={"header"}
			py={1}
			sx={{
				position: "fixed",
				top: 0,
				width: "100%",
				zIndex: 99,
				backgroundColor: `${COLOR_CODE.PRIMARY}`,
				borderBottom: `1px solid ${COLOR_CODE.BORDER}`,
				backdropFilter: "blur(20px)",
			}}
		>
			<Container>
				<Stack
					direction="row"
					justifyContent={"space-between"}
					alignItems={"center"}
				>
					<Link href={"/"} passHref>
						<LogoWhite width={"176px"} height={"48px"} />
					</Link>
					<Box>
						{routeList.map((route, index) => (
							<MuiLink
								sx={{
									ml: 2,
									fontWeight: "bold",
									fontSize: 16,
									textTransform: "uppercase",
									color: "white",
									"&:hover": {
										color: "secondary.main",
									},
								}}
								key={`${route.path}-${index}`}
								href={route.path}
								component={Link}
								underline="none"
								className={clsx({ active: pathname === route.path })}
							>
								{route.label}
							</MuiLink>
						))}
					</Box>
				</Stack>
			</Container>
		</Box>
	);
}
