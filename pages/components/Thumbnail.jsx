import Image from "next/image";

const Thumbnail = ({ result }) => {
	console.log(result);
	const BASE_URL = "https://image.tmdb.org/t/p/original/";
	return (
		<div>
			<Image
				alt=""
				width={1920}
				height={1080}
				layout="responsive"
				src={
					`${BASE_URL}${result.backdrop_path || result.poster_path}` ||
					`${BASE_URL}${result.poster_path}`
				}
			/>

			<div></div>
		</div>
	);
};

export default Thumbnail;
