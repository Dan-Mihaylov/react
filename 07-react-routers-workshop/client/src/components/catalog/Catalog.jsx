import { useState, useEffect } from "react";
import CatalogItem from "./CatalogItem";
import gameServices from "../../services/gameServices";


export default function Catalog() {
	const [games, setGames] = useState([]);

	useEffect(() => {

		const getGames = async () => {
			const result = await gameServices.getAll();
			return result;
		};

		getGames()
			.then(data => setGames(data));

	}, [])



	return (
		// < !--Catalogue -- >
		<section id="catalog-page">
			<h1>All Games</h1>
			{/* <!-- Display div: with information about every game (if any) --> */}

			{
				games.map(game =>
					<CatalogItem
						key={game._id}
						game={game}
					/>
				)
			}

			{/* <!-- Display paragraph: If there is no games  --> */}
			{
				games.length === 0 &&
				<h3 className="no-articles">No articles yet</h3>
			}
		</section>
	)
}