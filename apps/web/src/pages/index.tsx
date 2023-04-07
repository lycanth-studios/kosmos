import { Graph, KosmosRenderer } from "@kosmos/ui";

export default function Home() {
	return (
		<div className="flex flex-col w-full">
			<div className="w-full">
				<KosmosRenderer />
			</div>
			<Graph />
		</div>
	);
}
