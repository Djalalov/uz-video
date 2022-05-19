import Head from "next/head";
import Image from "next/image";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Results from "./components/Results";
import requests from "../utils/requests";

export default function Home(props) {
	return (
		<div className="flex min-h-screen flex-col">
			<Head>
				<title>Uz Video</title>
			</Head>

			<Header />
			<main>
				{/* Header */}
				{/* Nav */}
				<Nav />

				{/* Body */}

				<Results results={props.res} />
			</main>
		</div>
	);
}

export async function getServerSideProps(context) {
	const genre = context.query.genre;

	const res = await fetch(
		`https://api.themoviedb.org/3${requests[genre]?.url}`
	).then(res => res.json());

	if (!res) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			res: res.results,
		},
	};
}
