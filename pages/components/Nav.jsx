import { useRouter } from "next/router";
import requests from "../../utils/requests";

const Nav = () => {
	const router = useRouter();
	return (
		<nav className="relative">
			<div className="flex px-10 sm:px-16 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
				{/* <h2
					//onClick={() => router.push(`/?genre=${key}`)}
					className="last:pr-10 cursor-pointer transi duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
				></h2> */}

				{Object.entries(requests).map(([key, { title, url }]) => (
					<h2
						key={key}
						onClick={() => router.push(`/?genre=${key}`)}
						className="last:pr-10 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
					>
						{title}
					</h2>
				))}
			</div>
			<div className="absolute top-0 right-0 bg-gradient-to-l from-[#0f0707] h-10 w-1/6" />
		</nav>
	);
};

export default Nav;
