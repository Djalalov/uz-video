import Head from "next/head";
import Image from "next/image";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Results from "./components/Results";
import { useRouter } from "next/router";

import requests from "../utils/requests";

export default function Home(props) {
	const router = useRouter();
	console.log(props);
	console.log(props.others.results);
	console.log(props.trend.results);

	return (
		<div className="">
			<Head>
				<title>Uz Video</title>
				{/* 				<link rel="icon" href="/favicon.ico" />*/}
			</Head>

			{/* Header */}
			<Header />
			{/* Nav */}
			<Nav />

			{/* Body */}
			<main>
				{/* 	{ {props.others.results ? (
					<Results results={props.others.results} />
				) : (  */}
				<Results results={props.trend.results} />
				{/* 	)} */}
			</main>
		</div>
	);
}

export async function getServerSideProps(context) {
	const genre = context.query.genre;

	const [others, trend] = await Promise.all([
		fetch(`https://api.themoviedb.org/3${requests[genre]?.url}`).then(res =>
			res.json()
		),
		fetch(
			"https://api.themoviedb.org/3/trending/all/week?api_key=92b1f30863d9e531ac106a7aecfac15e"
		).then(res => res.json()),
	]);

	if (!trend && !others) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			trend,
			others,
		},
	};
}
