import { useState } from 'react'
import './App.css'
import MovieListItem from './components/MovieListItem';

function App() {
    const [movies, setMovies] = useState([
        { id: 1, title: 'The Matrix' },
        { id: 2, title: 'Man of Steel' },
        { id: 3, title: 'The Case for Christ' },
        { id: 4, title: 'Lord of the Rings' },
        { id: 5, title: 'Harry Potter' },
        { id: 6, title: 'The Matrix' },
    ]);

    const removeFirstHandler = () => {
        movies.shift() // DONT DO THIS!!! AT HOME

        // !When updating state with reference type we need to set new reference on udpate
        setMovies([...movies]);
        // setMovies(movies.slice());
    };

    // * Keys should be unique among siblings
    // * Keys should be unchanged between renders
    return (
        <>
            <h2>Movie List</h2>
            <ul>
                {movies.map((movie) => <MovieListItem key={movie.id} movie={movie} />)}
            </ul>

            <button onClick={removeFirstHandler}>Remove First</button>
        </>
    )
}

export default App
