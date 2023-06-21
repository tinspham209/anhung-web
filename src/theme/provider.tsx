"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
	createTheme,
	responsiveFontSizes,
	ThemeOptions,
	ThemeProvider,
} from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { red } from "@mui/material/colors";
import { COLOR_CODE } from ".";

export const roboto = Roboto({
	weight: ["300", "400", "500", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
});

const themeOptions: ThemeOptions = {
	typography: {
		fontSize: 12,
		fontFamily: roboto.style.fontFamily,
	},
	palette: {
		primary: {
			main: COLOR_CODE.PRIMARY,
		},
		secondary: {
			main: COLOR_CODE.SECONDARY,
		},
		error: {
			main: red.A400,
		},
	},
	components: {
		MuiContainer: {
			defaultProps: {
				maxWidth: "lg",
			},
		},
		MuiLink: {
			defaultProps: {
				underline: "hover",
			},
			styleOverrides: {
				root: {
					color: "inherit",

					"&:hover, &.active": {
						color: COLOR_CODE.PRIMARY,
					},
				},
			},
		},
		MuiDrawer: {
			defaultProps: {
				PaperProps: {
					style: {
						backgroundColor: COLOR_CODE.BACKGROUND,
					},
				},
			},
		},
	},
};

let theme = createTheme(themeOptions);

theme = responsiveFontSizes(theme);

export default function AppThemeProvider(props: { children: React.ReactNode }) {
	const { children } = props;
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}
