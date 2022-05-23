import { useRouter } from "next/router";
import requests from "../../utils/requests";

const Nav = () => {
	const router = useRouter();

	return (
		<nav className="mt-10 relative lg:ml-8 bg-zinc-900">
			<div className="flex mt-6 mb-6 md:mt-8  whitespace-nowrap space-x-8 px-4  overflow-x-scroll scrollbar-hide items-center">
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
