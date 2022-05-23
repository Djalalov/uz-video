import Image from "next/image";
import logo from "../../public/logo.png";
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

const Header = () => {
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
			className={`${
				isSrolled && "bg-gray-600/70 backdrop-blur-sm"
			} lg:flex-row`}
		>
			<div>
				<Image
					src={logo}
					alt="logo"
					width="180"
					height="75"
					objectFit="contain"
				/>
			</div>
			<div className="hidden md:flex gap-4 max-w-2xl md:mt-4 lg:pt-2 translate-y-2 ">
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
				<HeaderItem title="QIDIRUV" Icon={SearchIcon} />
				<HeaderItem title="PROFIL" Icon={UserIcon} />
			</div>{" "}
		</header>
	);
};

export default Header;
