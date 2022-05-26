import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { baseUrl } from "../utils/const";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/outline";
import { modalState, movieState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

const Banner = ({ trends }) => {
	const [movie, setMovie] = useState(null);
	const [showModal, setShowModal] = useRecoilState(modalState);
	const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

	useEffect(() => {
		setMovie(trends[Math.floor(Math.random() * trends.length)]);
	}, [trends]);

	return (
		<div className="flex flex-col lg:h-[80vh]">
			<div className="absolute top-0 left-0 min-h-[85vh] lg:h-[80vh] w-screen -z-50 ">
				<Image
					src={`${baseUrl}${movie?.backdrop_path}`}
					alt=""
					layout="fill"
					objectFit="cover"
					priority
				/>
			</div>

			<div className="space-y-4 md:space-y-8 bg-black/40 max-w-fit p-4 mt-64">
				<h1 className="text-2xl md:text-4xl lg:text-7xl">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<p className=" max-w-xs text-xs md:max-w-lg lg:max-w-2xl lg:text-xl">
					{movie?.overview}
				</p>

				<div className="flex space-x-3">
					<button
						onClick={() => {
							setCurrentMovie(movie);
							setShowModal(true);
						}}
						className="bannerBtn bg-white text-black"
					>
						<FaPlay className="h-4 w-4 text-black md:h-5 md:w-5pg" />
						Play
					</button>
					<button className="bannerBtn bg-gray-600/70">
						Ko&apos;proq malumot{" "}
						<InformationCircleIcon className="h-5 w-5 md:h-6 md:w-6" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
/* Math.floor(Math.random() * trends.length) */
