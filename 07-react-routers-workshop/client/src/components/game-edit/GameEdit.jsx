import { useEffect, useState } from "react"
import gameServices from "../../services/gameServices";
import { useParams, useNavigate } from "react-router";

export default function GameEdit () {
    const [game, setGame] = useState({});
    const {gameId} = useParams();
    const navigate = useNavigate();

    useEffect(() =>{
        const getGame = async () => {
            const currGame = await gameServices.getGame(gameId);
            return currGame;
        };

        getGame()
        .then(currGame => setGame(currGame));

    }, [])

    const handleFormSubmission = async (formData) => {
        
        // Need to attach the gameId

        const gameData = Object.fromEntries(formData);
        gameData._id = gameId;
        
        gameServices.editGame(gameId, gameData)
        .then(navigate(`/details/${gameId}`));
        
    }

    return (
		
        // <!-- Edit Page ( Only for the creator )-->
        <section id="edit-page" className="auth">
            <form id="edit" action={handleFormSubmission}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" defaultValue={game.title}/>

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" defaultValue={game.category}/>

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" defaultValue={game.maxLevel}/>

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={game.imageUrl}/>

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={game.summary}></textarea>
                    <input className="btn submit" type="submit" defaultValue="Edit Game"/>

                </div>
            </form>
        </section>
	)
}