import { useEffect, useState } from "react";
import gameServices from "../../services/gameServices";
import { Link, useNavigate, useParams } from "react-router";

export default function Details () {
    const [game, setGame] = useState({});
    const {gameId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        const getGameDetails = async (gameId) => {
            const result = await gameServices.getGame(gameId);
            return result;
        };

        getGameDetails(gameId)
        .then(data => setGame(data));

    }, [gameId])
    
    const deleteGameHandler = async () => {
        const hasConfirmed = confirm('Are you sure you want to delete this game?');

        if (!hasConfirmed) {
            return;
        }

        await gameServices
        .deleteGame(gameId)
        .then(navigate('/catalog'))
    }

    return (
		
        // <!--Details Page-->
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* <!-- list all comments for current game (If any) --> */}
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    {/* <!-- Display paragraph: If there are no games in the database --> */}
                    <p className="no-comment">No comments.</p>
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                <div className="buttons">
                    <Link to={`/games/edit/${gameId}`} className="button">Edit</Link>
                    <a href="#" onClick={deleteGameHandler} className="button">Delete</a>
                </div>
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment"/>
                </form>
            </article>

        </section>
	)
}