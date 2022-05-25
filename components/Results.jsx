import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Results = ({ results }) => {
	//console.log(results);

	return (
		<FlipMove className="bg-gradient-to-b from-black to-black/70">
			<div className="sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:mx-5 3xl:flex flex-wrap justify-center">
				{results.map(result => (
					<Thumbnail key={result.id} result={result} />
				))}
			</div>
		</FlipMove>
	);
};

export default Results;
