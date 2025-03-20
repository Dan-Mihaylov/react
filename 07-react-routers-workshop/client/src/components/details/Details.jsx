import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router";

import CommentsCreate from "../comments/CommentsCreate";
import Comments from "../comments/Comments";
import { UserContext } from "../../context/UserContext";
import { useGame, useGameDelete } from "../../api/gameApi";
import { useComments } from "../../api/commentsApi";

export default function Details() {
    const { email, isAuthenticated, _id: userId } = useContext(UserContext);
    const { gameId } = useParams();
    const { game } = useGame(gameId);
    const { comments, setComments } = useComments(gameId);
    const { deleteGame } = useGameDelete();
    const navigate = useNavigate();

    const isOwner = game._ownerId === userId;

    const deleteGameHandler = async () => {
        const hasConfirmed = confirm('Are you sure you want to delete this game?');

        if (!hasConfirmed) {
            return;
        }

        await deleteGame(gameId);
        navigate('/catalog');
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

                {isOwner
                    &&
                    <div className="buttons">
                        <Link to={`/games/edit/${gameId}`} className="button">Edit</Link>
                        <a href="#" onClick={deleteGameHandler} className="button">Delete</a>
                    </div>
                }
            </div>
            {!isOwner
                &&
                isAuthenticated
                &&
                <CommentsCreate email={email} gameId={gameId} onCreate={onCommentCreateHandler} />
            }
        </section>
    )
}