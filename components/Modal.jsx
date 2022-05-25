import MuiModal from "@mui/material/Modal";
import { modalState, movieState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import {
	PlusIcon,
	ThumbUpIcon,
	VolumeOffIcon,
	VolumeUpIcon,
	XIcon,
} from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player/lazy";

const Modal = () => {
	const [showModal, setShowModal] = useRecoilState(modalState);
	const [movie, setMovie] = useRecoilState(movieState);
	const [trailer, setTrailer] = useState("");
	const [muted, setMuted] = useState(false);
	const { user } = useAuth();
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		async function fetchMovie() {
			const data = await fetch(
				`https://api.themoviedb.org/3/${
					movie?.media_type === "tv" ? "tv" : "movie"
				}/${movie?.id}?api_key=${
					process.env.NEXT_PUBLIC_API_KEY
				}&language=en-US&append_to_response=videos`
			)
				.then(response => response.json())
				.catch(err => console.log(err.message));

			if (data?.videos) {
				const index = data.videos.results.findIndex(
					element => element.type === "Trailer"
				);
				setTrailer(data.videos?.results[index]?.key);
			}
			if (data?.genres) {
				setGenres(data.genres);
			}
		}

		fetchMovie();
	}, [movie]);

	const handleClose = () => {
		setShowModal(false);
	};

	return (
		<MuiModal
			open={showModal}
			onClose={handleClose}
			className="fixed !top-0 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
		>
			<>
				<div className="relative pt-[56.25%]">
					<ReactPlayer
						width="100%"
						height="100%"
						style={{ position: "absolute", top: "0", left: "0" }}
						playing
						muted={muted}
						url={`http://youtube.com/watch?v=${trailer}`}
					/>
				</div>

				<div className="flex rounded-b-md bg-[#181818] pb-8">
					<div className="space-y-6 text-md ">
						<div className="flex w-full items-center justify-between px-10 bg-black h-16 ">
							<div className="flex space-x-2">
								<button className="modalBtn">
									<PlusIcon className="h-7 w-7" />
								</button>
								<button className="modalBtn">
									<ThumbUpIcon className="h-7 w-7" />
								</button>
							</div>

							<button
								onClick={handleClose}
								className="modalBtn hover:bg-red-600/70 "
							>
								<XIcon className="h-7 w-7" />
							</button>

							<button className="modalBtn" onClick={() => setMuted(!muted)}>
								{muted ? (
									<VolumeOffIcon className="h-7 w-7" />
								) : (
									<VolumeUpIcon className="h-7 w-7" />
								)}
							</button>
						</div>
						{console.log(movie)}
						<div className="flex flex-col items-start text-md px-10 ">
							<p className="font-normal text-green-400">
								Tanlov: {movie.vote_average * 10}%
							</p>
							<div className="flex space-x-2">
								<p className="font-normal">
									Chiqarilgan sana:{" "}
									{movie?.release_date || movie?.first_air_date}
								</p>
								<div className="flex bg-red-600/70 h-5 items-center justify-center rounded px-2 text-xs font-bold">
									HD
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-x-10 gap-y-4 px-10 font-light md:flex-row">
							<p className="w-5/6">{movie?.overview}</p>
							<div className="flex flex-col space-y-3 text-sm">
								<div>
									<span className="text-[gray]">Janir: </span>
									{genres.map(genre => genre.name).join(", ")}
								</div>
								<div>
									<span className="text-[gray]">Asosiy til: </span>
									{movie?.original_language}
								</div>

								<div>
									<span className="text-[gray]">Ovozlar soni: </span>
									{movie?.vote_count}
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		</MuiModal>
	);
};

export default Modal;
