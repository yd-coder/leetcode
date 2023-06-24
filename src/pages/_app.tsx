import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<Head>
				<title>力扣（LeetCode）官网 - 全球极客挚爱的技术成长平台</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel="icon" href="/favicon.png" sizes="any" />
				<meta
					name='description'
					content='力扣（LeetCode）官网 - 全球极客挚爱的技术成长平台'
				/>
			</Head>
			<ToastContainer />
			<Component {...pageProps} />
		</RecoilRoot>
	);
}
