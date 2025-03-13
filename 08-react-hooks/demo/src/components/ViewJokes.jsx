import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const baseUrl = 'https://api.freeapi.app/api/v1/public/randomjokes';

export default function ViewJokes() {

    const [pending, jokes] = useFetch(baseUrl, []);

    return (
        <>
            <h1>View Jokes Page...</h1>
            {
                pending
                    ? <p>Jokes loading...</p>
                    : jokes.map(joke => <>
                        <div className="container">
                            <h5>Joke id: {joke.id}</h5>
                            <p>{joke.content}</p>
                        </div>
                    </>
                    )
            }
        </>
    )

}