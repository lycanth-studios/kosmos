import * as React from "react";
import { Handle, Position } from "reactflow";

import { NodeInstance } from "@kosmos/core";

const makeNodeInputs = (instance: NodeInstance) => {
	return Array.from(instance.node.inputs.values()).map((input) => {
		return <Handle type="target" position={Position.Left} id={input.name} key={input.name} />;
	});
};

const makeNodeOutputs = (instance: NodeInstance) => {
	return Array.from(instance.node.outputs.values()).map((output) => {
		return <Handle type="source" position={Position.Right} id={output.name} key={output.name} />;
	});
};

const TerrainNodeComponent: React.FC<{ instance: NodeInstance }> = ({ instance }) => {
	return (
		<div className="p-2">
			<h3>{instance.node.name}</h3>
			{makeNodeInputs(instance)}
			{makeNodeOutputs(instance)}
		</div>
	);
};

export const TerrainNode = React.memo(TerrainNodeComponent);
