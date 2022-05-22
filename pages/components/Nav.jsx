import { useRouter } from "next/router";
import requests from "../../utils/requests";

const Nav = () => {
	const router = useRouter();

	return (
		<nav className="relative">
			<div className="flex px-5 sm:px-8 whitespace-nowrap space-x-12 mt-32 sm:space-x-10 overflow-x-scroll scrollbar-hide items-center">
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
			<div className="absolute top-0 right-0 bg-gradient-to-l from-[#f6f6f6] h-10 w-1/6 sm:hidden" />
		</nav>
	);
};

export default Nav;
