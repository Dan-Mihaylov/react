import { useState, useEffect } from "react"
import styles from './MoviesTable.module.css';

export default function MoviesTable (props) {

	const [movies, setMovies] = useState(props.movies);
	const [movieList, setMovieList] = useState(<></>);

	useEffect(()=>{
		setMovieList(<>
				{movies.map((movie) => {
					console.log('MOVIE ID:   ', movie._id)
			return (
			<>
				<tr key={movie._id}>
					<td>{movie.name}</td>
					<td>{movie.genre}</td>
					<td>{movie.year}</td>
				</tr>
			</>
			)
		})}
		</>);
	}, [movies])


	const removeFirstEventHandler = (movies) => {
		setMovies(movies.slice(1, movies.length));
	}

	const removeLastEventHandler = (movies) => {
		setMovies(movies.slice(0, movies.length - 1));
	}

	return (
		<>
		
		<table key="table" className={styles.table}>
			<thead key="tableHead">

			<tr key="tableRow">
				<th key="movieName">Name</th>
				<th key="movieGenre">Genre</th>
				<th key="movieYear">Creation Year</th>
			</tr>
			</thead>

			<tbody key="body">
				{movieList}
			</tbody>
		</table>


		<button onClick={() => removeFirstEventHandler(movies)}>
			Remove First
		</button>
		
		<button onClick={() => removeLastEventHandler(movies)}>
			Remove Last
		</button>


		
		
		</>
	)

}
