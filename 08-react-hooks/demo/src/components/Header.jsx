import { Link } from "react-router";
import { UserContext } from "../context/userContext";
import { useContext } from "react";

export default function Header () {
	const { username, imageUrl } = useContext(UserContext);


	return (
		<>
			<header className='header'>
				<ul className='nav-elements'>
					<Link to="/">HOME</Link>
					<Link to="/info">ADD INFO</Link>
					<Link to="/jokes">VIEW JOKES</Link>
				</ul>

				<div style={{"display": "flex", "paddingRight": "2rem", "justifyContent": "center", "alignItems": "center", "gap": "1rem"}}>
					<p>{username}</p>
					<img src={imageUrl} alt="" className="profile-image" />
				</div>
			</header>
		</>
	)

}