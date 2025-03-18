import gameServices from "../../services/gameServices";
import { useNavigate } from "react-router"; 
import { useCreateGame } from "../../api/gameApi";

export default function GameCreate () {
    let navigate = useNavigate();
    const { create } = useCreateGame();

    const submitFormHandler = async (formData) => {
        const gameData = Object.fromEntries(formData);
        const createdGame = await create(gameData);
        if (!createdGame.errors) {
            navigate('/catalog');
            return;
        }
    }


	return (
		
        // <!-- Create Page ( Only for logged-in users ) -->
        <section id="create-page" className="auth">
            <form action={ submitFormHandler } id="create">
                <div className="container">

                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter game title..."/>

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter game category..."/>

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1"/>

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..."/>

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Create Game"/>
                </div>
            </form>
        </section>
	)
}
