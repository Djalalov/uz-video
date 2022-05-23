import Head from "next/head";
import Header from "../components/Header";
import Results from "../components/Results";
import requests from "../utils/requests";
import Banner from "../components/Banner";
import Nav from "../components/Nav";

export default function Home(props) {
	return (
		<div className="flex min-h-screen flex-col relative">
			<Head>
				<title>Asosiy | Uz Video</title>
			</Head>
			<Header />
			<Banner trends={props.results} />
			<Nav />
			<main className="relative lg:space-y-24">
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
