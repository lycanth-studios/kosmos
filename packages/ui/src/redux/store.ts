import { configureStore } from "@reduxjs/toolkit";

import { graph } from "./slices/graph";

export const store = configureStore({
	reducer: {
		graph: graph.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
