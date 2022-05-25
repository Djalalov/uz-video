import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Results = ({ results }) => {
	//console.log(results);

	return (
		<FlipMove className="bg-gradient-to-b from-black to-black/80 ">
			<div className="sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:mx-5 3xl:flex flex-wrap justify-center">
				{results.map(result => (
					<Thumbnail key={result.id} result={result} />
				))}
			</div>
			<footer className="flex items-center justify-center border-t border-black/70 text-slate-300/80 text-sm font-semibold md:text-base h-8 lg:h-10 bg-black/70">
				<div>Uz Video | Elyorbek Djalalov | 2022</div>
			</footer>
		</FlipMove>
	);
};

export default Results;
