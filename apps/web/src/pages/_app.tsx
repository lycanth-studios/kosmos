import "@/styles/globals.css";
import "reactflow/dist/style.css";

import { KosmosProvider } from "@kosmos/ui";

import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
	return (
		<KosmosProvider>
			<Component {...pageProps} />
		</KosmosProvider>
	);
}
