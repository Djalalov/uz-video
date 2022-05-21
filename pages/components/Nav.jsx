import { useRouter } from "next/router";
import requests from "../../utils/requests";

const Nav = () => {
	const router = useRouter();

	return (
		<nav className="relative">
			<div className="flex px-5 sm:px-8 whitespace-nowrap space-x-5 sm:space-x-10 overflow-x-scroll scrollbar-hide">
				{Object.entries(requests).map(([key, { title, url }]) => (
					<h2
						key={key}
						onClick={() => router.push(`/?genre=${key}`)}
						className="last:pr-10 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-amber-500 active:text-red-500"
					>
						{title}
					</h2>
				))}
			</div>
			<div className="absolute top-0 right-0 bg-gradient-to-l from-[#f6f6f6] h-10 w-1/6" />
		</nav>
	);
};

export default Nav;
