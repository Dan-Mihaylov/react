import { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router";

import gameServices from "../../services/gameServices";
import CommentsCreate from "../comments/CommentsCreate";
import commentServices from "../../services/commentServices";
import Comments from "../comments/Comments";
import { UserContext } from "../../context/UserContext";

export default function Details () {
    const { email } = useContext(UserContext);
    const [game, setGame] = useState({});
    const [comments, setComments] = useState([]);
    const {gameId} = useParams();
    const navigate = useNavigate();


    useEffect(() => {

        const getGameDetails = async (gameId) => {
            const result = await gameServices.getGame(gameId);
            return result;
        };

        getGameDetails(gameId)
        .then(data => setGame(data));

        commentServices.getAllGameComments(gameId)
        .then(setComments)


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

    const onCommentCreateHandler = (data) => {
        setComments(comments => [...comments, data])
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

                    {
                        comments.length > 0
                        ? <Comments items={comments} />
                        : <p className="no-comment">No comments.</p>
                    }
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                <div className="buttons">
                    <Link to={`/games/edit/${gameId}`} className="button">Edit</Link>
                    <a href="#" onClick={deleteGameHandler} className="button">Delete</a>
                </div>

            </div>

            <CommentsCreate email={email} gameId={gameId} onCreate={onCommentCreateHandler}/>

        </section>
	)
}