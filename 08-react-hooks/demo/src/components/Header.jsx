import { Link } from "react-router";

export default function Header () {

	return (
		<>
			<header className='header'>
				<ul className='nav-elements'>
					<Link to="/">HOME</Link>
					<Link to="/info">ADD INFO</Link>
					<Link to="/jokes">VIEW JOKES</Link>
				</ul>
			</header>
		</>
	)

}