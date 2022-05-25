import { useRouter } from "next/router";
import requests from "../utils/requests";

const Nav = () => {
	const router = useRouter();

	return (
		<nav className="mt-20 relative lg:mt-0 lg:flex lg:items-center lg:justify-center bg-black">
			<div className="flex mt-6 mb-6 whitespace-nowrap space-x-8 px-4  overflow-x-scroll scrollbar-hide items-center">
				{Object.entries(requests).map(([key, { title, url }]) => (
					<button
						key={key}
						onClick={() => router.push(`/?genre=${key}`)}
						className="btn text-center"
					>
						{title}
					</button>
				))}
			</div>
		</nav>
	);
};

export default Nav;
