"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";

import { useRenderContext } from "./context";

export const KosmosRenderer: React.FC = () => {
	const { loading, render } = useRenderContext();

	const canvasRef = useRef<HTMLCanvasElement>(null);

	// initialize the renderer
	useEffect(() => {
		if (loading) {
			return;
		}
		render?.initialize();
	}, [render, loading]);

	// resize on window change
	useLayoutEffect(() => {
		const handler = () => {
			if (!canvasRef.current) {
				return;
			}
			canvasRef.current.width = window.innerWidth;
			canvasRef.current.height = window.innerHeight;
		};
		window.addEventListener("resize", handler);
		handler();

		// cleanup
		return () => {
			window.removeEventListener("resize", handler);
		};
	}, [canvasRef]);

	return <canvas id="bevy" ref={canvasRef}></canvas>;
};
