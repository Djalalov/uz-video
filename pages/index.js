import Head from "next/head";
import Image from "next/image";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Results from "./components/Results";
import requests from "../utils/requests";

export default function Home(props) {
	return (
		<div className="flex min-h-screen flex-col relative">
			<Head>
				<title>Uz Video</title>
			</Head>

			{/* Header */}
			<Header />
			<main>
				{/* Nav */}
				<Nav />

				{/* Body */}

				<Results results={props.results} />
			</main>
		</div>
	);
}

export async function getServerSideProps(context) {
	const genre = context.query.genre;

	if (!genre) {
		var response = await fetch(
			`https://api.themoviedb.org/3${requests.fetchTrending.url}`
		).then(res => res.json());
	} else {
		response = await fetch(
			`https://api.themoviedb.org/3${requests[genre]?.url}`
		).then(res => res.json());
	}

	if (!response) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			results: response.results,
		},
	};
}
