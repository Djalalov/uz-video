import Head from "next/head";
import Image from "next/image";
import Header from "./components/Header";
import Results from "./components/Results";
import requests from "../utils/requests";
import Banner from "./components/Banner";

export default function Home(props) {
	console.log(props.results);
	return (
		<div className="flex min-h-screen flex-col relative bg-gradient-to-b z-50">
			<Head>
				<title>Uz Video</title>
			</Head>
			<Header />
			{/* Header */}
			<main className="relative pt-44 lg:space-y-24">
				<Banner trends={props.results} />
				{/* Nav */}

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
