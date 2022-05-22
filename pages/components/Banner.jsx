import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { baseUrl } from "../../utils/const";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/outline";

const Banner = ({ trends }) => {
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		setMovie(trends[Math.floor(Math.random() * trends.length)]);
	}, [trends]);

	//console.log(`${baseUrl}${movie?.backdrop_path || movie.poster_path}`);
	return (
		<div className="flex flex-col py-16 space-y-2 md:space-y-4 lg:h-[64vh] lg:justify-end lg:pb-12">
			<div className="absolute top-0 left-0 h-[95vh] w-screen -z-50">
				<Image
					src={`${baseUrl}${movie?.backdrop_path}`}
					alt=""
					layout="fill"
					objectFit="cover"
				/>
			</div>

			<div className="space-y-4 bg-gray-900/50 max-w-fit p-4">
				<h1 className="text-2xl md:text-4xl lg:text-7xl">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<p className=" max-w-xs text-xs md:max-w-lg lg:max-w-2xl lg:text-xl">
					{movie?.overview}
				</p>

				<div className="flex space-x-3">
					<button className="bannerBtn bg-white text-black">
						<FaPlay className="h-4 w-4 text-black md:h-5 md:w-5pg" />
						Play
					</button>
					<button className="bannerBtn bg-gray-600/70">
						More Info{" "}
						<InformationCircleIcon className="h-5 w-5 md:h-6 md:w-6" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
/* Math.floor(Math.random() * trends.length) */
