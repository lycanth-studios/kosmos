import * as React from "react";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "./redux";
import { RenderProvider } from "./render/context";

export const KosmosProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
	<ReduxProvider store={store}>
		<RenderProvider>{children}</RenderProvider>
	</ReduxProvider>
);
