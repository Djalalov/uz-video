import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

const Banner = ({ trends }) => {
	const [movie, setMovie] = useState(null);
	console.log(trends[0].adult);
	useEffect(() => {
		setMovie(trends[0]);
	}, [trends]);

	console.log(movie.backdrop_path);
	return (
		<div>
			<div>
				<Image
					src={`${movie?.backdrop_path || movie.poster_path}`}
					alt=""
					layout="fill"
				/>
			</div>
		</div>
	);
};

export default Banner;
/* Math.floor(Math.random() * trends.length) */
