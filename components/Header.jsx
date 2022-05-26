import Image from "next/image";
import logo from "../public/logo.png";
import HeaderItem from "./HeaderItem";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import {
	BadgeCheckIcon,
	CollectionIcon,
	HomeIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from "@heroicons/react/outline";
import useAuth from "../hooks/useAuth";

const Header = () => {
	const { logout } = useAuth();
	const router = useRouter();
	const [isSrolled, setIsSrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsSrolled(true);
			} else {
				setIsSrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={`${isSrolled && "bg-black/40 backdrop-blur-sm"} w-full `}
		>
			<div className="pl-2 ">
				<Image
					src={logo}
					alt="logo"
					width="160"
					height="75"
					objectFit="contain"
				/>
			</div>
			<div className="flex ">
				{/* 	<HeaderItem title="ASOSIY" Icon={HomeIcon} /> */}
				{/* 		<HeaderItem
					title="TREND"
					Icon={LightningBoltIcon}
					onClick={() => {
						router.push("http://localhost:3000/?genre=fetchTrending");
					}}
				/>
				<HeaderItem title="TASDIQLANGAN" Icon={BadgeCheckIcon} />
				<HeaderItem title="KOLLEKSIYA" Icon={CollectionIcon} /> */}
				<div className="flex translate-y-5 md:translate-y-6">
					<HeaderItem title="QIDIRUV" Icon={SearchIcon} className="" />
					<HeaderItem title="PROFIL" Icon={UserIcon} />
				</div>
				<button
					onClick={logout}
					className="my-4 mx-2 md:mx-4 p-1 lg:p-2 border-2 rounded-full font-semibold transition duration-200 ease-in cursor-pointer transform hover:scale-x-105 hover:text-orange-400 hover:border-orange-400"
				>
					Chiqish
				</button>
			</div>{" "}
		</header>
	);
};

export default Header;
