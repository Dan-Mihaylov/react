import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";


export default function Header() {
	const { email } = useContext(UserContext);


	return (
		<header>
			<h1><Link className="home" to="/">GamesPlay</Link></h1>
			<nav>
				<Link to="/catalog">All games</Link>
				{email
					&&
					<div id="user">
						<Link to="/games/create">Create Game</Link>
						<Link to="/logout">Logout</Link>
					</div>
				}
				{!email
					&&
					<div id="guest">
						<Link to="/login">Login</Link>
						<Link to="/register">Register</Link>
					</div>
				}
			</nav>
		</header>
	)
}