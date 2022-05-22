import Image from "next/image";
import logo from "../../public/logo.png";
import HeaderItem from "./HeaderItem";
import { useState, useEffect } from "react";

import {
	BadgeCheckIcon,
	CollectionIcon,
	HomeIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
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
		<header className={`${isSrolled && "bg-[#f9f9f9e7]"}`}>
			<div>
				<Image
					src={logo}
					alt="logo"
					width="180"
					height="75"
					className="object-contain flex-grow xl:ml-10"
				/>
			</div>
			<div className="flex gap-4 max-w-2xl sm:mt-14 md:mt-4 lg:mt-6 translate-y-2">
				<HeaderItem title="ASOSIY" Icon={HomeIcon} />
				<HeaderItem title="TREND" Icon={LightningBoltIcon} />
				<HeaderItem title="TASDIQLANGAN" Icon={BadgeCheckIcon} />
				<HeaderItem title="KOLLEKSIYA" Icon={CollectionIcon} />
				<HeaderItem title="QIDIRUV" Icon={SearchIcon} />
				<HeaderItem title="PROFIL" Icon={UserIcon} />
			</div>{" "}
		</header>
	);
};

export default Header;
