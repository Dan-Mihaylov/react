import CatalogItem from "./CatalogItem";
import { useGames } from "../../api/gameApi";


export default function Catalog() {
	const { games } = useGames();

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