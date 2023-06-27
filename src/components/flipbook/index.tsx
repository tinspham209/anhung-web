"use client";

import { COLOR_CODE, mediaBreakpoint } from "@/theme";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, IconButton, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf/dist/esm";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

const pdfUrl = `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = pdfUrl;

interface FlipBookProps {
	pdfUrl?: string;
}

const FlipBookCtn: React.FC<FlipBookProps> = ({ pdfUrl }) => {
	const flipbookRef = React.useRef(null);
	const [numPages, setNumPages] = React.useState(0);
	const [pageNumber, setPageNumber] = React.useState(0);
	const isTablet = useMediaQuery(mediaBreakpoint.TABLET);
	const isMobile = useMediaQuery(mediaBreakpoint.MOBILE);

	const onDocumentLoadSuccess = ({ numPages }: any) => {
		setNumPages(numPages);
	};

	const pagesList = React.useCallback(() => {
		var pages = [];
		for (var i = 1; i <= numPages; i++) {
			pages.push(
				<div>
					<Page width={isMobile ? 360 : isTablet ? 600 : 960} pageNumber={i} />
				</div>
			);
		}
		return pages;
	}, [isMobile, isTablet, numPages]);

	const onNextPage = () => {
		if (flipbookRef) {
			const _flipbookRef: any = flipbookRef;

			_flipbookRef?.current?.pageFlip()?.flipNext();
		}
	};
	const onPrevPage = () => {
		if (flipbookRef) {
			const _flipbookRef: any = flipbookRef;

			_flipbookRef?.current?.pageFlip()?.flipPrev();
		}
	};

	return (
		<Box
			sx={{
				mt: {
					xs: 2,
					sm: 2,
					md: -2,
				},
				position: "relative",
				overflow: "hidden",
			}}
		>
			<Document
				file={pdfUrl}
				onLoadSuccess={onDocumentLoadSuccess}
				className={``}
			>
				{/* @ts-ignore */}
				<HTMLFlipBook
					startPage={0}
					width={isMobile ? 360 : isTablet ? 600 : 960}
					height={isMobile ? 254 : isTablet ? 424 : 678}
					flippingTime={500}
					drawShadow={true}
					ref={flipbookRef}
					swipeDistance={1}
				>
					{pagesList().map((Page, index) => (
						<div key={index}>{Page}</div>
					))}
				</HTMLFlipBook>
			</Document>

			<Stack
				flexDirection={"row"}
				alignItems={"center"}
				mt={{
					xs: 2,
					sm: 0,
					md: -6,
				}}
				justifyContent={"center"}
			>
				<IconButton
					onClick={() => {
						onPrevPage();
					}}
					sx={{
						"& svg": {
							color: COLOR_CODE.SECONDARY,
						},
					}}
				>
					<ArrowBack fontSize="large" />
				</IconButton>

				<IconButton
					onClick={() => {
						onNextPage();
					}}
					sx={{
						"& svg": {
							color: COLOR_CODE.SECONDARY,
						},
					}}
				>
					<ArrowForward fontSize="large" />
				</IconButton>
			</Stack>

			<IconButton
				onClick={() => {
					onPrevPage();
				}}
				sx={{
					"& svg": {
						color: COLOR_CODE.SECONDARY,
					},
					position: "absolute",
					left: 0,
					top: {
						xs: "30%",
						md: "50%",
					},
					display: {
						xs: "none",
						md: "block",
					},
				}}
			>
				<ArrowBack fontSize="large" />
			</IconButton>

			<IconButton
				onClick={() => {
					onNextPage();
				}}
				sx={{
					"& svg": {
						color: COLOR_CODE.SECONDARY,
					},
					position: "absolute",
					right: 0,
					top: {
						xs: "30%",
						md: "50%",
					},
					display: {
						xs: "none",
						md: "block",
					},
				}}
			>
				<ArrowForward fontSize="large" />
			</IconButton>
		</Box>
	);
};

export default FlipBookCtn;
