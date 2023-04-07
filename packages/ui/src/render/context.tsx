import React, { createContext, useContext, useMemo, useState } from "react";

import { useEffectOnce } from "../hooks/useEffectOnce";

interface RenderContext {
	error: null | unknown;
	loading: boolean;
	render: {
		initialize: () => void;
	} | null;
}

export const Context = createContext<RenderContext>({
	error: null,
	loading: true,
	render: null,
});

export const useRenderContext = () => {
	const context = useContext(Context);
	return context;
};

export const RenderProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	const [context, setContext] = useState<typeof import("kosmos-render") | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<unknown | null>(null);

	const contextValue: RenderContext | null = useMemo(() => {
		return {
			error,
			loading,
			render: {
				initialize: () => {
					context?.initialize_bevy();
				},
			},
		};
	}, [context, error, loading]);

	useEffectOnce(() => {
		const load = async () => {
			try {
				const render = await import("kosmos-render");
				setContext(render);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};
		load();
	});

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
