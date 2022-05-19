const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
//const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
	fetchTrending: {
		title: "Trend",
		url: `/trending/all/week/api_key=${API_KEY}`,
	},
	fetchTopRated: {
		title: "Eng sara",
		url: `/movie/top_rated?api_key=${API_KEY}`,
	},
	fetchActionMovies: {
		title: "Animatsion",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	},
	fetchComedyMovies: {
		title: "Komediya",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	},
	fetchHorrorMovies: {
		title: "Qorqinchli",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	},
	fetchRomanceMovies: {
		title: "Romantika",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	},

	fetchDocumentaries: {
		title: "Hujjatli filmlar",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
	},
};
export default requests;
/* 
  
const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

const requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
}

export default requests */
