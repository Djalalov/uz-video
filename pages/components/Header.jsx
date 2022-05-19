import Image from "next/image";
import logo from "../../public/logo.png";
import HeaderItem from "./HeaderItem";
import {
	BadgeCheckIcon,
	CollectionIcon,
	HomeIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
	return (
		<header className=" flex flex-col md:flex-row my-6 mx-6 lg:my-2 lg:mx-14 justify-between items-center">
			<Image
				src={logo}
				alt="logo"
				width="200"
				height="75"
				className="object-contain flex-grow xl:ml-10"
			/>
			<div className="flex justify-evenlys gap-4 max-w-2xl mt-6 sm:mt-14 translate-y-2">
				<HeaderItem title="BOSH SAHIFA" Icon={HomeIcon} />
				<HeaderItem title="TREND" Icon={LightningBoltIcon} />
				<HeaderItem title="TASDIQLANGAN" Icon={BadgeCheckIcon} />
				<HeaderItem title="KOLLEKSIYA" Icon={CollectionIcon} />
				<HeaderItem title="QIDIRUV" Icon={SearchIcon} />
				<HeaderItem title="PROFIL" Icon={UserIcon} />
			</div>
		</header>
	);
};

export default Header;
