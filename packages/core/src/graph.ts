import { assertDefined } from "./assert";

/**
 * A type of node.
 */
export interface Node {
	name: string;
	inputs: Map<string, Parameter>;
	outputs: Map<string, Parameter>;
}

export interface Parameter {
	name: string;
	type: ParameterType;
	connectionType: ConnectionType;
	required: boolean;
}

export enum ParameterType {
	Terrain,
	Float,
}

export enum ConnectionType {
	Single,
	Multi,
}

export class Connection {
	constructor(
		readonly from: NodeInstance,
		readonly fromParameter: Parameter,
		readonly to: NodeInstance,
		readonly toParameter: Parameter
	) {
		this.from = from;
		this.fromParameter = fromParameter;
		this.to = to;
		this.toParameter = toParameter;
	}
}

export class NodeInstance {
	readonly inputs: Map<string, Connection> = new Map();
	readonly outputs: Map<string, Connection> = new Map();

	constructor(public readonly node: Node) {}

	/**
	 * Returns true if all required inputs are connected.
	 */
	validate(): boolean {
		// check inputs are correct
		if (this.node.inputs.size > this.inputs.size) {
			return false;
		}
		// check all required inputs are connected and all types are correct
		for (const [name, parameter] of this.node.inputs) {
			if (parameter.required && !this.inputs.has(name)) {
				return false;
			}
			const connection = this.inputs.get(name);
			if (connection && connection.fromParameter.type !== parameter.type) {
				return false;
			}
		}
		return true;
	}
}

export class Graph {
	readonly nodes: NodeInstance[] = [];

	/**
	 * Returns true if all nodes are valid.
	 */
	validate(): boolean {
		for (const node of this.nodes) {
			if (!node.validate()) {
				return false;
			}
		}
		return true;
	}

	containsCycles(): boolean {
		const visited: Set<NodeInstance> = new Set(); // pre-allocate array
		const stack: NodeInstance[] = new Array(this.nodes.length); // pre-allocate array

		for (const node of this.nodes) {
			if (visited.has(node)) {
				continue;
			}
			stack.push(node);

			while (stack.length > 0) {
				const v = stack.pop();
				assertDefined(v);
				if (stack.includes(v)) {
					return true;
				}
				visited.add(v);
				for (const connection of v.outputs.values()) {
					stack.push(connection.to);
				}
			}
		}
		return false;
	}
}
