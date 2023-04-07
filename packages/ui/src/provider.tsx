import * as React from "react";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "./redux";

export const KosmosProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
	<ReduxProvider store={store}>{children}</ReduxProvider>
);
