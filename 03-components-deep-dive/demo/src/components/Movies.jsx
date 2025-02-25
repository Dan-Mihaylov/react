import { useEffect, useState } from "react";
import MoviesTable from "./MoviesTable";

export default function Movies (props) {
	const [getMoviesBtn, setGetMoviesBtn] = useState(false);
	const [moviesData, setMoviesData] = useState([]);

	const moviesUrl = '/movies.json';

	useEffect(() => {
		console.log('Use Effect');
		
		const getMovies = async () => {
			try {
				
				const response = await fetch(moviesUrl);
				const data = await response.json();
				setMoviesData(data);
				console.log('moviesData: ', moviesData);
			
			} catch (error) {
				console.error(error);
			}
		}

		getMovies();

		return () => {
			setMoviesData([]);
		}
		

	}, [getMoviesBtn]);

	const getMoviesClickHandler = (state) => {
		setGetMoviesBtn(!state);
	}


	return (
		<>
		
		<h1>Movies List With Fetch, useState and Keys</h1>

		{moviesData.length === 0 ? <p>No movies yet</p> : <MoviesTable movies={moviesData}></MoviesTable>}

		<button 
			onClick={()=>getMoviesClickHandler(getMoviesBtn)}>Get Movies
		</button>

		</>
	)

}

