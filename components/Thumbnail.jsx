/* eslint-disable react/display-name */
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";

const Thumbnail = forwardRef(({ result }, ref) => {
	const BASE_URL = "https://image.tmdb.org/t/p/original/";

	const [showModal, setShowModal] = useRecoilState(modalState);
	const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

	return (
		<div
			onClick={() => {
				setCurrentMovie(result);
				setShowModal(true);
			}}
			ref={ref}
			className="group cursor-pointer sm:rounded-xl transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 pb-5 sm:mb-0 xs:border-b border-slate-300 sm:m-2 sm:max-w-md lg:max-w-lg lg:mt-2"
		>
			<Image
				className="sm:rounded-xl"
				alt=""
				width={1920}
				height={1080}
				layout="responsive"
				priority
				src={
					`${BASE_URL}${result.backdrop_path || result.poster_path}` ||
					`${BASE_URL}${result.poster_path}`
				}
			/>

			<div className="p-2">
				<p className="truncate max-w-md">{result.overview}</p>
				<h2 className="mt-1 text-2xl  transition-all duration-100 ease-in-out group-hover:font-bold">
					{result.title || result.original_name}
				</h2>
				<p className="flex items-center sm:opacity-0 sm:group-hover:opacity-100">
					{result.media_type && `${result.media_type} * `}{" "}
					{result.release_date || result.first_air_date} *
					<ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
				</p>
			</div>
		</div>
	);
});

export default Thumbnail;
