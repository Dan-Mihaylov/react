import { useLatestGames } from "../../api/gameApi";

import GameItem from "./GameItem";

export default function Home() {
	const { games } = useLatestGames();

	return (
		<section id="welcome-world">

			<div className="welcome-message">
				<h2>ALL new games are</h2>
				<h3>Only in GamesPlay</h3>
			</div>
			<img src="./images/four_slider_img01.png" alt="hero" />

			<div id="home-page">
				<h1>Latest Games</h1>

				{/* <!-- Display div: with information about every game (if any) --> */}
				{
					games.length > 0
						? games.map(game => <GameItem key={game._id} game={game} />)
						: <p className="no-articles">No games yet</p>
				}
			</div>
		</section>
	)
}