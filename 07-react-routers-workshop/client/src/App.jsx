import { useState } from 'react'
import { Routes, Route } from 'react-router';
import { UserContext } from './context/UserContext';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Details from './components/details/Details';
import Catalog from './components/catalog/Catalog';
import GameEdit from './components/game-edit/GameEdit';
import GameCreate from './components/game-create/GameCreate';

function App() {
	const [authData, setAuthData] = useState({
		_id: '',
		email: '',
		username: '',
		accessToken: '',
	});

	const userLoginHandler = (authData) => {
		setAuthData(authData);
	}

	return (
		<div id="box">

			<UserContext.Provider value={{ ...authData, userLoginHandler }}>

				<Header />

				<main id="main-content">
					<Routes>
						<Route path="" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/games/create" element={<GameCreate />} />
						<Route path="/games/edit/:gameId" element={<GameEdit />} />
						<Route path="/details/:gameId" element={<Details email={authData.email} />} />
						<Route path="/catalog" element={<Catalog />} />
					</Routes>
				</main>
			</UserContext.Provider>

		</div>
	)
}

export default App;
