import { Logo, LogoOnly, LogoWhite } from "@/components/icons";
import { COLOR_CODE } from "@/theme";
import MenuIcon from "@mui/icons-material/Menu";
import {
	Box,
	Container,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	Link as MuiLink,
	Stack,
} from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { ROUTE_LIST } from "./routes";
import { useRouter, usePathname } from "next/navigation";
type Props = {};

export function HeaderMobile({}: Props) {
	const [open, setOpen] = React.useState(false);
	const router = useRouter();
	const pathname = usePathname();

	const [isLoading, setIsLoading] = React.useState(false);

	const routeList = React.useMemo(() => {
		return ROUTE_LIST;
	}, []);

	const toggleDrawer =
		(open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === "keydown" &&
				((event as React.KeyboardEvent).key === "Tab" ||
					(event as React.KeyboardEvent).key === "Shift")
			) {
				return;
			}
			setOpen(open);
		};

	return (
		<Box
			component={"header"}
			py={1}
			sx={{
				position: "fixed",
				top: 0,
				width: "100%",
				backgroundColor: COLOR_CODE.PRIMARY,
				zIndex: 99,
				borderBottom: `1px solid ${COLOR_CODE.BORDER}`,
				backdropFilter: "blur(20px)",
			}}
		>
			<Container maxWidth="xs">
				<Stack
					direction="row"
					justifyContent={"space-between"}
					alignItems="center"
				>
					<Link href={"/"} passHref>
						<LogoWhite width="132px" height="36px" />
					</Link>
					<IconButton
						onClick={toggleDrawer(true)}
						onKeyDown={toggleDrawer(true)}
						sx={{
							"& svg": {
								color: COLOR_CODE.WHITE,
							},
						}}
					>
						<MenuIcon />
					</IconButton>
				</Stack>
				<Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
					<List
						sx={{
							minWidth: "180px",
						}}
					>
						{routeList.map((route) => (
							<ListItem
								key={route.path}
								onClick={toggleDrawer(false)}
								disableGutters
							>
								<ListItemButton
									sx={{
										justifyContent: "center",
									}}
									selected={pathname === route.path}
								>
									<MuiLink
										sx={{
											fontWeight: "bold",
											textTransform: "uppercase",
											color: "white",
										}}
										underline="hover"
										className={clsx({
											active: pathname === route.path,
										})}
										href={route.path}
										component={Link}
									>
										{route.label}
									</MuiLink>
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Drawer>
			</Container>
		</Box>
	);
}
