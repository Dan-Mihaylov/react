import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";


export default function Header() {
	const { isAuthenticated } = useContext(UserContext);


	return (
		<header>
			<h1><Link className="home" to="/">GamesPlay</Link></h1>
			<nav>
				<Link to="/catalog">All games</Link>
				{isAuthenticated
					&&
					<div id="user">
						<Link to="/games/create">Create Game</Link>
						<Link to="/logout">Logout</Link>
						<Link to="/admin">Admin</Link>
					</div>
				}
				{!isAuthenticated
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