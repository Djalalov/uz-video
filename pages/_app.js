import { Authprovider } from "../hooks/useAuth";
import "../styles/globals.css";
//import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }) {
	return (
		<Authprovider>
			<Component {...pageProps} />;
		</Authprovider>
	);
}

export default MyApp;
