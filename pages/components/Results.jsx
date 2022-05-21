import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Results = ({ results }) => {
	//console.log(results);

	return (
		<FlipMove className="mt-8 pt-4">
			<div className="sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
				{results.map(result => (
					<Thumbnail key={result.id} result={result} />
				))}
			</div>
		</FlipMove>
	);
};

export default Results;
