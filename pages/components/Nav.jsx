import { useRouter } from "next/router";
import requests from "../../utils/requests";

const Nav = () => {
	const router = useRouter();

	return (
		<nav className="relative">
			<div className="flex mt-6 mb-6 whitespace-nowrap space-x-2 sm:space-x-10 overflow-x-scroll scrollbar-hide items-center">
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
