import React, { useEffect } from "react";
import ReactFlow, { Controls, Edge, Node, Position, useStoreApi } from "reactflow";

import { useAppSelector } from "../redux";

const initialNodes: Node[] = [
	{
		id: "1",
		position: { x: 0, y: 0 },
		data: { label: "1" },
		type: "input",
		sourcePosition: Position.Right,
	},
	{
		id: "2",
		position: { x: 0, y: 100 },
		data: { label: "2" },
		type: "input",
		sourcePosition: Position.Right,
	},
];
const initialEdges: Edge[] = [];

export const Graph: React.FC = () => {
	const nodes = useAppSelector((state) => state.graph.nodes);
	const { setState } = useStoreApi();

	useEffect(() => {}, [nodes]);

	return (
		<div className="h-full w-full">
			<ReactFlow nodes={initialNodes} edges={initialEdges}>
				<Controls />
			</ReactFlow>
		</div>
	);
};
