import { Authprovider } from "../hooks/useAuth";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
//import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }) {
	return (
		<RecoilRoot>
			<Authprovider>
				<Component {...pageProps} />
			</Authprovider>
		</RecoilRoot>
	);
}

export default MyApp;
