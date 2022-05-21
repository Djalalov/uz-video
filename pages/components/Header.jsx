import Image from "next/image";
import logo from "../../public/logo.png";
import HeaderItem from "./HeaderItem";
import { useRouter } from "next/router";
import requests from "../../utils/requests";

import {
	BadgeCheckIcon,
	CollectionIcon,
	HomeIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
	const router = useRouter();

	return (
		<header className="flex flex-col md:flex-row my-6 mx-6 lg:mt-6 lg:mx-14 justify-between items-center lg:mb-12">
			<div>
				<Image
					src={logo}
					alt="logo"
					width="200"
					height="75"
					className="object-contain flex-grow xl:ml-10"
				/>
			</div>
			<nav className="relative">
				<div className="flex px-10 sm:px-16 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
					{Object.entries(requests).map(([key, { title, url }]) => (
						<button
							key={key}
							onClick={() => router.push(`/?genre=${key}`)}
							className="opacity-90 bg-gradient-to-r from-[#eeaf51] via-[#ea5f23] to-[#ea1a66] rounded-full px-4 py-2 text-black font-bold text-base last:pr-10 cursor-pointer transition duration-100 transform hover:bg-slate-700 active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-500"
						>
							{title}
						</button>
					))}
				</div>
				<div className="absolute top-0 right-0 bg-gradient-to-l from-[#0b0f17] h-10 w-1/6 lg:hidden" />
			</nav>
			{/* <div className="flex gap-4 max-w-2xl sm:mt-14 md:mt-4 lg:mt-6 translate-y-2">
				<HeaderItem title="ASOSIY" Icon={HomeIcon} />
				<HeaderItem title="TREND" Icon={LightningBoltIcon} />
				<HeaderItem title="TASDIQLANGAN" Icon={BadgeCheckIcon} />
				<HeaderItem title="KOLLEKSIYA" Icon={CollectionIcon} />
				<HeaderItem title="QIDIRUV" Icon={SearchIcon} />
				<HeaderItem title="PROFIL" Icon={UserIcon} />
			</div> */}
		</header>
	);
};

export default Header;
