import { useEffect, useRef } from "react";

export const useEffectOnce = (fn: () => void) => {
	const wasExecutedRef = useRef(false);
	useEffect(() => {
		if (!wasExecutedRef.current) {
			fn();
		}
		wasExecutedRef.current = true;
	}, [fn]);
};
