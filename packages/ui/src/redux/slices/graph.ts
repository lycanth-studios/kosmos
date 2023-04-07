import "immer";

import { Node, NodeInstance } from "@kosmos/core";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GraphState {
	nodes: NodeInstance[];
}

const initialState: GraphState = {
	nodes: [],
};

export const graph = createSlice({
	name: "graph",
	initialState,
	reducers: {
		addNode: (
			state,
			action: PayloadAction<{
				node: Node;
			}>
		) => {
			state.nodes.push(new NodeInstance(action.payload.node));
		},
	},
});

export const { addNode } = graph.actions;
